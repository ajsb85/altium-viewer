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

    console.log('[ViewerAppConfig] Loaded with', Object.keys(MODULES_TO_URLS).length, 'plugin URLs');

    return exports;
}({}));
