package altium

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"log"
	"net"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"sync/atomic"
	"time"

	rice "github.com/GeertJohan/go.rice"
)

// Server handles local serving and proxying
type Server struct {
	listener net.Listener
	BaseURL  string
}

// NewServer creates and starts a new local server
func NewServer(designId, filename string) (*Server, error) {
	lis, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return nil, err
	}

	s := &Server{
		listener: lis,
		BaseURL:  fmt.Sprintf("http://%s", lis.Addr()),
	}

	// Ensure output directory exists
	if err := os.MkdirAll("requests", 0755); err != nil {
		return nil, err
	}

	mux := http.NewServeMux()

	// Downloads Handler
	mux.HandleFunc("/downloads/", s.downloadsHandler)

	// Proxy Handler
	mux.HandleFunc("/proxy/", s.proxyHandler)
    mux.HandleFunc("/api/", s.proxyHandler)

	// Proxy Download Handler
	mux.HandleFunc("/proxy_download", s.proxyDownloadHandler)

	// Asset Handler
	mux.HandleFunc("/assets/", s.assetHandler)

	// Index Handler
	mux.HandleFunc("/", s.indexHandler(designId, filename))

	go func() {
		log.Printf("Starting local server at %s\n", s.BaseURL)
        // Wrap mux with logging middleware
        loggingMux := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            start := time.Now()
            ww := &responseWrapper{ResponseWriter: w, statusCode: 200}
            // Workaround for undefined domain in client JS
            if strings.Contains(r.URL.Path, "/undefined/api/") {
                 log.Println("Intercepting malformed request with 'undefined':", r.URL.Path)
                 // Extract /api/... part
                 if idx := strings.Index(r.URL.Path, "/api/"); idx != -1 {
                     r.URL.Path = "/proxy" + r.URL.Path[idx:]
                     s.proxyHandler(w, r)
                     return
                 }
            }
            // Explicitly catch api/widget/get if it comes without undefined but still needs proxying/mocking
            if strings.Contains(r.URL.Path, "api/widget/get") && !strings.HasPrefix(r.URL.Path, "/proxy/") {
                 // Ensure it is routed to proxy handler if not already
                 r.URL.Path = "/proxy/" + strings.TrimPrefix(r.URL.Path, "/")
                 s.proxyHandler(w, r)
                 return
            }

            mux.ServeHTTP(ww, r)
            log.Printf("[%s] %s %s %d %s", r.Method, r.URL.Path, r.RemoteAddr, ww.statusCode, time.Since(start))
        })
		if err := http.Serve(lis, loggingMux); err != nil {
			log.Printf("Server error: %v", err)
		}
	}()

	return s, nil
}

func (s *Server) Close() error {
	return s.listener.Close()
}

type responseWrapper struct {
    http.ResponseWriter
    statusCode int
}

func (w *responseWrapper) WriteHeader(code int) {
    w.statusCode = code
    w.ResponseWriter.WriteHeader(code)
}

// Proxy Download Handler: Fetches and streams external file, caching it locally
func (s *Server) proxyDownloadHandler(w http.ResponseWriter, r *http.Request) {
	url := r.URL.Query().Get("url")
	filename := r.URL.Query().Get("filename")

	if url == "" || filename == "" {
		http.Error(w, "Missing url or filename param", http.StatusBadRequest)
		return
	}

	localPath := filepath.Join("downloads", filename)
	
	// Create request
	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, "Failed to fetch upstream: "+err.Error(), http.StatusBadGateway)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		w.WriteHeader(resp.StatusCode)
		io.Copy(w, resp.Body)
		return
	}

	// Create local file
	out, err := os.Create(localPath)
	if err != nil {
		log.Printf("Failed to create cache file %s: %v", localPath, err)
		// Still verify/stream just the content even if cache fails?
		// Better to fail or just stream. Let's stream but log error.
	} else {
		defer out.Close()
	}

	// Stream to both file and response
	var writer io.Writer = w
	if out != nil {
		writer = io.MultiWriter(w, out)
	}
	
	// Copy headers
	w.Header().Set("Content-Type", resp.Header.Get("Content-Type"))
	w.Header().Set("Content-Length", resp.Header.Get("Content-Length"))

	io.Copy(writer, resp.Body)
}

var requestCounter int64

