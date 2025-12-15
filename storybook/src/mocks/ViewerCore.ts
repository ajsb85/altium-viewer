/**
 * ViewerCore Mock - Storybook version
 * Provides mock implementations of ViewerCore.js utilities
 */

/**
 * Wraps a Vue component with additional options like render function and scoped styles.
 */
export function wrapComponent(component: any, options: [string, any][]): any {
  const target = component.__vccOpts || component;
  for (const [key, value] of options) {
    target[key] = value;
  }
  return target;
}

/**
 * Creates a BEM element class name
 */
export function getBEMClass(block: string, element: string): string {
  return `${block}__${element}`;
}

/**
 * Creates radius classes for corners
 */
export function getRadiusClasses(block: string, corners: string[]): Record<string, boolean> {
  return {
    [`${block}_radius-tl`]: corners.includes('tl'),
    [`${block}_radius-tr`]: corners.includes('tr'),
    [`${block}_radius-bl`]: corners.includes('bl'),
    [`${block}_radius-br`]: corners.includes('br'),
  };
}

/**
 * Joins modifiers into a class string
 */
export function joinModifiers(modifiers: string[], prefix: string): string {
  return modifiers.join(` ${prefix}_`).trim();
}

/**
 * CSS state classes
 */
export const StateClasses = {
  isNotouch: 'is-notouch',
  isTouch: 'is-touch',
  isOpened: 'is-opened',
  isActive: 'is-active',
  isSelected: 'is-selected',
  isError: 'is-error',
} as const;

/**
 * Corner radius constants
 */
export const CornerRadius = {
  tl: 'top-left',
  tr: 'top-right',
  bl: 'bottom-left',
  br: 'bottom-right',
} as const;

/**
 * Check if value is a function
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * Component registry for global access
 */
const components: Record<string, any> = {};

export const ComponentRegistry = {
  set(opts: { id: string; component: any }) {
    components[opts.id] = opts.component;
  },
  get(id: string) {
    return components[id];
  },
  delete(id: string) {
    delete components[id];
  },
};
