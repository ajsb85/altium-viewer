/**
 * ViewerAppConfig.js - App Configuration and Plugin URLs
 * 
 * Contains the plugin URL mappings and app initialization configuration.
 * Extracted from ViewerApp.js lines 6388-6546.
 */
var ViewerAppConfig = (function (exports) {
    'use strict';

    // ============================================================================
    // PLUGIN URL MAPPINGS
    // ============================================================================

    /**
     * Version suffix for cache busting
     */
    var VERSION = "1761730629786";

    /**
     * Map of module names to their script URLs
     */
    var MODULES_TO_URLS = {
        // ---- View Plugins ----
        advancedsearch: "js/plugins/AdvancedSearch.js?" + VERSION,
        bomcomparedocument: "js/plugins/BOMCompareDocument.js?" + VERSION,
        bomcomparetab: "js/plugins/BOMCompareTab.js?" + VERSION,
        bomcompareview: "js/plugins/BOMCompareView.js?" + VERSION,
        bomview: "js/plugins/BOMView.js?" + VERSION,
        bomviewonpremise: "js/plugins/BOMViewOnPremise.js?" + VERSION,
        boarditemsvisibility: "js/plugins/BoardItemsVisibility.js?" + VERSION,
        ccvcommentpanel: "js/plugins/CCVCommentPanel.js?" + VERSION,
        cadexexport: "js/plugins/CadExExport.js?" + VERSION,
        cadexview: "js/plugins/CadexView.js?" + VERSION,

        // ---- Compare Plugins ----
        comparechangedetails: "js/plugins/CompareChangeDetails.js?" + VERSION,
        comparechanges: "js/plugins/CompareChanges.js?" + VERSION,
        comparedocument: "js/plugins/CompareDocument.js?" + VERSION,
        comparelayers: "js/plugins/CompareLayers.js?" + VERSION,
        comparepanel: "js/plugins/ComparePanel.js?" + VERSION,
        componentview: "js/plugins/ComponentView.js?" + VERSION,
        
        // ---- Design/Details Plugins ----
        designreview: "js/plugins/DesignReview.js?" + VERSION,
        detailspanel: "js/plugins/DetailsPanel.js?" + VERSION,
        download: "js/plugins/Download.js?" + VERSION,
        downloadredirect: "js/plugins/DownloadRedirect.js?" + VERSION,
        
        // ---- View Types ----
        esdview: "js/plugins/ESDView.js?" + VERSION,
        export: "js/plugins/Export.js?" + VERSION,
        exportonpremise: "js/plugins/ExportOnPremise.js?" + VERSION,
        fbom: "js/plugins/FBOM.js?" + VERSION,

        // ---- Fabrication ----
        fabricationcompareview: "js/plugins/FabricationCompareView.js?" + VERSION,
        fabricationmeasurement: "js/plugins/FabricationMeasurement.js?" + VERSION,
        fabricationpcbdwfview: "js/plugins/FabricationPCBDWFView.js?" + VERSION,
        fabricationview: "js/plugins/FabricationView/bundle.js?" + VERSION,
        
        // ---- Full Screen ----
        fullscreen: "js/plugins/FullScreen/bundle.js?" + VERSION,
        
        // ---- Gerber ----
        gerbercomparemeasurement: "js/plugins/GerberCompareMeasurement.js?" + VERSION,
        gerbercompareview: "js/plugins/GerberCompareView.js?" + VERSION,
        
        // ---- Harness ----
        harnessbomview: "js/plugins/HarnessBOMView.js?" + VERSION,
        harnessdetailspanel: "js/plugins/HarnessDetailsPanel.js?" + VERSION,
        
        // ---- Help/Comments ----
        helppanel: "js/plugins/HelpPanel.js?" + VERSION,
        kernelcommentpanel: "js/plugins/KernelCommentPanel.js?" + VERSION,
        
        // ---- LDR/LSM/MBA/MBS ----
        ldrview: "js/plugins/LDRView.js?" + VERSION,
        lsmview: "js/plugins/LSMView.js?" + VERSION,
        lsmback: "js/plugins/LsmBack.js?" + VERSION,
        lsmproperties: "js/plugins/LsmProperties.js?" + VERSION,
        mbaview: "js/plugins/MBAView.js?" + VERSION,
        mbsview: "js/plugins/MBSView.js?" + VERSION,
        
        // ---- Measurement ----
        measurement: "js/plugins/Measurement.js?" + VERSION,
        
        // ---- Multiboard ----
        multiboarddetailspanel: "js/plugins/MultiboardDetailsPanel.js?" + VERSION,
        multiboardfbom: "js/plugins/MultiboardFBOM.js?" + VERSION,
        
        // ---- Comments ----
        onpremcommentpanel: "js/plugins/OnPremCommentPanel.js?" + VERSION,
        
        // ---- PCB ----
        pcbcomparedocument: "js/plugins/PCBCompareDocument.js?" + VERSION,
        pcbcomparelayers: "js/plugins/PCBCompareLayers.js?" + VERSION,
        pcbcompareview: "js/plugins/PCBCompareView.js?" + VERSION,
        pcbdwfview: "js/plugins/PCBDWFView.js?" + VERSION,
        pcbview: "js/plugins/PCBView.js?" + VERSION,
        pcbview3d: "js/plugins/PCBView3D.js?" + VERSION,
        
        // ---- PDF ----
        pdfview: "js/plugins/PDFView.js?" + VERSION,
        pdfviewdetached: "js/plugins/PDFViewDetached.js?" + VERSION,
        
        // ---- Preview/Requirements ----
        previewpanel: "js/plugins/PreviewPanel.js?" + VERSION,
        requirements: "js/plugins/Requirements.js?" + VERSION,
        
        // ---- Schematic ----
        schview: "js/plugins/SCHView.js?" + VERSION,
        schcompareview: "js/plugins/SchCompareView.js?" + VERSION,
        
        // ---- Search/Select ----
        search: "js/plugins/Search.js?" + VERSION,
        searchbutton: "js/plugins/SearchButton.js?" + VERSION,
        select: "js/plugins/Select.js?" + VERSION,
        selectschcompare: "js/plugins/SelectSchCompare.js?" + VERSION,
        
        // ---- Simulation ----
        simulation: "js/plugins/Simulation.js?" + VERSION,
        simulationinfopanel: "js/plugins/SimulationInfoPanel.js?" + VERSION,
        simulationlayers: "js/plugins/SimulationLayers.js?" + VERSION,
        simulationprobing: "js/plugins/SimulationProbing.js?" + VERSION,
        
        // ---- Snapping/Support ----
        snapping: "js/plugins/Snapping.js?" + VERSION,
        standalonecommentpanel: "js/plugins/StandaloneCommentPanel.js?" + VERSION,
        supportlibrary: "js/plugins/SupportLibrary.js?" + VERSION,
        
        // ---- Validation/Variants ----
        validationdetails: "js/plugins/ValidationDetails.js?" + VERSION,
        variants: "js/plugins/Variants.js?" + VERSION,
        wirview: "js/plugins/WIRView.js?" + VERSION,
        
        // ---- Engine Plugins ----
        "comment.engine": "js/plugins/comment.engine.js?" + VERSION,
        "comparison.gerber": "js/plugins/comparison.gerber.js?" + VERSION,
        "comparison.pcb": "js/plugins/comparison.pcb.js?" + VERSION,
        fabrication: "js/plugins/fabrication.js?" + VERSION,
        fabricationmetadata: "js/plugins/fabricationMetadata.js?" + VERSION,
        generalsvg: "js/plugins/generalSVG.js?" + VERSION,
        gerber: "js/plugins/gerber/bundle.js?" + VERSION,
        graphite: "js/plugins/graphite.js?" + VERSION,
        "graphite.engine": "js/plugins/graphite.engine/bundle.js?" + VERSION,
        "harness.common": "js/plugins/harness.common.js?" + VERSION,
        ldr: "js/plugins/ldr.js?" + VERSION,
        lsm: "js/plugins/lsm.js?" + VERSION,
        mbs: "js/plugins/mbs.js?" + VERSION,
        "measurement.engine": "js/plugins/measurement.engine.js?" + VERSION,
        pcb: "js/plugins/pcb.js?" + VERSION,
        pcbdwf: "js/plugins/pcbdwf.js?" + VERSION,
        pdf: "js/plugins/pdf.js?" + VERSION,
        project: "js/plugins/project.js?" + VERSION,
        sch: "js/plugins/sch.js?" + VERSION,
        schcompare: "js/plugins/schCompare.js?" + VERSION,
        "search.engine": "js/plugins/search.engine.js?" + VERSION,
        wir: "js/plugins/wir.js?" + VERSION
    };

    /**
     * Get the full plugin URL map
     */
    function getModulesNamesToUrls() {
        return Object.assign({}, MODULES_TO_URLS);
    }

    /**
     * Get plugin URL by name
     */
    function getPluginUrl(name) {
        return MODULES_TO_URLS[name.toLowerCase()] || null;
    }

    /**
     * Update version suffix for all plugins
     */
    function setVersion(newVersion) {
        var oldVersion = VERSION;
        Object.keys(MODULES_TO_URLS).forEach(function(key) {
            MODULES_TO_URLS[key] = MODULES_TO_URLS[key].replace(oldVersion, newVersion);
        });
    }

    // ============================================================================
    // PARENT EVENT NAMES
    // ============================================================================

    /**
     * Event names emitted to parent via parentEvents.emit()
     */
    var PARENT_EVENTS = {
        VIEWER_INITED: 'viewer-inited',
        VIEWER_KEY: 'viewer-key',
        DATA_STORAGE_RESOLVE: 'data-storage-resolve',
        SOURCE_STATUS: 'source:status',
        VIEWER_UNAUTHORIZED: 'viewer:unAuthorized',
        APP_LAYOUT_CHANGED: 'app:layout:changed',
        DOCUMENTS_LOADED: 'documents:loaded',
        DESIGN_DATA_LOADED: 'design-data-loaded',
        DESIGN_LOADED: 'design-loaded',
        PLUGIN_EVENTS: 'plugin-events',
        RENDER_COMPLETE: 'render-complete',
        SCENE_INTERACTED: 'scene-interacted',
        GENERATING_NEW_VERSION: 'viewer:generating-new-version',
        GENERATED_NEW_VERSION: 'viewer:generated-new-version'
    };

    // ============================================================================
    // I18N KEYS
    // ============================================================================

    /**
     * Commonly used i18n translation keys
     */
    var I18N_KEYS = {
        INITIALIZING: 'viewer.plugins.ui.App.initializing'
    };

    // ============================================================================
    // CORE BUS EVENTS (Ne.Z.bus events)
    // ============================================================================

    /**
     * Internal bus event names used by Ne.Z.bus
     */
    var CORE_BUS_EVENTS = {
        // Storage and metadata
        STORAGE_RESOLVE_COMPLETE: 'storageResolveComplete',
        METADATA_RESOLVE_COMPLETE: 'metadataResolveComplete',
        
        // Design resolution
        DESIGN_RESOLVE_FIRST_STATUS: 'designResolveFirstStatus',
        DESIGN_ID: 'designId',
        PROGRESS: 'progress',
        ERROR: 'error',
        COMPLETE: 'complete',
        UNAUTHORIZED: 'unAuthorized',
        
        // Module setup
        MODULE_SETUP_COMPLETED: 'moduleSetupCompleted',
        VIEW: 'view',
        
        // Document events
        DOCUMENT_OPEN_ERROR: 'Document:open-error',
        
        // Design version
        NEW_DESIGN_VERSION_READY: 'newDesignVersionReady',
        NEW_DESIGN_VERSION_ERROR: 'newDesignVersionError',
        
        // View events
        VIEW_GET: 'View:get',
        VIEW_SET: 'View:set',
        VIEWS_UPDATE_PADDING: 'Views:updatePadding',
        
        // Layout events
        LAYOUT_UPDATE: 'Layout:update',
        
        // Scene events
        SCENE_INTERACTED: 'sceneInteracted',
        
        // Logo events
        LOGO_SHOW: 'Logo:show',
        LOGO_HIDE: 'Logo:hide',
        
        // Modal events
        MODAL_PANEL_WIDTH: 'Modal:panelWidth',
        
        // Plugin events
        GLOBAL_PLUGINS_DISABLE: 'GlobalPlugins:disable',
        GLOBAL_PLUGINS_ENABLE: 'GlobalPlugins:enable',
        LOCAL_PLUGINS_DISABLE: 'LocalPlugins:disable',
        LOCAL_PLUGINS_ENABLE: 'LocalPlugins:enable'
    };

    // ============================================================================
    // APP DATA DEFAULTS
    // ============================================================================

    /**
     * Views excluded from analytics tracking
     */
    var EXCLUDE_VIEWS_FROM_ANALYTICS = [
        "PCBView",
        "PCBView3D",
        "GerberCompareSourceView",
        "GerberCompareTargetView",
        "TABLE_COMPARE_LEFT",
        "TABLE_COMPARE_RIGHT",
        "SwitchPcbSide"
    ];

    /**
     * Default values for the main App component data
     */
    var APP_DATA_DEFAULTS = {
        isExpired: false,
        isLoading: true,
        isLoadingFailed: false,
        loaderMessage: "",
        loaderMeta: "",
        isLoaderPrimary: true,
        hasLoaderIcon: true,
        loaderIcon: "",
        isLogoVisible: true,
        viewsPadding: { left: 0, right: 0 },
        presentViews: [],
        isDesignProcessed: true,
        unloadPageSignal: false,
        layoutChanged: false,
        headerBottom: 0
    };

    /**
     * Get app data defaults (used by Vue component data function)
     * @param {Object} bus - The event bus for AppLayoutUpdateNotifier
     * @returns {Object} Default data object for Vue component
     */
    function getAppDataDefaults(bus) {
        return Object.assign({}, APP_DATA_DEFAULTS, {
            appLayoutUpdateNotifier: bus ? new bus.constructor(bus) : null,
            excludeViewsFromAnalytics: EXCLUDE_VIEWS_FROM_ANALYTICS.slice()
        });
    }

    // ============================================================================
    // APP INITIALIZATION CONFIG
    // ============================================================================

    /**
     * Create core initial data configuration
     */
    function createCoreInitialData(designUrl, userPluginsNames, attributes) {
        return {
            designUrl: designUrl,
            userPluginsNames: Array.isArray(userPluginsNames) ? userPluginsNames : [],
            modulesNamesToUrls: getModulesNamesToUrls(),
            attributes: attributes || {}
        };
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.VERSION = VERSION;
    exports.MODULES_TO_URLS = MODULES_TO_URLS;
    exports.getModulesNamesToUrls = getModulesNamesToUrls;
    exports.getPluginUrl = getPluginUrl;
    exports.setVersion = setVersion;
    exports.createCoreInitialData = createCoreInitialData;
    
    // App data defaults
    exports.EXCLUDE_VIEWS_FROM_ANALYTICS = EXCLUDE_VIEWS_FROM_ANALYTICS;
    exports.APP_DATA_DEFAULTS = APP_DATA_DEFAULTS;
    exports.getAppDataDefaults = getAppDataDefaults;
    
    // Event names and i18n keys
    exports.PARENT_EVENTS = PARENT_EVENTS;
    exports.I18N_KEYS = I18N_KEYS;
    exports.CORE_BUS_EVENTS = CORE_BUS_EVENTS;

    console.log('[ViewerAppConfig] Loaded with', Object.keys(MODULES_TO_URLS).length, 'plugin URLs');

    return exports;
}({}));
