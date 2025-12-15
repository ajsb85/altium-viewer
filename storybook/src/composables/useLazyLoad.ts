import { ref, onMounted, onUnmounted, type Ref, type DirectiveBinding } from 'vue';

/**
 * Composable for lazy loading with IntersectionObserver
 * 
 * Production implementation (vendors.js lines 117670-117698):
 * - Uses IntersectionObserver API
 * - Stores callbacks by data-lazy-id attribute
 * - Triggers callback when element intersects viewport
 * - Supports `.once` modifier to unobserve after first trigger
 */

interface LazyObserverCallbackInfo {
  once: boolean;
  callback: () => void;
}

const lazyCallbacks = new Map<string, LazyObserverCallbackInfo>();

let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const lazyId = (entry.target as HTMLElement).dataset.lazyId;
          if (!lazyId) return;
          
          const callbackInfo = lazyCallbacks.get(lazyId);
          if (entry.isIntersecting && callbackInfo) {
            if (callbackInfo.once) {
              lazyCallbacks.delete(lazyId);
              obs.unobserve(entry.target);
            }
            if (typeof callbackInfo.callback === 'function') {
              callbackInfo.callback();
            }
          }
        });
      },
      {
        root: null,
        threshold: 0,
      }
    );
  }
  return observer;
}

/**
 * Vue directive for lazy loading (v-lazy)
 * 
 * Usage:
 * ```vue
 * <div v-lazy.once="() => loadImage()">...</div>
 * ```
 */
export const vLazy = {
  mounted(el: HTMLElement, binding: DirectiveBinding<() => void>) {
    const lazyId = `lazy-${Math.random().toString(36).slice(2, 11)}`;
    el.dataset.lazyId = lazyId;
    
    lazyCallbacks.set(lazyId, {
      once: !!binding.modifiers.once,
      callback: binding.value,
    });
    
    getObserver().observe(el);
  },
  
  unmounted(el: HTMLElement) {
    const lazyId = el.dataset.lazyId;
    if (lazyId) {
      lazyCallbacks.delete(lazyId);
      getObserver().unobserve(el);
    }
  },
};

/**
 * Composable hook for lazy loading state
 */
export function useLazyLoad(elementRef: Ref<HTMLElement | null>) {
  const isVisible = ref(false);
  const hasLoaded = ref(false);
  
  let localObserver: IntersectionObserver | null = null;
  
  onMounted(() => {
    if (!elementRef.value) return;
    
    localObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (!hasLoaded.value) {
              hasLoaded.value = true;
            }
          } else {
            isVisible.value = false;
          }
        });
      },
      { root: null, threshold: 0 }
    );
    
    localObserver.observe(elementRef.value);
  });
  
  onUnmounted(() => {
    if (localObserver && elementRef.value) {
      localObserver.unobserve(elementRef.value);
      localObserver.disconnect();
    }
  });
  
  return { isVisible, hasLoaded };
}

export default vLazy;
