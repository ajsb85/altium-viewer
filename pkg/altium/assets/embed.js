/**
 * Altium Viewer Client Embed Script
 * Deobfuscated and Semantic Reconstruction
 */

(function () {
    console.log("Initializing Altium Viewer Embed Script...");

    // Configuration Constants
    const CONFIG = {
        NODE_ENV: "production",
        VIEWER_DOMAIN: "https://viewer.altium.com", // This will be replaced by the Go proxy
        CLIENT_INDEX: "https://viewer.altium.com/client/index.html", // This will also be replaced
        PLUGINS: {
            bomview: "js/plugins/BOMView.js",
            bomviewonpremise: "js/plugins/BOMViewOnPremise.js",
            comparedocument: "js/plugins/CompareDocument.js",
            comparelayers: "js/plugins/CompareLayers.js",
            comparepanel: "js/plugins/ComparePanel.js",
            download: "js/plugins/Download.js",
            export: "js/plugins/Export.js",
            exportonpremise: "js/plugins/ExportOnPremise.js",
            fabricationcommentpanel: "js/plugins/FabricationCommentPanel.js",
            fullscreen: "js/plugins/FullScreen.js",
            gerbercomparemeasurement: "js/plugins/GerberCompareMeasurement.js",
            gerbercompareview: "js/plugins/GerberCompareView.js",
            gerberview: "js/plugins/GerberView.js",
            helppanel: "js/plugins/HelpPanel.js",
            measurement: "js/plugins/Measurement.js",
            pcbview: "js/plugins/PCBView.js",
            pcbview3d: "js/plugins/PCBView3D.js",
            previewpanel: "js/plugins/PreviewPanel.js",
            schview: "js/plugins/SCHView.js",
            schcompareview: "js/plugins/SchCompareView.js",
            search: "js/plugins/Search.js",
            select: "js/plugins/Select.js",
            snapping: "js/plugins/Snapping.js",
            supportlibrary: "js/plugins/SupportLibrary.js",
            variants: "js/plugins/Variants.js",
            layers: "js/plugins/layers.js",
            "comparison.gerber": "js/plugins/comparison.gerber.js",
            gerber: "js/plugins/gerber.js",
            "graphite.engine": "js/plugins/graphite.engine.js",
            pcb: "js/plugins/pcb.js",
            sch: "js/plugins/sch.js",
            schcompare: "js/plugins/schCompare.js",
            "search.engine": "js/plugins/search.engine.js"
        }
    };

    /**
     * Creates and configures the Altium Viewer Iframe.
     * @param {string} projectSrc - The value for data-project-src attribute.
     * @returns {HTMLIFrameElement} The configured iframe element.
     */
    function createViewerIframe(projectSrc) {
        const iframe = document.createElement("iframe");
        // The src will be set via postMessage or specialized logic, initially we use data-src
        iframe.setAttribute("data-src", CONFIG.CLIENT_INDEX);
        iframe.setAttribute("class", "lazy altium-web-viewer");
        iframe.setAttribute("style", "overflow:hidden; height:100%; width:100%; border: none;");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("allowfullscreen", "true");

        // Scroll to top on load
        iframe.setAttribute("onload", "window.top.scrollTo(0,0);");

        return iframe;
    }

    /**
     * Generates a unique GUID for the viewer instance.
     * @returns {string} GUID
     */
    function generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * Initializes the viewer by finding the container and injecting the iframe.
     */
    function initViewer() {
        // Find the container element
        const container = document.querySelector(".altium-ecad-viewer");
        if (!container) return;

        // Get the design ID from the attribute
        let projectSrc = container.getAttribute("data-project-src");

        // If not present in attribute, check hidden input
        if (!projectSrc) {
            const hiddenInput = document.querySelector("input[name='project-src']");
            if (hiddenInput && hiddenInput.value) {
                projectSrc = hiddenInput.value;
                container.setAttribute("data-project-src", projectSrc);
            }
        }

        if (projectSrc) {
            // Create the iframe
            const iframe = createViewerIframe(projectSrc);
            const guid = generateGuid();

            // Set up the load handler to initialize communication
            iframe.onload = function (event) {
                const iframeWindow = iframe.contentWindow;
                const parentElement = iframe.parentElement;

                // Collect attributes to pass to the viewer
                const attributes = {};
                attributes.domainOrigin = window.location.href;
                attributes.domain = CONFIG.VIEWER_DOMAIN;

                // Copy all attributes from parent container to the configuration object
                Array.prototype.slice.call(parentElement.attributes)
                    .filter(attr => parentElement.hasAttribute(attr.name) && attr.name !== "style")
                    .forEach(attr => {
                        attributes[attr.name] = attr.value;
                    });

                // Prepare the initialization message
                const initMessage = {
                    id: guid,
                    message: "loadWidget",
                    src: attributes,
                    scheme: location.protocol.replace(":", "")
                };

                // Listen for messages from this specific iframe
                window.addEventListener("message", function (msgEvent) {
                    if (msgEvent && msgEvent.data && msgEvent.data.id === guid) {
                        // Redispatch as a custom event on the container
                        container.dispatchEvent(new CustomEvent(msgEvent.data.message, {
                            detail: {
                                id: guid,
                                data: msgEvent.data.data
                            }
                        }));
                    }
                });

                // Send the initialization message
                iframeWindow.postMessage(initMessage, "*");

                // Expose a helper to post messages back to the iframe
                container.dataset.iframeGuid = guid;
                container.postCustomMessage = function (msg) {
                    iframeWindow.postMessage(msg, "*");
                };
            };

            // Style the container and append iframe
            container.style.overflow = "hidden";
            container.style.width = "100%";
            container.style.height = "100%";
            container.appendChild(iframe);

            // Trigger lazy loading 
            if (iframe.getAttribute("data-src")) {
                iframe.setAttribute("src", iframe.getAttribute("data-src"));
            }

        } else {
            // Hide container if no project source
            container.setAttribute("style", "display:none; width:0; height:0; border:none;");
        }
    }

    // Expose Global API
    window.altiumViewerClient = {
        getViewer: function () {
            return initViewer();
        },
        initViewer: initViewer
    };

    // Auto-initialize if not delayed
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get("delayedinit") !== "true") {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initViewer);
        } else {
            initViewer();
        }
    }

})();