import { setProjectAnnotations } from '@storybook/vue3-vite';
import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([projectAnnotations]);

// Suppress specific Vue compiler warnings
if (typeof console !== 'undefined' && console.warn) {
    const originalWarn = console.warn;
    console.warn = (...args) => {
        if (args[0] && typeof args[0] === 'string' && args[0].includes('decodeEntities option is passed but will be ignored')) {
            return;
        }
        originalWarn(...args);
    };
}