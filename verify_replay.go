package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/jmichiels/altium-viewer/pkg/altium"
)

func main() {
    // ID from the captured request log
	designId := "711b2e72-40a7-481e-929c-aaad7aada76d"
	server, err := altium.NewServer(designId, "document.zip")
	if err != nil {
		panic(err)
	}
	defer server.Close()

	// Wait a bit for server to start
	time.Sleep(100 * time.Millisecond)

	fmt.Printf("Server running at %s\n", server.BaseURL)

	// 1. Test Poll Replay and URL Rewrite
    // This matches the URL pattern in requests/002_*.json
	pollUrl := fmt.Sprintf("%s/proxy/api/widget/get/data/%s?version=1", server.BaseURL, designId)
	fmt.Printf("Requesting Poll URL: %s\n", pollUrl)

	resp, err := http.Get(pollUrl)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Response Status: %s\n", resp.Status)
    if resp.StatusCode != 200 {
        fmt.Printf("FAIL: Expected 200 OK, got %d\n", resp.StatusCode)
        os.Exit(1)
    }
	
	var jsonResponse map[string]interface{}
	if err := json.Unmarshal(body, &jsonResponse); err != nil {
		panic(err)
	}

    // Inspect the response structure. 
    // The proxy handler writes the content of "resBody" from the logs.
    // Structure: { "data": { "files": [ { "dataFileUrl": "..." } ] }, "status": "Complete" }
    
    data, ok := jsonResponse["data"].(map[string]interface{})
    if !ok {
        fmt.Println("FAIL: 'data' field missing or invalid in response")
        os.Exit(1)
    }
    
    files, ok := data["files"].([]interface{})
    if !ok || len(files) == 0 {
         fmt.Println("FAIL: 'files' list missing or empty")
         os.Exit(1)
    }
    
    firstFile := files[0].(map[string]interface{})
    url, ok := firstFile["dataFileUrl"].(string)
    if !ok {
        fmt.Println("FAIL: 'dataFileUrl' missing in first file object")
        os.Exit(1)
    }

    fmt.Printf("Rewritten URL: %s\n", url)

    expectedPrefix := server.BaseURL + "/downloads/"
    if !strings.HasPrefix(url, expectedPrefix) {
        fmt.Printf("FAIL: URL not rewritten correctly.\nExpected prefix: %s\nActual URL:      %s\n", expectedPrefix, url)
        os.Exit(1)
    }

    // 2. Test File Download
    fmt.Printf("Fetching rewritten URL...\n")
    fileResp, err := http.Get(url)
    if err != nil {
        panic(err)
    }
    defer fileResp.Body.Close()
    
    if fileResp.StatusCode != 200 {
        fmt.Printf("FAIL: Failed to fetch file. Status: %s\n", fileResp.Status)
        os.Exit(1)
    }

    fileContent, _ := io.ReadAll(fileResp.Body)
    fmt.Printf("File fetch success. Size: %d bytes\n", len(fileContent))
    
    if len(fileContent) == 0 {
         fmt.Println("WARNING: File content is empty.")
    }

    fmt.Println("SUCCESS: Local serving verification passed.")
    os.Exit(0)
}
