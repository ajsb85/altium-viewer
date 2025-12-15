# ViewerApp.js Section Map

This file documents the semantic sections of ViewerApp.js (3,637 lines) for maintainability.

## File Structure Overview

| Section | Lines | Description |
|---------|-------|-------------|
| **1. Webpack Module Header** | 1-5 | Module wrapper, chunk ID |
| **2. Imports & Factories** | 6-185 | Webpack requires, factory creations |
| **3. Vue Component: Viewer** | 186-1850 | Main Qe/et Vue component with render |
| **4. Tree Components** | 1850-1980 | TreeItem, AppMenu components |
| **5. Manager Classes** | 1980-2280 | Jt, Tn (ThemeManager), helpers |
| **6. Async Generators** | 2280-2800 | Yn runtime, Qn, $n, Zn helpers |
| **7. App Initialization** | 2800-3500 | er, tr, rr, ir, dr, ur functions |
| **8. App Execution** | 3500-3637 | Final execution and event binding |

---

## Section 2: Imports & Factories (L6-185)

### Key Variables

| Variable | Source | Purpose |
|----------|--------|---------|
| `r` | n(90450) | ColorThemeService, monitoring |
| `i` | n(10311) | Vue.js |
| `o` | n(25979) | Unknown |
| `m` | n(77337) | AfsIcon |
| `h` | n(91261) | AfsContextMenu |
| `y` | n(77453) | AfsText |
| `g` | n(48226) | GridContainer |
| `b` | n(36480) | HTTP utility |

### Created Factories

- `L` - AfsSidebar
- `T` - AppSidebar
- `M` - ModalDirective
- `Q` - AppAlert
- `ae` - AppLoader
- `Ce` - AppMainTabs
- `Be` - AppHeader
- `Te` - AppWatermark

---

## Section 3: Vue Component Viewer (L186-1850)

The main Vue component `Qe` (const) and wrapped `et`:

- **data()** - Application state
- **computed** - Derived state
- **methods** - Event handlers
- **render()** - DOM rendering (~800 lines)

---

## Section 4: Tree Components (L1850-1980)

- `Gt` - TreeItem component (recursive)
- `Wt` - Wrapped TreeItem
- `$t` - AppMenu component
- `Yt` - Wrapped AppMenu
- `Jt` - AppMenuManager class

---

## Section 5: Manager Classes (L1980-2280)

- `gn` = `window.AppMonitoring` (extracted)
- `Cn` = `window.PerformanceTimer` (extracted)
- `En` = `window.ViewActivator` (extracted)
- `Tn` - ThemeManager (extends EventEmitter, uses r.NA)
- Inheritance helpers: `Bn`, `xn`, `An`, `Vn`

---

## Section 6: Async Generators (L2280-2800)

Babel-compiled async/await runtime:

- `$n` - typeof helper
- `Yn` - Generator runtime (regenerator)
- `Qn` - Async wrapper
- `Zn` - Locale helper

---

## Section 7: App Initialization (L2800-3500)

- `er` - Domain resolver
- `tr` - I18n setup
- `nr` - Logger
- `rr` - Main app creator (async)
- `ir` - Custom transport

---

## Section 8: App Execution (L3500-3637)

- `dr` - App loader function
- `ur` - App runner
- Final `.then()` chain with event binding

---

## External Modules (Extracted)

| Global | File | Lines Saved |
|--------|------|-------------|
| `window.FPSMonitor` | FPSMonitor.js | 114 |
| `window.ParentEvents` | ParentEvents.js | 113 |
| `window.PerformanceTimer` | PerformanceTimer.js | 70 |
| `window.ViewActivator` | ViewActivator.js | 33 |
| `window.AppMonitoring` | AppMonitoring.js | 272 |
| `window.LayoutManager` | LayoutManager.js | 131 |

**Total saved:** 733 lines (16.8%)
