/**
 * ViewerI18n.js - Internationalization Messages
 * 
 * Contains translation strings for the Altium Viewer.
 * Extracted from ViewerApp.js lines 5703-5708.
 * 
 * Usage: ViewerI18n.messages['en-US'] or ViewerI18n.messages['zh-CN']
 */
var ViewerI18n = (function (exports) {
    'use strict';

    /**
     * Supported locales
     */
    var SUPPORTED_LOCALES = ["en-US", "zh-CN"];
    
    /**
     * Default locale
     */
    var DEFAULT_LOCALE = "en-US";

    /**
     * English (US) translations
     */
    var enUS = {"viewer":{"common":{"saveToPersonalSpace":"Save to Personal Space","preparing":"Preparing","processing":"Processing document"},"plugins":{"PCBDWFView":{"displayName":"Draftsman"},"MBAView":{"downloading_mba":"Downloading MBA","PartsHeader":{"title":"Multiboard Assembly"},"parts":{"displayNameObjects":"Objects","descriptionMultiboardModule":"Multiboard Assembly Objects module","ObjectTreeItem":{"disableTransparencyHint":"Disable Transparency","enableTransparencyHint":"Enable Transparency"}},"displayName":"MBA","comment":"Represent MBA graphical representation","engine":{"document":{"dataGettingError":"Data getting error.","compileDocumentError":"Compile document error.","binDataNotLoaded":"Bin data has not loaded."},"services":{"annotation":{"showDocumentNotPossible":"Show document is not possible."},"render":{"renderingNotInitialized":"Rendering has not initialized.","unexpectedError":"Unexpected error.","graphicsCompilationError":"Graphics compilation error."}}}},"BoardItemsVisibility":{"description":"Board Items Visibility","displayName":"Board Items Visibility","displayNameLayersObjects":"Layers/Objects","displayNameLayers":"Layers","displayNameObjects":"Objects","hint":"Board Items Visibility","viewStackup":"View Stackup","resetLayers":"Reset Layers","resetObjects":"Reset Objects","only":"Only","nextPrevLayer":"Next / Previous Layer","keyHint":"Key +/-","layers":"Layers","layersObjects":"Layers/Objects","objects":"Objects","objectsData":{"arc":"Arcs ","pads":"Pads","vias":"Vias","tracks":"Tracks","poly":"Polygons","region":"Regions","fill":"Fills","text":"Texts","dimension":"Dimensions","coordinate":"Coordinates","rule":"Rooms","componentBody":"3D Body","keepouts":"Keepouts","connectionLines":"Connection Lines"},"groupAllObjects":"All Objects","layersViews":{"top":"Top","bottom":"Bottom"}},"BOMView":{"description":"BOM View","loading":"Loading BOM data","error":"Something went wrong. Please try again later).","displayName":"BOM","comment":"BOM View","empty":"BOM data is empty","total":"Total","namesUnit":"{count} Names","notFound":"{query} not found","graphicalSoonHint":"Graphical differences displaying is coming soon","Item":{"connectivityChangesTitle":"Connectivity Changes"}},"SCHView":{"displayName":"SCH","description":"Schematic SVG main view"},"PCBView":{"displayName":"PCB","description":"PCB View module for show 2D designs."},"3D":{"displayName":"3D","description":"PCB View module for show 3D designs."},"FullScreen":{"name":"FullScreen","comment":"FullScreen","description":"FullScreen","hint":"Switch full screen mode"},"Measurement":{"viewTitle":"Measurements","hint":"Measure"},"Search":{"hint":"Search components and nets","BaseForm":{"searchPlaceholder":"Search"},"BaseHeader":{"keyboardShortcutHint":"(Ctrl+F)"},"BaseRecentSearch":{"title":"RECENT SEARCH"},"revisionStateHeader":"Revision state","searchResult":"Search {result}","filterTypes":{"all":"All","component":"Component","net":"Net"}},"Variants":{"moduleDescription":"Variants","name":"Variants","comment":"Variants","appModuleDescription":"Variants","notAvailable":"N/A"},"Export":{"name":"Export","description":"Export plugin with on demand requests","panelDescription":"Download","panelHint":"Downloads","BaseHeader":{"title":"Download"}}},"ui":{"App":{"expiredMessage":"This design has expired.","goTo365":"Go to Altium 365","initializing":"Initializing Viewer","refreshPage":"Refresh Page","previewAltText":"Preview"}},"engines":{"pcb":{"downloading":"Downloading PCB","rendering":"Rendering PCB","initializing":"Initializing PCB"},"measurement":{"results":{"disXY":"Distance XY","disX":"Distance X","disY":"Distance Y"},"items":{"p1":"Point 1","p2":"Point 2","fallback":"Select on design"},"prevMeasurements":"previous measurements"}}}};

    /**
     * Chinese (Simplified) translations
     */
    var zhCN = {"viewer":{"common":{"saveToPersonalSpace":"保存到个人空间","preparing":"准备中","processing":"正在处理文档"},"plugins":{"PCBDWFView":{"displayName":"Draftsman"},"MBAView":{"downloading_mba":"正在下载 MBA","PartsHeader":{"title":"多板装配"},"parts":{"displayNameObjects":"对象","descriptionMultiboardModule":"多板装配对象模块","ObjectTreeItem":{"disableTransparencyHint":"禁用透明度","enableTransparencyHint":"启用透明度"}},"displayName":"MBA","comment":"展示 MBA 图形表示"},"BoardItemsVisibility":{"description":"板项可见性","displayName":"板项可见性","displayNameLayersObjects":"层/对象","displayNameLayers":"层","displayNameObjects":"对象","hint":"板项可见性","viewStackup":"查看层叠","resetLayers":"重置层","resetObjects":"重置对象","only":"仅","nextPrevLayer":"上一层 / 下一层","keyHint":"按键 +/-","layers":"层","layersObjects":"层/对象","objects":"对象"},"BOMView":{"description":"BOM 视图","loading":"加载 BOM 数据","error":"出现问题，请稍后再试.","displayName":"BOM","comment":"BOM 视图","empty":"BOM 数据为空","total":"总计"},"SCHView":{"displayName":"原理图","description":"原理图 SVG 主视图"},"PCBView":{"displayName":"PCB","description":"用于显示 2D 设计的 PCB 视图模块."},"3D":{"displayName":"3D","description":"用于显示 3D 设计的 PCB 视图模块."},"FullScreen":{"name":"全屏","comment":"全屏","description":"全屏","hint":"切换全屏模式"},"Measurement":{"viewTitle":"测量","hint":"测量"},"Search":{"hint":"搜索元器件和网络","BaseForm":{"searchPlaceholder":"搜索"}},"Variants":{"moduleDescription":"装配变量","name":"装配变量","notAvailable":"N/A"},"Export":{"name":"导出","panelDescription":"下载","panelHint":"下载","BaseHeader":{"title":"下载"}}},"ui":{"App":{"expiredMessage":"该设计已过期.","goTo365":"前往 Altium 365","initializing":"正在初始化查看器","refreshPage":"刷新页面","previewAltText":"预览"}},"engines":{"pcb":{"downloading":"正在下载 PCB","rendering":"正在渲染 PCB","initializing":"正在初始化 PCB"},"measurement":{"results":{"disXY":"XY 距离","disX":"X 距离","disY":"Y 距离"},"items":{"p1":"点 1","p2":"点 2","fallback":"在设计中选择"},"prevMeasurements":"上次测量"}}}};

    /**
     * Messages object containing all translations
     */
    var messages = {
        "en-US": enUS,
        "zh-CN": zhCN
    };

    /**
     * Get messages for a locale
     * @param {string} locale - Locale code (e.g., 'en-US')
     * @returns {Object} Translation messages
     */
    function getMessages(locale) {
        if (locale && SUPPORTED_LOCALES.indexOf(locale) >= 0) {
            return messages[locale];
        }
        return messages[DEFAULT_LOCALE];
    }

    /**
     * Get the locale or default
     * @param {string} locale - Locale to validate
     * @returns {string} Valid locale
     */
    function getLocale(locale) {
        return locale && SUPPORTED_LOCALES.indexOf(locale) >= 0 ? locale : DEFAULT_LOCALE;
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.SUPPORTED_LOCALES = SUPPORTED_LOCALES;
    exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
    exports.messages = messages;
    exports.getMessages = getMessages;
    exports.getLocale = getLocale;

    console.log('[ViewerI18n] Loaded with', SUPPORTED_LOCALES.length, 'locales');

    return exports;
}({}));
