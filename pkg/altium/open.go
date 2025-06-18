// The go:generate directive is a special comment that tells Go's build tools
// to run the 'rice' command before compilation. The 'rice' tool finds all files
// in the specified directories (assets, templates) and embeds them into a Go
// source file (rice-box.go), so they become part of the final executable.
//go:generate rice embed-go

package altium

import (
	"fmt"
	"html/template"
	"log"
	"net"
	"net/http"
	"os"

	// go.rice is a library for embedding static files (HTML, JS, etc.) into a Go binary.
	rice "github.com/GeertJohan/go.rice"
	// lorca is a library for creating lightweight desktop applications using an installed
	// Chrome/Edge browser for the UI.
	"github.com/zserge/lorca"
)

// templateData defines the structure of data that will be passed to the HTML template.
// This allows dynamic values from the Go program to be injected into the HTML page.
type templateData struct {
	Id   string // The unique designId received after uploading a project.
	Name string // The filename of the project, used for the window title.
}

// OpenProject takes a designId and filename, and launches a native desktop window
// to display the corresponding Altium Viewer instance.
func OpenProject(id string, name string) error {
	// These arguments are passed to the Chrome/Edge instance that Lorca launches.
	// They are crucial for ensuring the UI window can start correctly on modern systems,
	// especially Linux, by addressing security and sandbox restrictions.
	args := []string{
		// Disables the GPU sandbox, a common requirement in containerized or restrictive environments.
		"--no-sandbox",
		// Prevents Chrome from using /dev/shm, which can be limited in size on some systems.
		"--disable-dev-shm-usage",
		// Allows the Go application to establish a WebSocket connection to the browser's
		// DevTools protocol, which is necessary for Lorca to control the browser window.
		"--remote-allow-origins=*",
	}

	// Use the standard logger for providing detailed runtime feedback to the console.
	infoLog := log.New(os.Stdout, "", log.Ltime)

	infoLog.Println("Initializing UI window...")
	// lorca.New creates a new UI window. It finds an installed Chrome/Edge browser
	// and launches it in "app mode" with the specified dimensions and arguments.
	ui, err := lorca.New("", "", 800, 600, args...)
	if err != nil {
		// This error is typically thrown if a compatible browser cannot be found.
		infoLog.Printf("Lorca initialization failed: %v", err)
		infoLog.Println("Please ensure Google Chrome or Microsoft Edge is installed and accessible in your system's PATH.")
		return err
	}
	// 'defer ui.Close()' ensures that the browser process is gracefully terminated when the function exits.
	defer ui.Close()
	infoLog.Println("UI framework initialized.")

	// Start a local web server on a random, available TCP port.
	// The address "127.0.0.1:0" tells the OS to pick any open port.
	lis, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return err
	}
	defer lis.Close()

	// Serve static assets (like embed.js) from the embedded 'rice box'.
	// http.FileServer serves files from the virtual filesystem provided by go.rice.
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(rice.MustFindBox("assets").HTTPBox())))

	// Parse the main HTML template file from the embedded 'rice box'.
	indexTemplate, err := template.New("index.html").Parse(rice.MustFindBox("templates").MustString("index.html.tmpl"))
	if err != nil {
		return err
	}

	// Set up a handler for the root URL ("/").
	// When the Lorca window requests this URL, this function will execute.
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		// Execute the template, injecting the design ID and name into the HTML.
		err := indexTemplate.Execute(res, &templateData{
			Id:   id,
			Name: name,
		})
		if err != nil {
			http.Error(res, err.Error(), http.StatusInternalServerError)
		}
	})

	// Run the local web server in a separate goroutine so it doesn't block the main thread.
	errc := make(chan error, 1)
	go func() {
		infoLog.Printf("Starting local server at http://%s\n", lis.Addr())
		errc <- http.Serve(lis, nil)
	}()

	// Tell the Lorca UI window to load the URL of our local server.
	if err := ui.Load(fmt.Sprintf("http://%s", lis.Addr())); err != nil {
		infoLog.Printf("Failed to load URL into Lorca window: %v\n", err)
		return err
	}

	infoLog.Println("Viewer window initialized. Waiting for it to be closed...")

	// This `select` statement blocks the main thread, keeping the program alive.
	// It waits for one of two things to happen:
	select {
	case err := <-errc:
		// The web server goroutine sent an error.
		infoLog.Printf("Local server error: %v", err)
		return err
	case <-ui.Done():
		// The UI window was closed by the user or the process was terminated.
		infoLog.Println("Viewer window closed by user or process.")
	}

	return nil
}
