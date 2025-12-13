package altium

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"time"
)

// Constants define the API endpoints for uploading and status checking.
const (
	// uploadUrl is the endpoint for submitting new design files for processing.
	uploadUrl = "https://viewer.altium.com/api/widget/set"
	// statusUrlFormat is the endpoint for polling the conversion status of an uploaded design.
	// It requires a designId to be inserted.
	statusUrlFormat = "https://viewer.altium.com/api/widget/get/data/%s?version=1"
)

// newUploadProjectRequest creates a new HTTP POST request formatted for file upload.
// It constructs a multipart/form-data body, which is standard for transferring files.
func newUploadProjectRequest(projectFile io.Reader, filename, baseUrl string) (*http.Request, error) {
	// A Buffer is used to build the request body in memory.
	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)

	// Create a form field for the file.
	part, err := writer.CreateFormFile("file", filename)
	if err != nil {
		return nil, err
	}
	// Copy the file data into the form field.
	if _, err := io.Copy(part, projectFile); err != nil {
		return nil, err
	}

	// Close the writer to finalize the multipart form boundary.
	err = writer.Close()
	if err != nil {
		return nil, err
	}

	// Create the HTTP request.
	url := fmt.Sprintf("%s/proxy/api/widget/set", baseUrl)
	req, err := http.NewRequest("POST", url, body)
	if err != nil {
		return nil, err
	}

	// Set the Content-Type header to multipart/form-data, including the boundary.
	req.Header.Set("Content-Type", writer.FormDataContentType())
	req.Header.Set("X-AUTH", "anonymous")
	req.Header.Set("Accept", "application/json, text/plain, */*")
	req.Header.Set("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36")
	req.Header.Set("Origin", "https://www.altium365.com")
	req.Header.Set("Referer", "https://www.altium365.com/")

	return req, nil
}

// uploadResponseJson defines the structure for parsing the JSON response from the initial upload request.
type uploadResponseJson struct {
	DesignId   string   `json:"designId"`
	Modules    []string `json:"modules"`
	FaultCode  int      `json:"faultCode"`
	DesignType int      `json:"designType"`
	Status     string   `json:"status"`
	Message    string   `json:"message"`
}

// Error allows the uploadResponseJson struct to be used as an error type.
func (res *uploadResponseJson) Error() string {
	return fmt.Sprintf("%s: %s", res.Status, res.Message)
}

// UploadProject uploads a given project file to the Altium Viewer API.
// It returns a designId on success, or an error on failure.
func UploadProject(projectFile io.Reader, filename, baseUrl string) (string, error) {
	// Create the upload request.
	req, err := newUploadProjectRequest(projectFile, filename, baseUrl)
	if err != nil {
		return "", err
	}

	clt := &http.Client{Timeout: 300 * time.Second} // Increased timeout for uploads
	// Send the request to the server.
	res, err := clt.Do(req)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	// Decode the JSON response from the server.
	var resJson uploadResponseJson
	if err := json.NewDecoder(res.Body).Decode(&resJson); err != nil {
		return "", err
	}

	// Check if the API reported an error in the response body.
	if resJson.Status == "Error" {
		return "", &resJson
	}

	// Return the unique designId for the uploaded file.
	return resJson.DesignId, nil
}

// --- Status Polling Logic ---

// StatusResponse defines the structure for parsing the JSON response from the status endpoint.
type StatusResponse struct {
	Status   string `json:"status"`
	Progress int    `json:"progress"`
	Details  string `json:"details"`
	DesignId string `json:"designId"`
}

// IsComplete is a helper method to check if the design processing is finished successfully.
func (s *StatusResponse) IsComplete() bool {
	return s.Status == "Complete"
}

// IsError is a helper method to check if the design processing has failed.
func (s *StatusResponse) IsError() bool {
	return s.Status == "Error"
}

// PollStatus sends a GET request to the Altium API to fetch the current conversion status for a given designId.
func PollStatus(designId, baseUrl string) (*StatusResponse, error) {
	// Construct the specific URL for the status request.
	url := fmt.Sprintf("%s/proxy/api/widget/get/data/%s?version=1", baseUrl, designId)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Accept", "application/json, text/plain, */*")
	req.Header.Set("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36")

	clt := &http.Client{Timeout: 15 * time.Second}
	res, err := clt.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	// Decode the JSON response into the StatusResponse struct.
	var statusResponse StatusResponse
	if err := json.NewDecoder(res.Body).Decode(&statusResponse); err != nil {
		return nil, err
	}

	return &statusResponse, nil
}
