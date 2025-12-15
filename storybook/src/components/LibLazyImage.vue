<template>
  <div
    class="lib-lazy-image"
    :class="{ 'is-loaded': isLoaded, 'is-error': hasError }"
    @click="$emit('click')"
  >
    <div class="lib-lazy-image__container" :style="containerStyle">
      <img
        v-if="src"
        ref="imgRef"
        :alt="alt"
        class="lib-lazy-image__figure"
        :src="isLoaded ? src : undefined"
        @load="onLoad"
        @error="onError"
      />
      <div v-if="!isLoaded && !hasError" class="lib-lazy-image__loader">
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
      <div v-if="hasError" class="lib-lazy-image__error">
        <AfsIcon name="image-broken-16" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * LibLazyImage - Lazy loading image with loading spinner
 * @see production example.html
 */
defineOptions({ name: 'LibLazyImage' });

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    aspectRatio?: number;
  }>(),
  {
    src: '',
    alt: '',
    aspectRatio: 68,
  }
);

defineEmits<{ (e: 'click'): void }>();

const imgRef = ref<HTMLImageElement | null>(null);
const isLoaded = ref(false);
const hasError = ref(false);

const containerStyle = computed(() => ({
  paddingTop: `${props.aspectRatio}%`,
}));

function onLoad() {
  isLoaded.value = true;
}

function onError() {
  hasError.value = true;
}

onMounted(() => {
  if (props.src && imgRef.value) {
    imgRef.value.src = props.src;
  }
});
</script>

<style lang="scss">
.lib-lazy-image {
  position: relative;
  background: var(--afs-group, #48484a);
  border-radius: 4px;
  overflow: hidden;
  
  &__container {
    position: relative;
    width: 100%;
  }
  
  &__figure {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s;
    
    .is-loaded & { opacity: 1; }
  }
  
  &__loader,
  &__error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--afs-text-icon-hint, #ebebf54d);
  }
  
  &__loader-icon {
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }
  
  &__error {
    font-size: 24px;
  }
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>