func (s *Server) proxyHandler(w http.ResponseWriter, r *http.Request) {
	// OFFLINE REPLAY LOGIC
	// Check if we have a stored response for this request type.

	// 1. Mock Upload (POST /proxy/api/widget/set)
	// We want to force the client to use the DesignID we have recorded, so we replay the upload response.
	if r.Method == "POST" && strings.Contains(r.URL.Path, "widget/set") {
		// Look for 001_set.json (assuming it's the upload response)
		content, err := os.ReadFile("requests/001_set.json")
		if err == nil {
			log.Println("Replaying Upload Response from requests/001_set.json")
			// We need to parse it to get headers and status, or just serve the body if that's what we have.
			// The file format is our Interaction struct.
			var interaction map[string]interface{}
			if json.Unmarshal(content, &interaction) == nil {
				// Set headers
				if headers, ok := interaction["resHeaders"].(map[string]interface{}); ok {
					for k, v := range headers {
						if val, ok := v.([]interface{}); ok {
							for _, s := range val {
								w.Header().Add(k, fmt.Sprintf("%v", s))
							}
						}
					}
				}
				w.WriteHeader(int(interaction["status"].(float64)))
				
				// Return body
				if body, ok := interaction["resBody"]; ok {
					json.NewEncoder(w).Encode(body)
				}
				return
			}
		}
	}

	// 1b. Mock Get (POST /proxy/api/widget/get) - used for initial fetch
	if r.Method == "POST" && strings.Contains(r.URL.Path, "widget/get") {
        // User provided specific response structure for this.
        // {"currentVersion":1,"designId":"...","modules":[...],"status":"Complete"}
        // We will mock this dynamically based on the 001/002 data if possible, or just return a success/complete status
        // so the viewer proceeds to the next step (polling).
        
        // Let's try to extract designId from request body if possible, or use the one we have.
        reqBody, _ := io.ReadAll(r.Body)
        var req map[string]interface{}
        if json.Unmarshal(reqBody, &req) == nil {
             // id might be in req["url"] based on curl: --data-raw '{"url":"..."}'
        }
        
        // We need the design ID. Let's peek at requests/001_set.json or just grab the first 002 file to get the ID.
        var designId string
        files, _ := os.ReadDir("requests")
		for _, f := range files {
			if strings.HasPrefix(f.Name(), "002_") && strings.HasSuffix(f.Name(), ".json") {
                // Filename is 002_<uuid>.json
                parts := strings.Split(f.Name(), "_")
                if len(parts) >= 2 {
                    designId = strings.TrimSuffix(parts[1], ".json")
                    break
                }
            }
        }
        
        if designId == "" {
            designId = "unknown-design-id"
        }

        response := map[string]interface{}{
            "currentVersion": 1,
            "designId": designId,
            "modules": []string{"FABRICATIONVIEW", "BOARDITEMSVISIBILITY", "FULLSCREEN", "HELPPANEL", "FABRICATIONMEASUREMENT"},
            "extendModulesData": []interface{}{},
            "faultCode": 0, // 0 usually means success, user saw 255 but result was Complete. Let's try 0 or 255.
            "originalFaultCode": 0,
            "designType": 0,
            "fileType": "Gerber", // Or whatever defaults
            "status": "Complete",
        }

        log.Printf("Mocking POST /widget/get response for DesignID: %s", designId)
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(response)
        return
	}

	// 2. Mock Poll/Get Data (GET /proxy/api/widget/get/data/{id})
	if r.Method == "GET" && strings.Contains(r.URL.Path, "widget/get/data/") {
		// Extract IDs/Pattern. Simpler: Iterate requests/002*.json and find one that matches.
		// For now, let's hardcode looking for the main data file.
		// In a real generic replay, we'd map URLs.
		// Here we assume single session replay. 002_*.json is the one.
		files, _ := os.ReadDir("requests")
		for _, f := range files {
			if strings.HasPrefix(f.Name(), "002_") && strings.HasSuffix(f.Name(), ".json") {
				content, err := os.ReadFile(filepath.Join("requests", f.Name()))
				if err == nil {
					var interaction map[string]interface{}
					if json.Unmarshal(content, &interaction) == nil {
						// Check if the URL roughly matches (ignoring ID differences if we forced ID in step 1, but we should match ID)
						// Actually, better to just serve it.
						log.Printf("Replaying Data Response from %s", f.Name())
						
						// Rewrite Logic
						log.Printf("Start rewriting logic for %s", f.Name())
						resBody, ok := interaction["resBody"].(map[string]interface{})
                        if !ok {
                            log.Printf("Error: resBody is not a map")
                            continue
                        }
						data, ok := resBody["data"].(map[string]interface{})
                        if !ok {
                            log.Printf("Error: data is not a map")
                            continue
                        }
						filesList, ok := data["files"].([]interface{})
                        if !ok {
                            log.Printf("Error: files is not a list")
                            continue
                        }
						
						log.Printf("Found %d files in filesList", len(filesList))

						for i, fileItem := range filesList {
							f, ok := fileItem.(map[string]interface{})
                            if !ok { 
                                log.Printf("Item %d is not a map", i)
                                continue 
                            }
							if originalName, ok := f["originalName"].(string); ok {
                                fileType, _ := f["fileType"].(string)
                                log.Printf("Processing file: %s (Type: %s)", originalName, fileType)

                                // Determine unique local filename
                                localFilename := originalName
                                if fileType == "CamPreview" {
                                    localFilename = originalName + ".png"
                                } else if fileType == "CamGraphite" {
                                    localFilename = originalName + ".graphite"
                                }
                                log.Printf("Resolved localFilename: %s", localFilename)

								// Check if file exists locally in downloads/
                                localPath := filepath.Join("downloads", localFilename)

                                if _, err := os.Stat(localPath); err == nil {
                                    // Exists -> Serve directly
                                    newUrl := fmt.Sprintf("%s/downloads/%s", s.BaseURL, localFilename)
                                    f["dataFileUrl"] = newUrl
                                    log.Printf("File exists. Rewriting to: %s", newUrl)
                                } else {
                                    log.Printf("File missing at %s", localPath)
                                    // Missing -> Use Proxy Download
                                    // Original URL from payload
                                    if originalUrl, ok := f["dataFileUrl"].(string); ok {
                                        // Encode params
                                        f["dataFileUrl"] = fmt.Sprintf("%s/proxy_download?url=%s&filename=%s", 
                                            s.BaseURL, 
                                            url.QueryEscape(originalUrl),
                                            url.QueryEscape(localFilename))
                                        log.Printf("Rewriting to proxy_download")
                                    }
                                }
								filesList[i] = f
							} else {
                                log.Printf("Item %d has no originalName", i)
                            }
						}
						data["files"] = filesList
						resBody["data"] = data
						
						// Write modified response
						w.Header().Set("Content-Type", "application/json")
                        w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
                        w.Header().Set("Pragma", "no-cache")
                        w.Header().Set("Expires", "0")
						json.NewEncoder(w).Encode(resBody)
						return
					}
				}
			}
		}
	}

	// 3. Generic Replay (Fallthrough)
	// Attempt to find ANY recorded request that matches the target.
	// This allows replaying static assets (WASM, fonts) or other API calls not explicitly mocked above.
	targetURL := "https://viewer.altium.com" + strings.TrimPrefix(r.URL.Path, "/proxy")
	if r.URL.RawQuery != "" {
		targetURL += "?" + r.URL.RawQuery
	}

    // Only attempt replay if we are likely in offline mode or want to prefer cache on GET
    // For now, let's try to find a match for GET requests.
    if r.Method == "GET" {
        files, _ := os.ReadDir("requests")
		for _, f := range files {
			if strings.HasSuffix(f.Name(), ".json") {
				content, err := os.ReadFile(filepath.Join("requests", f.Name()))
				if err == nil {
					var interaction map[string]interface{}
					if json.Unmarshal(content, &interaction) == nil {
                        storedURL, ok := interaction["url"].(string)
                        if ok && storedURL == targetURL {
                             log.Printf("Replaying Generic Response for %s from %s", targetURL, f.Name())
                             
                             // Set Headers
                             if headers, ok := interaction["resHeaders"].(map[string]interface{}); ok {
                                for k, v := range headers {
                                    if val, ok := v.([]interface{}); ok {
                                        for _, s := range val {
                                            w.Header().Add(k, fmt.Sprintf("%v", s))
                                        }
                                    }
                                }
                            }
                            
                            // Status
                            status := 200
                            if s, ok := interaction["status"].(float64); ok {
                                status = int(s)
                            }
                            w.WriteHeader(status)
                            
                            // Body
                            if bodyFile, ok := interaction["resBodyFile"].(string); ok {
                                http.ServeFile(w, r, bodyFile)
                            } else if body, ok := interaction["resBody"]; ok {
                                json.NewEncoder(w).Encode(body)
                            } else {
                                // Should not happen if data was captured correctly
                                w.WriteHeader(http.StatusNoContent)
                            }
                            return
                        }
                    }
                }
            }
        }
    }

	// Read Request Body
	var reqBody []byte
	if r.Body != nil {
		reqBody, _ = io.ReadAll(r.Body)
		r.Body = io.NopCloser(bytes.NewBuffer(reqBody))
	}

	proxyReq, err := http.NewRequest(r.Method, targetURL, bytes.NewBuffer(reqBody))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Copy headers
	for k, v := range r.Header {
		proxyReq.Header[k] = v
	}
	// Overwrite Host header is usually good practice for proxies but net/http client usually handles it.
	// We might want to clear it to let the library set it.
	proxyReq.Host = "viewer.altium.com"

	client := &http.Client{Timeout: 30 * time.Second}
	resp, err := client.Do(proxyReq)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadGateway)
		return
	}
	defer resp.Body.Close()

	// Read Response Body
	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Save Interaction
	reqId := atomic.AddInt64(&requestCounter, 1)
	go s.saveInteraction(reqId, r.Method, targetURL, r.Header, reqBody, resp.Header, respBody, resp.StatusCode)

	// Write Response Headers
	for k, v := range resp.Header {
		w.Header()[k] = v
	}
	w.WriteHeader(resp.StatusCode)
	w.Write(respBody)
}

