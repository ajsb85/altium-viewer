/**
 * Webpack Runtime for Altium Web Viewer
 * 
 * This is the deobfuscated Webpack runtime that handles:
 * - Module loading and caching
 * - Chunk loading (code splitting)
 * - Script injection for async chunks
 * - Module exports and ES Module compatibility
 * 
 * Author: Alexander Salas Bastidas (deobfuscation)
 * Original: Webpack 5 Runtime
 * 
 * ===================================================================
 * API REFERENCE - Single Letter to Semantic Name Mapping
 * ===================================================================
 * 
 * NOTE: The single-letter method names CANNOT be changed because
 * compiled chunks (vendors.js, app.js, plugins) reference them.
 * This table provides the semantic meaning for each.
 * 
 * __webpack_require__ Methods:
 * ┌─────────┬─────────────────────────┬─────────────────────────────────────────┐
 * │ Method  │ Semantic Name           │ Description                             │
 * ├─────────┼─────────────────────────┼─────────────────────────────────────────┤
 * │ .m      │ moduleFactories         │ Map of module IDs to factory functions  │
 * │ .c      │ moduleCache             │ Cache of instantiated modules           │
 * │ .d      │ defineExportGetters     │ Define ES module export getters         │
 * │ .e      │ ensureChunk             │ Ensure chunk is loaded (async import)   │
 * │ .f      │ chunkLoadingHandlers    │ Handlers for loading chunks             │
 * │ .f.j    │ jsonpChunkLoading       │ JSONP-based chunk loading               │
 * │ .g      │ globalObject            │ Reference to global (window/globalThis) │
 * │ .l      │ loadScript              │ Load a script by URL                    │
 * │ .n      │ getDefaultExport        │ Get default export wrapper              │
 * │ .o      │ hasOwnProperty          │ Object.hasOwnProperty shortcut          │
 * │ .p      │ publicPath              │ Base path for loading assets            │
 * │ .r      │ markAsEsModule          │ Mark exports as ES Module               │
 * │ .u      │ getChunkFilename        │ Get filename for chunk ID               │
 * │ .b      │ baseURI                 │ Document base URI                       │
 * │ .O      │ onChunksLoaded          │ Deferred module loading with ordering   │
 * │ .O.j    │ isChunkLoaded           │ Check if chunk is loaded                │
 * │ .I      │ initializeSharing       │ Initialize sharing scope                │
 * │ .S      │ sharedScope             │ Shared module scope                     │
 * │ .hmd    │ createHotModule         │ Create HMR-compatible module            │
 * │ .nmd    │ createNodeModule        │ Create Node.js-compatible module        │
 * │ .nc     │ scriptNonce             │ Nonce for script CSP                    │
 * │ .amdO   │ amdOptions              │ AMD module compatibility options        │
 * │ .miniCssF│ getMiniCssFilename     │ Get CSS chunk filename (unused)         │
 * └─────────┴─────────────────────────┴─────────────────────────────────────────┘
 * 
 * Chunk IDs:
 * ┌─────────┬─────────────────────────┬─────────────────────────────────────────┐
 * │ ID      │ File                    │ Description                             │
 * ├─────────┼─────────────────────────┼─────────────────────────────────────────┤
 * │ 21759   │ vendors.js              │ Third-party libraries                   │
 * │ 27262   │ (entry)                 │ Main entry chunk (pre-loaded)           │
 * │ 66951   │ (entry)                 │ Secondary entry chunk (pre-loaded)      │
 * └─────────┴─────────────────────────┴─────────────────────────────────────────┘
 */
