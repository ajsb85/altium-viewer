// The go:generate directive is a special comment that tells Go's build tools
// to run the 'rice' command before compilation. The 'rice' tool finds all files
// in the specified directories (assets, templates) and embeds them into a Go
// source file (rice-box.go), so they become part of the final executable.
//go:generate rice embed-go

package altium

import (
	"log"
	"os"

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
// to display the corresponding Altium Viewer instance, pointing to the local proxy server.
func OpenProject(url string) error {
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
	ui, err := lorca.New("", "", 1024, 768, args...)
	if err != nil {
		// This error is typically thrown if a compatible browser cannot be found.
		infoLog.Printf("Lorca initialization failed: %v", err)
		infoLog.Println("Running in Headless Server Mode.")
		infoLog.Printf("Please open the following URL in your browser: %s", url)
        
        // Block forever to keep the server running
        select {}
	}
	// 'defer ui.Close()' ensures that the browser process is gracefully terminated when the function exits.
	defer ui.Close()
	infoLog.Println("UI framework initialized.")

	// Tell the Lorca UI window to load the URL of our local server.
	if err := ui.Load(url); err != nil {
		infoLog.Printf("Failed to load URL into Lorca window: %v\n", err)
		return err
	}

	infoLog.Println("Viewer window initialized. Waiting for it to be closed...")

	// This `select` statement blocks the main thread, keeping the program alive.
	// It waits for one of two things to happen:
	select {
	case <-ui.Done():
		// The UI window was closed by the user or the process was terminated.
		infoLog.Println("Viewer window closed by user or process.")
	}

	return nil
}