func (s *Server) downloadsHandler(w http.ResponseWriter, r *http.Request) {
	filename := strings.TrimPrefix(r.URL.Path, "/downloads/")
	localPath := filepath.Join("downloads", filename)
	http.ServeFile(w, r, localPath)
}

func (s *Server) saveInteraction(id int64, method, url string, reqHeaders http.Header, reqBody []byte, resHeaders http.Header, resBody []byte, statusCode int) {
	filename := fmt.Sprintf("requests/%03d_%s.json", id, sanitizeFilename(filepath.Base(strings.Split(url, "?")[0])))
	
	type Interaction struct {
		Timestamp   string      `json:"timestamp"`
		Method      string      `json:"method"`
		URL         string      `json:"url"`
		ReqHeaders  http.Header `json:"req_headers"`
		ReqBody     string      `json:"req_body_sample"` // Store sample or verify if text
		ResHeaders  http.Header `json:"res_headers"`
		StatusCode  int         `json:"status_code"`
		// Removed ResBodySize to match usage in logic
	}
	
	// For now, dump binary bodies to separate files if needed, or just skip huge blobs in JSON
	// Simple dump for now
	data := map[string]interface{}{
		"id":         id,
		"timestamp":  time.Now().Format(time.RFC3339),
		"method":     method,
		"url":        url,
		"reqHeaders": reqHeaders,
		"resHeaders": resHeaders,
		"status":     statusCode,
	}

	if len(reqBody) > 0 {
		// Try to see if it is JSON
		var js map[string]interface{}
		if json.Unmarshal(reqBody, &js) == nil {
			data["reqBody"] = js
		} else {
			data["reqBodyString"] = string(reqBody) // Potential binary garbage if not careful, but likely text/form-data
		}
	}
	
	// Handle Response Body - if huge or binary, maybe save to separate file
	// For API JSON responses, inline them.
	var resJs interface{} // use interface{} to handle arrays or objects
	if json.Unmarshal(resBody, &resJs) == nil {
		data["resBody"] = resJs
	} else {
		// Write raw body to separate file
		rawFile := fmt.Sprintf("requests/%03d_%s_body.bin", id, sanitizeFilename(filepath.Base(strings.Split(url, "?")[0])))
		os.WriteFile(rawFile, resBody, 0644)
		data["resBodyFile"] = rawFile
	}

	file, _ := os.Create(filename)
	defer file.Close()
	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")
	encoder.Encode(data)
}

