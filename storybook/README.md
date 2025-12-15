# Altium Viewer - Storybook Component Library

Vue 3 UI components for the Altium Web Viewer, documented and tested in isolation.

## Quick Start

```bash
npm install --legacy-peer-deps
npm run storybook
```

Opens at `http://localhost:6006`

## Testing

### Component Tests (Vitest)

```bash
npx vitest --project=storybook
```

### Visual Tests (Chromatic)

Visual regression testing via Chromatic:

```bash
npx chromatic --project-token=<your-token>
```

Or enable in Storybook UI via the Visual Tests panel.

### Coverage

Enable coverage in the testing widget, or run:

```bash
npx vitest --project=storybook --coverage
```

Coverage reports generated in `./coverage/`.

## Building

```bash
npm run build-storybook
```

Output: `storybook-static/`

## Configuration

- **Storybook config**: `.storybook/main.ts`, `.storybook/preview.ts`
- **Vitest config**: `vite.config.ts`
- **Component inventory**: `vue-components.md`

### Static Assets

Assets served from `pkg/altium/assets/client` at root path.

### Dependencies

Use `--legacy-peer-deps` for npm install due to `@storybook/blocks` v8/v10 peer conflicts.

## Project Structure

```
src/components/   # Vue components + stories
.storybook/       # Storybook configuration
vue-components.md # Component checklist
```
