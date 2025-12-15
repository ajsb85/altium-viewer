# Vue Components Inventory

Comprehensive list of all Vue components used in the Altium Viewer project.

---

## Core Application Components

### ViewerApp.js (Main Application)

- [ ] **Viewer** - Main application container (`ViewerComponentOptions`)
- [x] **TreeItem** - Recursive tree item component (`TreeItemOptions`)
- [x] **AppMenu** - Context menu wrapper (`AppMenuOptions`)

---

## Factory-Created Components (ViewerComponents.js)

Components created via the Factory pattern:

- [x] **AfsSidebar** - Base sidebar component
- [x] **AppSidebar** - Application sidebar with slots
- [x] **AppAlert** - Alert/notification display
- [x] **AppLoader** - Loading indicator with progress
- [x] **AppMainTabs** - View tabs in header
- [x] **AppHeaderPlugin** - Plugin buttons in header
- [x] **AppHeader** - Main header bar
- [x] **AppWatermark** - Branding watermark

### Directives

- [ ] **ModalDirective** - Modal binding directive

---

## UI Library Components (Afs*)

Imported from external modules:

- [x] **AfsIcon** - Icon display component
- [x] **AfsText** - Styled text component
- [x] **AfsLink** - Link/anchor component
- [x] **AfsContextMenu** - Context menu dropdown
- [x] **AfsBadge** - Badge/chip component
- [x] **Accordion** - Collapsible accordion
- [x] **GridContainer** - Layout grid container
- [x] **LibModal** - Modal dialog

---

## Plugin Components

### BoardItemsVisibility (Layers Panel)

- [ ] **AppLayersFooter** - Layers panel footer
- [ ] **AppLayersContent** - Layers content area
- [x] **Layers** - Main layers component
- [ ] **AppObjectsButton** - Objects toggle button
- [ ] **AppObjectsList** - Objects list display
- [x] **ObjectsPanel** - Objects panel container
- [x] **TabPanel** - Tab panel switcher
- [ ] **AppBoardControl** - Board controls
- [ ] **AppBoardItemsVisibility** - Main panel component
- [x] **BoardItemsVisibility** - Plugin entry point

### Search Plugin

- [ ] **BaseForm** - Search form input
- [ ] **List** - Result list component
- [ ] **Label** - Search label
- [ ] **BaseRecentSearch** - Recent searches display
- [ ] **ResultSection** - Search result section
- [ ] **BaseResult** - Single result item
- [ ] **BaseFooter** - Search footer
- [ ] **AppBaseHeader** - Search header
- [x] **Search** - Main search component (SearchPanel)

### Measurement Plugin

- [ ] **AppMeasurementItem** - Single measurement item
- [ ] **MeasurementSection** - Measurements section
- [ ] **AppMeasurementHistorySection** - History section
- [ ] **AppModeSwitcher** - Mode switcher UI
- [x] **Measurements** - Main measurements panel (MeasurementDisplay)

### Download Plugin

- [x] **DownloadPanel** - Download options panel
- [ ] **Download** - Download component

### FullScreen Plugin

- [x] **FullScreen** - Fullscreen toggle component

### Compare Plugins

- [ ] **SchCompare** - Schematic comparison component
- [ ] **CompareDocument** - Document comparison
- [x] **CompareLayers** - Layer comparison
- [x] **ComparePanel** - Comparison panel

### View Engine Plugins

- [x] **PCBView** - PCB 2D view component
- [ ] **PCBView3D** - PCB 3D view component
- [x] **SCHView** - Schematic view component
- [ ] **SCHViewModule** - Schematic module
- [x] **FabricationView** - Fabrication view component
- [ ] **Fabrication** - Fabrication data view
- [ ] **GerberEngine** - Gerber rendering engine
- [ ] **GerberCompareView** - Gerber comparison view
- [ ] **GraphiteEngineModule** - Graphite rendering engine

### BOM Plugin

- [x] **BOMView** - BOM list view
- [ ] **BOMViewOnPremise** - On-premise BOM view

### Preview Panel

- [ ] **Item** - Preview item component
- [x] **PreviewPanel** - Main preview panel

### Select Plugin

- [x] **Select** - Selection tool component

### Snapping Plugin

- [x] **Snapping** - Snap points display

### Variants Plugin

- [x] **Variants** - Design variants panel

### Support Library

- [ ] **SupportLibrary** - Library support panel

### Help Panel

- [x] **HelpPanel** - Help/documentation panel

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