func sanitizeFilename(name string) string {
	return strings.Map(func(r rune) rune {
		if (r >= 'a' && r <= 'z') || (r >= 'A' && r <= 'Z') || (r >= '0' && r <= '9') || r == '-' || r == '_' {
			return r
		}
		return '_'
	}, name)
}

func (s *Server) assetHandler(w http.ResponseWriter, r *http.Request) {
    assetName := strings.TrimPrefix(r.URL.Path, "/assets/")
    
    // Serve local client assets (index.html, plugins/*.js)
    if strings.HasPrefix(assetName, "client/") {
        // Path on disk: pkg/altium/assets/client/...
        // We need to serve from the actual filesystem where we downloaded files
        // OR rely on rice if we embedded them?
        // "download_assets.py" downloaded to "pkg/altium/assets/client/"
        // BUT "rice" only embeds what's there at build time.
        // We are running "go run", so we can serve from disk or we need to assume rice won't see them unless we re-run rice.
        // Since we are running dynamically, let's serve from disk for these downloaded assets.
        
        // Relative path from where we run (root of repo)
        // path: pkg/altium/assets/client/...
        localPath := filepath.Join("pkg/altium/assets", assetName)
        
        // Check if file exists locally
        if _, err := os.Stat(localPath); err == nil {
            http.ServeFile(w, r, localPath)
            return
        }
        
        // Fallback: Proxy if missing locally
        log.Printf("Asset missing locally: %s. Proxying to upstream...", assetName)
        // Rewrite URL for proxy handler (needs to look like /proxy/client/...)
        // Current r.URL.Path is /assets/client/...
        // We want /proxy/client/...
        // But wait, our proxyHandler expects /proxy/ prefix to strip or pass through?
        // proxyHandler logic: targetURL := "https://viewer.altium.com" + strings.TrimPrefix(r.URL.Path, "/proxy")
        // So if we set Path to /proxy/client/..., target becomes .../client/... which is correct.
        
        r.URL.Path = strings.Replace(r.URL.Path, "/assets/", "/proxy/", 1)
        s.proxyHandler(w, r)
        return
    }

    // Intercept embed.js
    if assetName == "embed.js" {
        // Read directly from disk to ensure we get the latest changes (and bypass rice if it's acting up)
        contentBytes, err := os.ReadFile("pkg/altium/assets/embed.js")
        if err != nil {
             http.Error(w, err.Error(), http.StatusNotFound)
             return
        }
        content := string(contentBytes)
        
        // Rewrite the API URL and Client URLs
        // Replace VIEWER_DOMAIN
        // Original in our deobfuscated file: "https://viewer.altium.com"
        // New: <BaseURL>/assets (because we are serving client/ under /assets/)
        // Actually, embed.js logic might append /client/index.html to VIEWER_DOMAIN or configured paths.
        // CONFIG in embed.js has:
        // VIEWER_DOMAIN: "https://viewer.altium.com"
        // CLIENT_INDEX: "https://viewer.altium.com/client/index.html"
        
        // We want:
        // VIEWER_DOMAIN: s.BaseURL + "/assets"  (so that /assets/client/... works?)
        // OR s.BaseURL/proxy/ ? No, we are serving static files locally now.
        
        // Let's replace "https://viewer.altium.com" with s.BaseURL + "/assets" ??
        // If we do that:
        // CLIENT_INDEX becomes <BaseURL>/assets/client/index.html -> Served by our assetHandler (disk)
        // API calls?
        // The previous step redirected API calls to <BaseURL>/proxy
        // Does embed.js use VIEWER_DOMAIN for API?
        // In my deobfuscated embed.js, I didn't verify where API calls go.
        // The original logic used relative paths or absolute? 
        // "https://viewer.altium.com" was hardcoded.
        
        // If we replace "https://viewer.altium.com" with s.BaseURL + "/assets",
        // then API calls like "https://viewer.altium.com/api..." become "<BaseURL>/assets/api..." -> 404.
        
        // We need to be surgical.
        // 1. Domain for Static Assets (Client, Plugins) -> s.BaseURL + "/assets"
        // 2. Domain for API -> s.BaseURL + "/proxy"
        
        // Re-reading server.go replacement logic I used before:
        /*
        modified := strings.ReplaceAll(content, "https://viewer.altium.com", s.BaseURL+"/proxy")
        */
        // This was a sledgehammer. It made client/index.html -> proxy/client/index.html (fetched from remote via proxy).
        
        // NOW we want:
        // client/index.html -> local /assets/client/index.html
        // API -> local /proxy/api
        
        // So I will make two replacements:
        // 1. "https://viewer.altium.com/client" -> s.BaseURL + "/assets/client"
        // 2. "https://viewer.altium.com" -> s.BaseURL + "/proxy" (for the rest, i.e. API)
        
        // This order matters! /client is more specific.
        
        modified := content
        modified = strings.ReplaceAll(modified, "https://viewer.altium.com/client", s.BaseURL+"/assets/client")
        modified = strings.ReplaceAll(modified, "https://viewer.altium.com", s.BaseURL+"/proxy")
        
        w.Header().Set("Content-Type", "application/javascript")
        w.Write([]byte(modified))
        return
    }

	http.StripPrefix("/assets/", http.FileServer(rice.MustFindBox("assets").HTTPBox())).ServeHTTP(w, r)
}

func (s *Server) indexHandler(id, name string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		indexTemplate, err := template.New("index.html").Parse(rice.MustFindBox("templates").MustString("index.html.tmpl"))
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		
		err = indexTemplate.Execute(w, &templateData{
			Id:   id,
			Name: name,
		})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}
}
