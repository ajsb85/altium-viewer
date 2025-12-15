# Altium Viewer - Storybook Component Library

This directory contains the Storybook setup for the Altium Viewer Vue 3 components. It provides an isolated environment for developing, documenting, and testing UI components.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- NPM

### Installation

Install the dependencies:

```bash
npm install
```

### Running Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This will open Storybook locally at `http://localhost:6006`.

## Testing

We use **Vitest** for component testing, integrated directly with Storybook stories.

### Running Tests

To run the full test suite in headless mode (Chromium):

```bash
npx vitest --project=storybook
```

To run tests once without watching for changes:

```bash
npx vitest run --project=storybook
```

### Test Configuration

- **Config File**: `vite.config.ts` (configured with `storybookTest` plugin)
- **Setup File**: `.storybook/vitest.setup.ts`
- **Environment**: browser (via `@vitest/browser-playwright`)

## Project Structure

- `src/components/`: Vue components and their corresponding stories (`*.stories.ts`).
- `.storybook/`: Storybook configuration (`main.ts`, `preview.ts`, `vitest.setup.ts`).
- `vue-components.md`: Inventory of components to be implemented.
