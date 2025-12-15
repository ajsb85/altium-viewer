<template>
    <component :is="tag" class="afs-badge" :class="classes" :data-locator="dataLocator">
        <slot />
    </component>
</template>

<script lang="ts">
const BADGE_SIZES = { default: "", xs: "xs", small: "small", middle: "middle" };
const BADGE_TYPES = { default: "", base: "base", pro: "pro", success: "success", alpha: "alpha", new: "new", guest: "guest" };
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    tag: { type: String, default: "div" },
    size: {
        type: String,
        default: "",
        validator: (v: string) => Object.values(BADGE_SIZES).includes(v)
    },
    type: {
        type: String,
        default: "",
        validator: (v: string) => Object.values(BADGE_TYPES).includes(v)
    },
    uppercase: { type: Boolean, default: false },
    radius: {
        type: String, 
        default: "top-left top-right bottom-left bottom-right"
    },
    dataLocator: { type: String, default: "badge" }
});

const classes = computed(() => {
    const result: any[] = [];
    if (props.type && props.type.length) {
        result.push(`afs-badge_${props.type}`);
    }
    if (props.size && props.size.length) {
        result.push(`afs-badge_${props.size}`);
    }
    
    if (props.radius.includes("top-left")) result.push("afs-badge_radius-tl");
    if (props.radius.includes("top-right")) result.push("afs-badge_radius-tr");
    if (props.radius.includes("bottom-left")) result.push("afs-badge_radius-bl");
    if (props.radius.includes("bottom-right")) result.push("afs-badge_radius-br");

    if (props.uppercase) {
        result.push("afs-badge_uppercase");
    }
    return result;
});
</script>

<style lang="scss" scoped>
.afs-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 4px; /* default fallback */
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  
  &_xs { font-size: 10px; padding: 1px 4px; }
  &_small { font-size: 11px; padding: 2px 6px; }
  &_middle { font-size: 13px; padding: 3px 10px; }
  
  &_base { background-color: #f3f4f6; color: #374151; }
  &_success { background-color: #d1fae5; color: #065f46; }
  &_warning { background-color: #fef3c7; color: #92400e; }
  &_error { background-color: #fee2e2; color: #b91c1c; }
  &_pro { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; }
  
  &_radius-tl { border-top-left-radius: 4px; }
  &_radius-tr { border-top-right-radius: 4px; }
  &_radius-bl { border-bottom-left-radius: 4px; }
  &_radius-br { border-bottom-right-radius: 4px; }
  
  &_uppercase { text-transform: uppercase; }
}
</style>
