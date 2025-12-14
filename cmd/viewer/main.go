package main

import (
	"log"

	"github.com/jmichiels/altium-viewer/pkg/altium"
)

func main() {
	log.SetFlags(log.Ltime)
	
	// Start server without uploading - just serve the downloads folder
	server, err := altium.NewServer("", "Local Viewer")
	if err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
	
	log.Printf("Altium Viewer running at %s", server.BaseURL)
	log.Printf("Open in browser to view designs from downloads/ folder")
	log.Printf("Default design: 7701036f-fbdc-4a91-9d84-5c5e5d6f3390")
	log.Printf("Use ?uuid=YOUR_UUID to load a different design")
	
	// Use OpenProject to keep the server running (it blocks)
	altium.OpenProject(server.BaseURL)
}
