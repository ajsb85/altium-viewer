package main

import (
	"fmt"
	"io"         // Use the io package
	stdlog "log" // Alias the standard log package to stdlog
	"os"
	"path/filepath"

	"github.com/jmichiels/altium-viewer/pkg/altium"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Printf("usage: %s my-altium-project.zip\n", filepath.Base(os.Args[0]))
		os.Exit(1)
	}
	// FIX: Use io.Discard instead of the deprecated ioutil.Discard
	// Discard logs from lorca.
	stdlog.SetOutput(io.Discard)
	log := stdlog.New(os.Stdout, "", stdlog.Ltime)
	projectFilePath := os.Args[1]

	projectFile, err := os.Open(projectFilePath)
	if err != nil {
		log.Fatal(err)
	}
	defer projectFile.Close()

	projectFileName := filepath.Base(projectFilePath)
	log.Printf("upload \"%s\" to altium.com\n", projectFileName)

	id, err := altium.UploadProject(projectFile, projectFileName)
	if err != nil {
		if err == io.EOF {
			log.Fatal("Upload failed: The server sent an empty response. This can happen if the API has changed or the request is malformed.")
		}
		log.Fatal(err)
	}

	log.Printf("upload done, open viewer\n")
	if err := altium.OpenProject(id, projectFileName); err != nil {
		log.Fatal(err)
	}
}
