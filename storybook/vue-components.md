# Vue Components Inventory

Comprehensive list of all Vue components used in the Altium Viewer project.

---

## Core Application Components

### ViewerApp.js (Main Application)

- [ ] **Viewer** - Main application container (`ViewerComponentOptions`)
- [ ] **TreeItem** - Recursive tree item component (`TreeItemOptions`)
- [ ] **AppMenu** - Context menu wrapper (`AppMenuOptions`)

---

## Factory-Created Components (ViewerComponents.js)

Components created via the Factory pattern:

- [ ] **AfsSidebar** - Base sidebar component
- [ ] **AppSidebar** - Application sidebar with slots
- [ ] **AppAlert** - Alert/notification display
- [ ] **AppLoader** - Loading indicator with progress
- [ ] **AppMainTabs** - View tabs in header
- [ ] **AppHeaderPlugin** - Plugin buttons in header
- [ ] **AppHeader** - Main header bar
- [ ] **AppWatermark** - Branding watermark

### Directives
- [ ] **ModalDirective** - Modal binding directive

---

## UI Library Components (Afs*)

Imported from external modules:

- [ ] **AfsIcon** - Icon display component
- [ ] **AfsText** - Styled text component
- [ ] **AfsLink** - Link/anchor component
- [ ] **AfsContextMenu** - Context menu dropdown
- [ ] **AfsBadge** - Badge/chip component
- [ ] **Accordion** - Collapsible accordion
- [ ] **GridContainer** - Layout grid container
- [ ] **LibModal** - Modal dialog

---

## Plugin Components

### BoardItemsVisibility (Layers Panel)
- [ ] **AppLayersFooter** - Layers panel footer
- [ ] **AppLayersContent** - Layers content area
- [ ] **Layers** - Main layers component
- [ ] **AppObjectsButton** - Objects toggle button
- [ ] **AppObjectsList** - Objects list display
- [ ] **ObjectsPanel** - Objects panel container
- [ ] **TabPanel** - Tab panel switcher
- [ ] **AppBoardControl** - Board controls
- [ ] **AppBoardItemsVisibility** - Main panel component
- [ ] **BoardItemsVisibility** - Plugin entry point

### Search Plugin
- [ ] **BaseForm** - Search form input
- [ ] **List** - Result list component
- [ ] **Label** - Search label
- [ ] **BaseRecentSearch** - Recent searches display
- [ ] **ResultSection** - Search result section
- [ ] **BaseResult** - Single result item
- [ ] **BaseFooter** - Search footer
- [ ] **AppBaseHeader** - Search header
- [ ] **Search** - Main search component

### Measurement Plugin
- [ ] **AppMeasurementItem** - Single measurement item
- [ ] **MeasurementSection** - Measurements section
- [ ] **AppMeasurementHistorySection** - History section
- [ ] **AppModeSwitcher** - Mode switcher UI
- [ ] **Measurements** - Main measurements panel

### Download Plugin
- [ ] **DownloadPanel** - Download options panel
- [ ] **Download** - Download component

### FullScreen Plugin
- [ ] **FullScreen** - Fullscreen toggle component

### Compare Plugins
- [ ] **SchCompare** - Schematic comparison component
- [ ] **CompareDocument** - Document comparison
- [ ] **CompareLayers** - Layer comparison
- [ ] **ComparePanel** - Comparison panel

### View Engine Plugins
- [ ] **PCBView** - PCB 2D view component
- [ ] **PCBView3D** - PCB 3D view component
- [ ] **SCHView** - Schematic view component
- [ ] **SCHViewModule** - Schematic module
- [ ] **FabricationView** - Fabrication view component
- [ ] **Fabrication** - Fabrication data view
- [ ] **GerberEngine** - Gerber rendering engine
- [ ] **GerberCompareView** - Gerber comparison view
- [ ] **GraphiteEngineModule** - Graphite rendering engine

### BOM Plugin
- [ ] **BOMView** - BOM list view
- [ ] **BOMViewOnPremise** - On-premise BOM view

### Preview Panel
- [ ] **Item** - Preview item component
- [ ] **PreviewPanel** - Main preview panel

### Select Plugin
- [ ] **Select** - Selection tool component

### Snapping Plugin
- [ ] **Snapping** - Snap points display

### Variants Plugin
- [ ] **Variants** - Design variants panel

### Support Library
- [ ] **SupportLibrary** - Library support panel

### Help Panel
- [ ] **HelpPanel** - Help/documentation panel

---

## Component Files (components/)

Viewer-specific component modules:

- [ ] **ViewerCore.js** - Core viewer logic
- [ ] **ViewerGrid.js** - Grid overlay component
- [ ] **ViewerHeader.js** - Header extensions
- [ ] **ViewerLoader.js** - Extended loader
- [ ] **ViewerMisc.js** - Miscellaneous components
- [ ] **ViewerSidebar.js** - Sidebar extensions
- [ ] **ViewerTypography.js** - Typography components

---

## Computed Count

| Category | Count |
|----------|-------|
| Core Application | 3 |
| Factory-Created | 8 |
| UI Library (Afs) | 8 |
| BoardItemsVisibility | 10 |
| Search | 9 |
| Measurement | 5 |
| Download | 2 |
| FullScreen | 1 |
| Compare | 4 |
| View Engines | 9 |
| BOM | 2 |
| Other Plugins | 8 |
| Component Files | 7 |
| **Total** | **76** |

---

## Notes

1. Many components have nested sub-components not listed individually
2. Plugin bundles may contain additional internal components
3. Some components are rendered conditionally based on view type
4. UI library components (Afs*) come from vendors.js bundle
