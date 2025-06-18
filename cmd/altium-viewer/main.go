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
	// Create a new logger that writes to standard output with timestamps.
	// The standard logger from the 'lorca' library is discarded to prevent noisy output.
	stdlog.SetOutput(io.Discard)
	log := stdlog.New(os.Stdout, "", stdlog.Ltime)

	// --- Argument Parsing ---
	// Check if a file path was provided as a command-line argument.
	if len(os.Args) < 2 {
		log.Printf("Usage: %s my-altium-project.zip\n", filepath.Base(os.Args[0]))
		os.Exit(1)
	}
	projectFilePath := os.Args[1]

	// --- File Handling ---
	// Attempt to open the file provided by the user.
	projectFile, err := os.Open(projectFilePath)
	if err != nil {
		log.Fatalf("Error opening file: %v", err)
	}
	// Ensure the file is closed when the main function exits.
	defer projectFile.Close()

	// --- Project Upload ---
	// Extract the filename from the full path.
	projectFileName := filepath.Base(projectFilePath)
	log.Printf("Upload \"%s\" to altium.com\n", projectFileName)

	// Call the UploadProject function, which handles the API request.
	id, err := altium.UploadProject(projectFile, projectFileName)
	if err != nil {
		// Provide a more helpful error message for the common EOF case.
		if err == io.EOF {
			log.Fatal("Upload failed: The server sent an empty response. This can happen if the API has changed or the request is malformed.")
		}
		log.Fatal(err)
	}
	log.Printf("Upload done, designId: %s\n", id)

	// --- Status Polling Loop ---
	// After uploading, poll the server to check the status of the design conversion.
	log.Println("Waiting for design to be converted...")
	for {
		// Call the PollStatus function to get the latest progress.
		status, err := altium.PollStatus(id)
		if err != nil {
			log.Fatalf("Error while polling for status: %v", err)
		}

		// Check if the server has finished successfully.
		if status.IsComplete() {
			log.Printf("Conversion complete.")
			break // Exit the loop.
		}

		// Check if the server reported an error.
		if status.IsError() {
			log.Fatalf("\nError converting design: %s", status.Details)
		}

		// Print the progress to the console. The carriage return '\r' ensures
		// that the progress updates on the same line.
		fmt.Printf("\rProgress: %d%% (%s)   ", status.Progress, status.Details)

		// Wait for one second before polling again to avoid spamming the API.
		time.Sleep(1 * time.Second)
	}

	// --- Launch Viewer ---
	// Once the conversion is complete, open the local viewer window.
	log.Printf("Open viewer\n")
	if err := altium.OpenProject(id, projectFileName); err != nil {
		log.Fatal(err)
	}
}
