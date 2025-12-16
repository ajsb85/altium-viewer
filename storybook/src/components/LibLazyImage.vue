<template>
  <div
    v-lazy.once="onVisible"
    class="lib-lazy-image"
    :class="{ 'is-loaded': !isLoading && !hasError, 'is-error': hasError }"
  >
    <div class="lib-lazy-image__container" :style="containerStyle">
      <img
        v-if="imgSrc"
        :src="imgSrc"
        :alt="alt"
        class="lib-lazy-image__figure"
        @load="onLoad"
        @error="onError"
      />
      <transition name="fade">
        <div v-if="isLoading" class="lib-lazy-image__loader">
          <svg viewBox="0 0 16 16" class="lib-icon lib-lazy-image__loader-icon">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-2A6 6 0 108 2a6 6 0 000 12z"
              opacity=".48"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.999 8a8 8 0 01-13.657 5.657l1.415-1.414A6 6 0 107.999 2V0a8 8 0 018 8z"
              fill="currentColor"
            />
          </svg>
        </div>
      </transition>
      <div v-if="hasError" class="lib-lazy-image__error">
        <AfsIcon name="image-broken-16" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AfsIcon from './AfsIcon.vue';
import { vLazy } from '../composables/useLazyLoad';

/**
 * LibLazyImage - Lazy loading image with loading spinner
 * 
 * Production implementation (vendors.js:213610-213800):
 * - Uses v-lazy directive to detect visibility
 * - imgSrc computed returns null until isVisible is true
 * - Image only loads when element enters viewport
 * 
 * Production CSS (production.css lines 38444-38495)
 */
defineOptions({ 
  name: 'LibLazyImage',
  directives: { lazy: vLazy }
});

const props = withDefaults(
  defineProps<{
    /** Image source URL */
    src?: string;
    /** Alt text */
    alt?: string;
    /** Aspect ratio percentage (padding-top) for placeholder */
    aspectRatio?: number;
  }>(),
  {
    src: '',
    alt: '',
    aspectRatio: 68,
  }
);

// State matching production (vendors.js:213638-213643)
const isLoading = ref(true);
const isVisible = ref(false);
const hasError = ref(false);

// Production pattern: only return src when visible (vendors.js:213728-213730)
const imgSrc = computed(() => isVisible.value ? props.src : null);

const containerStyle = computed(() => ({
  paddingTop: `${props.aspectRatio}%`,
}));

// Called when element enters viewport (vendors.js:213739-213741)
function onVisible() {
  isVisible.value = true;
}

function onLoad() {
  isLoading.value = false;
}

function onError() {
  isLoading.value = false;
  hasError.value = true;
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css lines 38444-38495
 */
.lib-lazy-image__container {
  position: relative;
  background: var(--background-views, var(--afs-background));
}

.lib-lazy-image__loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-views, var(--afs-background));
  
  &.fade-enter-active,
  &.fade-leave-active {
    transition-property: opacity, visibility;
    transition-duration: 0.3s;
  }
  
  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
    visibility: hidden;
  }
}

.lib-lazy-image__loader-icon {
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
  fill: var(--afs-text-secondary, #ebebf5a6);
  color: var(--afs-primary-default, #0a84ff);
  animation: infinite-spinning 1s linear infinite;
}

.lib-lazy-image__figure {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  opacity: 0;
  transition: opacity 0.3s;
  
  .is-loaded & {
    opacity: 1;
  }
}

.lib-lazy-image__error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--afs-text-icon-hint, #ebebf54d);
  font-size: 24px;
}

@keyframes infinite-spinning {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
</style>
