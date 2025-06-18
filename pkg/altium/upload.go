package altium

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
)

const uploadUrl = "https://viewer.altium.com/api/widget/set"

// newUploadProjectRequest creates the multipart/form-data request to upload the project.
// It has been updated to match the working API request from browser inspection.
func newUploadProjectRequest(projectFile io.Reader, filename string) (*http.Request, error) {
	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)
	
	// The form field name must be "Files" (plural) and we should use the actual filename.
	part, err := writer.CreateFormFile("Files", filename)
	if err != nil {
		return nil, err
	}
	if _, err := io.Copy(part, projectFile); err != nil {
		return nil, err
	}

	if err := writer.Close(); err != nil {
		return nil, err
	}
	
	req, err := http.NewRequest("POST", uploadUrl, body)
	if err != nil {
		return nil, err
	}
	
	// FIX: Add all required headers to mimic a legitimate browser request.
	// The most critical ones are Origin and Referer.
	req.Header.Set("Content-Type", writer.FormDataContentType())
	req.Header.Set("X-AUTH", "anonymous")
	req.Header.Set("Accept", "application/json, text/plain, */*")
	req.Header.Set("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36")
	req.Header.Set("Origin", "https://www.altium365.com")
	req.Header.Set("Referer", "https://www.altium365.com/")
	
	return req, nil
}

type responseJson struct {
	DesignId   string   `json:"designId"`
	Modules    []string `json:"modules"`
	FaultCode  int      `json:"faultCode"`
	DesignType int      `json:"designType"`
	Status     string   `json:"status"`
	Message    string   `json:"message"`
}

func (res *responseJson) Error() string {
	return fmt.Sprintf("%s: %s", res.Status, res.Message)
}

// UploadProject now accepts the filename to create a more accurate request.
func UploadProject(projectFile io.Reader, filename string) (id string, err error) {
	clt := &http.Client{}
	req, err := newUploadProjectRequest(projectFile, filename)
	if err != nil {
		return "", err
	}
	
	res, err := clt.Do(req)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	// The server should now send a valid JSON body, preventing the EOF error.
	var resJson responseJson
	if err := json.NewDecoder(res.Body).Decode(&resJson); err != nil {
		return "", err
	}
	
	if resJson.Status == "Error" {
		return "", &resJson
	}

	return resJson.DesignId, nil
}