(() => {
  "use strict";

  // ===================================================================
  // Core Module System Variables
  // ===================================================================

  /** @type {Function[]} Queue of deferred module loading operations */
  let deferredModulesQueue;

  /** @type {Object} Map of script URLs to their load callbacks */
  let scriptLoadCallbacks;

  /** @type {string} Unique webpack identifier prefix */
  let webpackUniqueId;

  /** @type {Object} Map of module IDs to module factory functions */
  const moduleFactories = {};

  /** @type {Object} Cache of loaded modules (moduleId -> module instance) */
  const moduleCache = {};

  // ===================================================================
  // __webpack_require__ - Core Module Loader
  // ===================================================================

  /**
   * The core module require function.
   * Loads a module by ID, caching the result.
   * 
   * @param {string|number} moduleId - The module identifier
   * @returns {Object} The module's exports
   */
  function __webpack_require__(moduleId) {
    // Check if module is already cached
    const cachedModule = moduleCache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // Create new module and cache it
    const module = moduleCache[moduleId] = {
      id: moduleId,
      loaded: false,
      exports: {}
    };

    // Execute module factory function
    moduleFactories[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Mark as loaded
    module.loaded = true;

    return module.exports;
  }

  // ===================================================================
  // Runtime Properties and Methods
  // ===================================================================

  /** Module factories storage (exposed for chunk loading) */
  __webpack_require__.m = moduleFactories;

  /** AMD options (for AMD module compatibility) */
  __webpack_require__.amdO = {};

  // Initialize deferred modules queue
  deferredModulesQueue = [];

  /**
   * Handle deferred module loading and ordering.
   * Used for ensuring chunks load in correct order.
   * 
   * @param {*} result - Result to return if no dependencies
   * @param {Array} chunkIds - Array of chunk IDs to wait for
   * @param {Function} callback - Callback to execute when ready
   * @param {number} priority - Loading priority (lower = higher priority)
   * @returns {*} The result value
   */
  __webpack_require__.O = (result, chunkIds, callback, priority) => {
    if (!chunkIds) {
      // No dependencies - process deferred queue
      let lowestPriority = Infinity;

      for (let queueIndex = 0; queueIndex < deferredModulesQueue.length; queueIndex++) {
        const [deferredChunkIds, deferredCallback, deferredPriority] = deferredModulesQueue[queueIndex];
        let allChunksReady = true;

        for (let chunkIndex = 0; chunkIndex < deferredChunkIds.length; chunkIndex++) {
          const chunkReady = (
            (deferredPriority & 1 === 0) || lowestPriority >= deferredPriority
          ) && Object.keys(__webpack_require__.O).every(
            (checkFn) => __webpack_require__.O[checkFn](deferredChunkIds[chunkIndex])
          );

          if (chunkReady) {
            deferredChunkIds.splice(chunkIndex--, 1);
          } else {
            allChunksReady = false;
            if (deferredPriority < lowestPriority) {
              lowestPriority = deferredPriority;
            }
          }
        }

        if (allChunksReady) {
          deferredModulesQueue.splice(queueIndex--, 1);
          const callbackResult = deferredCallback();
          if (callbackResult !== undefined) {
            result = callbackResult;
          }
        }
      }
      return result;
    }

    // Add to deferred queue with priority ordering
    priority = priority || 0;
    let insertIndex = deferredModulesQueue.length;

    // Find correct position based on priority
    while (insertIndex > 0 && deferredModulesQueue[insertIndex - 1][2] > priority) {
      deferredModulesQueue[insertIndex] = deferredModulesQueue[insertIndex - 1];
      insertIndex--;
    }

    deferredModulesQueue[insertIndex] = [chunkIds, callback, priority];
  };

  /**
   * Get default export compatibility wrapper.
   * Wraps non-ES modules to provide .default export.
   * 
   * @param {Object} module - The module to wrap
   * @returns {Function} Getter function for default export
   */
  __webpack_require__.n = (module) => {
    const getter = module && module.__esModule
      ? () => module.default
      : () => module;
    __webpack_require__.d(getter, { a: getter });
    return getter;
  };

  /**
   * Define getters for ES Module exports.
   * Makes exports enumerable and adds getter functions.
   * 
   * @param {Object} exports - The exports object to define on
   * @param {Object} definition - Map of export names to getter functions
   */
  __webpack_require__.d = (exports, definition) => {
    for (const key in definition) {
      if (
        __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key)
      ) {
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key]
        });
      }
    }
  };

  /** Chunk loading handlers (populated by chunk loading logic) */
  __webpack_require__.f = {};

  /**
   * Ensure chunk is loaded.
   * Triggers all registered chunk loading handlers.
   * 
   * @param {string|number} chunkId - The chunk to load
   * @returns {Promise} Promise that resolves when chunk is loaded
   */
  __webpack_require__.e = (chunkId) => {
    return Promise.all(
      Object.keys(__webpack_require__.f).reduce((promises, handlerKey) => {
        __webpack_require__.f[handlerKey](chunkId, promises);
        return promises;
      }, [])
    );
  };

  /**
   * Get the filename for a chunk.
   * Maps chunk IDs to their JavaScript file URLs.
   * 
   * @param {string|number} chunkId - The chunk identifier
   * @returns {string} The URL path to the chunk file
   */
  __webpack_require__.u = (chunkId) => {
    // Special case: vendors chunk
    if (chunkId === 21759) {
      return "js/vendors.js?1761730629786";
    }
    // Default: chunk ID based filename
    return "js/" + chunkId + ".js?1761730629786";
  };

  /**
   * Get mini CSS filename (currently no-op).
   * Would return CSS chunk filename if CSS extraction is used.
   * 
   * @param {string|number} chunkId - The chunk identifier
   * @returns {string} Empty (CSS extraction not used)
   */
  __webpack_require__.miniCssF = (chunkId) => { };

  /**
   * Get the global object (globalThis, window, or self).
   * Provides cross-environment global access.
   */
  __webpack_require__.g = (function () {
    if (typeof globalThis === "object") return globalThis;
    try {
      return this || new Function("return this")();
    } catch (error) {
      if (typeof window === "object") return window;
    }
  })();

  /**
   * Create a hot module replacement compatible module object.
   * Used for HMR functionality (development mode).
   * 
   * @param {Object} module - The base module object
   * @returns {Object} HMR-compatible module
   */
  __webpack_require__.hmd = (module) => {
    module = Object.create(module);
    if (!module.children) {
      module.children = [];
    }
    Object.defineProperty(module, "exports", {
      enumerable: true,
      set: () => {
        throw new Error(
          "ES Modules may not assign module.exports or exports.*, " +
          "Use ESM export syntax, instead: " + module.id
        );
      }
    });
    return module;
  };

  /**
   * Check if object has own property.
   * Shortcut for hasOwnProperty check.
   * 
   * @param {Object} obj - Object to check
   * @param {string} prop - Property name
   * @returns {boolean} True if property exists
   */
  __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

  // Initialize script load callbacks map
  scriptLoadCallbacks = {};

  // Set webpack unique identifier
  webpackUniqueId = "altium-web-viewer:";

  /**
   * Load a script by URL.
   * Handles script injection, deduplication, and error handling.
   * 
   * @param {string} url - Script URL to load
   * @param {Function} done - Callback when loaded
   * @param {string} key - Unique key for script identification
   * @param {string|number} chunkId - Associated chunk ID
   */
  __webpack_require__.l = (url, done, key, chunkId) => {
    // Check if already loading this URL
    if (scriptLoadCallbacks[url]) {
      scriptLoadCallbacks[url].push(done);
      return;
    }

    let script, needsInsert;

    // Check if script already exists in DOM
    if (key !== undefined) {
      const existingScripts = document.getElementsByTagName("script");
      for (let i = 0; i < existingScripts.length; i++) {
        const existingScript = existingScripts[i];
        if (
          existingScript.getAttribute("src") === url ||
          existingScript.getAttribute("data-webpack") === webpackUniqueId + key
        ) {
          script = existingScript;
          break;
        }
      }
    }

    // Create new script element if needed
    if (!script) {
      needsInsert = true;
      script = document.createElement("script");
      script.charset = "utf-8";
      script.timeout = 120;
      if (__webpack_require__.nc) {
        script.setAttribute("nonce", __webpack_require__.nc);
      }
      script.setAttribute("data-webpack", webpackUniqueId + key);
      script.src = url;
    }

    scriptLoadCallbacks[url] = [done];

    /**
     * Handle script load completion or error.
     * 
     * @param {Event|Error} previousHandler - Previous handler or error
     * @param {Event} event - Load/error event
     */
    const onScriptComplete = (previousHandler, event) => {
      // Clear handlers and timeout
      script.onerror = script.onload = null;
      clearTimeout(timeout);

      // Get and clear callbacks
      const callbacks = scriptLoadCallbacks[url];
      delete scriptLoadCallbacks[url];

      // Remove script from DOM on error
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }

      // Execute all callbacks
      if (callbacks) {
        callbacks.forEach((callback) => callback(event));
      }

      // Call previous handler if exists
      if (previousHandler) {
        return previousHandler(event);
      }
    };

    // Set timeout (120 seconds)
    const timeout = setTimeout(
      onScriptComplete.bind(null, undefined, { type: "timeout", target: script }),
      120000
    );

    // Attach event handlers
    script.onerror = onScriptComplete.bind(null, script.onerror);
    script.onload = onScriptComplete.bind(null, script.onload);

    // Insert script into DOM
    if (needsInsert) {
      document.head.appendChild(script);
    }
  };

  /**
   * Mark exports as ES Module.
   * Adds __esModule flag and Symbol.toStringTag.
   * 
   * @param {Object} exports - Exports object to mark
   */
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };

  /**
   * Create Node.js compatible module object.
   * 
   * @param {Object} module - Base module object
   * @returns {Object} Node.js compatible module
   */
  __webpack_require__.nmd = (module) => {
    module.paths = [];
    if (!module.children) {
      module.children = [];
    }
    return module;
  };

  // ===================================================================
  // Sharing System (Module Federation)
  // ===================================================================
  (() => {
    /** Shared module scope */
    __webpack_require__.S = {};

    /** Initialization promises by scope */
    const initPromises = {};

    /** Initialized scopes tracker */
    const initializedScopes = {};

    /**
     * Initialize a sharing scope.
     * Used for Module Federation shared modules.
     * 
     * @param {string} scopeName - Name of the sharing scope
     * @param {Array} initScope - Scopes already initialized
     * @returns {Promise|number} Promise or 1 if already initialized
     */
    __webpack_require__.I = (scopeName, initScope) => {
      initScope = initScope || [];

      const scopeTracker = initializedScopes[scopeName];
      if (scopeTracker && initScope.indexOf(scopeTracker) >= 0) {
        return; // Already initialized with this scope
      }

      if (!initializedScopes[scopeName]) {
        initializedScopes[scopeName] = {};
      }

      initScope.push(initializedScopes[scopeName]);

      if (initPromises[scopeName]) {
        return initPromises[scopeName];
      }

      // Ensure scope exists
      if (!__webpack_require__.o(__webpack_require__.S, scopeName)) {
        __webpack_require__.S[scopeName] = {};
      }

      const initTasks = [];
      initPromises[scopeName] = initTasks.length
        ? Promise.all(initTasks).then(() => { initPromises[scopeName] = 1; })
        : 1;

      return initPromises[scopeName];
    };
  })();

  // ===================================================================
  // Public Path Detection
  // ===================================================================
  (() => {
    let scriptUrl;

    // Try to get URL from importScripts (Web Worker)
    if (__webpack_require__.g.importScripts) {
      scriptUrl = __webpack_require__.g.location + "";
    }

    // Try to get URL from document (Browser)
    const document = __webpack_require__.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript) {
        scriptUrl = document.currentScript.src;
      }
      if (!scriptUrl) {
        const scripts = document.getElementsByTagName("script");
        if (scripts.length) {
          scriptUrl = scripts[scripts.length - 1].src;
        }
      }
    }

    if (!scriptUrl) {
      throw new Error("Automatic publicPath is not supported in this browser");
    }

    // Clean URL and derive public path
    scriptUrl = scriptUrl
      .replace(/#.*$/, "")      // Remove hash
      .replace(/\?.*$/, "")     // Remove query string
      .replace(/\/[^\/]+$/, "/"); // Remove filename

    /** Public path for asset loading (goes up one directory) */
    __webpack_require__.p = scriptUrl + "../";
  })();

  // ===================================================================
  // JSONP Chunk Loading
  // ===================================================================
  (() => {
    /** Base URI for chunk loading */
    __webpack_require__.b = document.baseURI || self.location.href;

    /** 
     * Chunk loading status map.
     * 0 = loaded, undefined = not loaded, [resolve, reject, promise] = loading
     */
    const installedChunks = {
      27262: 0,  // Main entry chunk (already loaded)
      66951: 0   // Secondary entry chunk (already loaded)
    };

    /**
     * JSONP chunk loading handler.
     * Loads chunks via script tags and JSONP callback.
     * 
     * @param {string|number} chunkId - Chunk to load
     * @param {Array} promises - Array to push loading promise into
     */
    __webpack_require__.f.j = (chunkId, promises) => {
      let installedChunkData = __webpack_require__.o(installedChunks, chunkId)
        ? installedChunks[chunkId]
        : undefined;

      // Skip if already loaded (0) 
      if (installedChunkData === 0) return;

      // If loading, add promise to array
      if (installedChunkData) {
        promises.push(installedChunkData[2]);
        return;
      }

      // Check if this is an entry chunk that should be immediately available
      if (/^(27262|66951)$/.test(chunkId)) {
        installedChunks[chunkId] = 0;
        return;
      }

      // Create loading promise
      const promise = new Promise((resolve, reject) => {
        installedChunkData = installedChunks[chunkId] = [resolve, reject];
      });
      installedChunkData[2] = promise;
      promises.push(promise);

      // Build chunk URL
      const chunkUrl = __webpack_require__.p + __webpack_require__.u(chunkId);
      const loadError = new Error();

      // Load the chunk script
      __webpack_require__.l(
        chunkUrl,
        (event) => {
          if (
            __webpack_require__.o(installedChunks, chunkId) &&
            installedChunks[chunkId] !== 0
          ) {
            const chunkData = installedChunks[chunkId];
            installedChunks[chunkId] = undefined;

            if (chunkData) {
              const errorType = event && (event.type === "load" ? "missing" : event.type);
              const errorUrl = event && event.target && event.target.src;

              loadError.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + errorUrl + ")";
              loadError.name = "ChunkLoadError";
              loadError.type = errorType;
              loadError.request = errorUrl;

              // Reject the promise
              chunkData[1](loadError);
            }
          }
        },
        "chunk-" + chunkId,
        chunkId
      );
    };

    /**
     * Check if chunk is loaded.
     * Used by deferred loading system.
     * 
     * @param {string|number} chunkId - Chunk to check
     * @returns {boolean} True if chunk is loaded (status === 0)
     */
    __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;

    /**
     * Handle incoming JSONP chunk data.
     * Called when a chunk script loads and pushes to webpackChunk.
     * 
     * @param {*} _ - Unused (for array push compatibility)
     * @param {Array} chunkData - [chunkIds, moreModules, runtime]
     * @returns {*} Result of runtime or deferred loading
     */
    const webpackJsonpCallback = (_, chunkData) => {
      const [chunkIds, moreModules, runtime] = chunkData;
      let result;
      let resolveIndex = 0;

      // Check if any chunks are not yet loaded
      if (chunkIds.some((chunkId) => installedChunks[chunkId] !== 0)) {
        // Register new modules
        for (const moduleId in moreModules) {
          if (__webpack_require__.o(moreModules, moduleId)) {
            __webpack_require__.m[moduleId] = moreModules[moduleId];
          }
        }

        // Execute runtime if provided
        if (runtime) {
          result = runtime(__webpack_require__);
        }
      }

      // Call original array push if exists
      if (_) {
        _(chunkData);
      }

      // Mark chunks as loaded and resolve promises
      while (resolveIndex < chunkIds.length) {
        const chunkId = chunkIds[resolveIndex++];
        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          installedChunks[chunkId][0](); // Resolve promise
        }
        installedChunks[chunkId] = 0; // Mark as loaded
      }

      // Process deferred modules
      return __webpack_require__.O(result);
    };

    /**
     * Global JSONP callback array.
     * Chunks push their data here when they load.
     */
    const webpackChunk = self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || [];

    // Process any chunks that loaded before runtime
    webpackChunk.forEach(webpackJsonpCallback.bind(null, 0));

    // Override push to handle future chunks
    webpackChunk.push = webpackJsonpCallback.bind(null, webpackChunk.push.bind(webpackChunk));
  })();
})();
