//go:generate rice embed-go

package altium

import (
	"fmt"
	"html/template"
	"log"
	"net"
	"net/http"
	"os"

	rice "github.com/GeertJohan/go.rice"
	"github.com/zserge/lorca"
)

type templateData struct {
	Id   string
	Name string
}

func OpenProject(id string, name string) error {
	// FIX: Removed "--disable-gpu" to allow WebGL and the 3D view to function correctly.
	// Kept the other flags for compatibility and to prevent other potential UI launch issues.
	args := []string{
		"--no-sandbox",
		"--disable-dev-shm-usage",
		"--remote-allow-origins=*",
	}

	// Use the standard logger for more detailed output during this stage.
	infoLog := log.New(os.Stdout, "", log.Ltime)

	infoLog.Println("Initializing UI window...")
	ui, err := lorca.New("", "", 800, 600, args...)
	if err != nil {
		// This error will be caught if Chrome/Edge is not found at all.
		infoLog.Printf("Lorca initialization failed: %v", err)
		infoLog.Println("Please ensure Google Chrome or Microsoft Edge is installed and accessible in your system's PATH.")
		return err
	}
	defer ui.Close()
	infoLog.Println("UI framework initialized.")

	lis, err := net.Listen("tcp", "127.0.0.1:0") // Listen on a random free port
	if err != nil {
		return err
	}
	defer lis.Close()

	// Serve static assets from the embedded rice box.
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(rice.MustFindBox("assets").HTTPBox())))

	indexTemplate, err := template.New("index.html").Parse(rice.MustFindBox("templates").MustString("index.html.tmpl"))
	if err != nil {
		return err
	}

	// Serve the main index.html file.
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		err := indexTemplate.Execute(res, &templateData{
			Id:   id,
			Name: name,
		})
		if err != nil {
			http.Error(res, err.Error(), http.StatusInternalServerError)
		}
	})

	errc := make(chan error, 1)
	go func() {
		infoLog.Printf("Starting local server at http://%s\n", lis.Addr())
		errc <- http.Serve(lis, nil)
	}()

	// Load the URL of our local server into the Lorca window.
	if err := ui.Load(fmt.Sprintf("http://%s", lis.Addr())); err != nil {
		infoLog.Printf("Failed to load URL into Lorca window: %v\n", err)
		return err
	}

	infoLog.Println("Viewer window initialized. Waiting for it to be closed...")

	// The select statement blocks until either an error occurs or the UI is closed.
	select {
	case err := <-errc:
		infoLog.Printf("Local server error: %v", err)
		return err
	case <-ui.Done():
		infoLog.Println("Viewer window closed by user or process.")
	}

	return nil
}
