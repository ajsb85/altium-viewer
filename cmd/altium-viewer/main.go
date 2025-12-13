package main

import (
"fmt"
"io"
stdlog "log"
"os"
"path/filepath"
"time"

"github.com/jmichiels/altium-viewer/pkg/altium"
)

func main() {
// --- Initial Setup ---
stdlog.SetOutput(io.Discard)
log := stdlog.New(os.Stdout, "", stdlog.Ltime)

// --- File Handling ---
var projectFilePath string
if _, err := os.Stat("document.zip"); err == nil {
projectFilePath = "document.zip"
log.Println("Using document.zip found in current directory.")
} else if len(os.Args) >= 2 {
projectFilePath = os.Args[1]
} else {
log.Printf("Usage: %s my-altium-project.zip (or have document.zip in root)\n", filepath.Base(os.Args[0]))
os.Exit(1)
}

projectFile, err := os.Open(projectFilePath)
if err != nil {
log.Fatalf("Error opening file: %v", err)
}
defer projectFile.Close()

projectFileName := filepath.Base(projectFilePath)

// --- Start Proxy Server for Upload ---
// Start server with placeholders as we don't have DesignID yet
srv, err := altium.NewServer("placeholder_id", "placeholder_name")
if err != nil {
log.Fatal(err)
}

log.Printf("Upload \"%s\" to altium.com via %s\n", projectFileName, srv.BaseURL)

id, err := altium.UploadProject(projectFile, projectFileName, srv.BaseURL)
if err != nil {
if err == io.EOF {
log.Fatal("Upload failed: Empty response. API changed?")
}
log.Fatal(err)
}
log.Printf("Upload done, designId: %s\n", id)

// --- Status Polling ---
log.Println("Waiting for design to be converted...")
for {
status, err := altium.PollStatus(id, srv.BaseURL)
if err != nil {
log.Fatalf("Error while polling status: %v", err)
}
if status.IsComplete() {
log.Printf("Conversion complete.")
break
}
if status.IsError() {
log.Fatalf("\nError converting: %s", status.Details)
}
fmt.Printf("\rProgress: %d%% (%s)   ", status.Progress, status.Details)
time.Sleep(1 * time.Second)
}

// --- Restart Server for Viewer ---
// Close upload proxy
srv.Close()

// Start new server with correct context (DesignID)
srv, err = altium.NewServer(id, projectFileName)
if err != nil {
log.Fatal(err)
}
defer srv.Close()

// --- Launch Viewer ---
log.Printf("Open viewer at %s\n", srv.BaseURL)
if err := altium.OpenProject(srv.BaseURL); err != nil {
log.Fatal(err)
}
}
