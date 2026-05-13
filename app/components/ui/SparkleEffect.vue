<script setup lang="ts">
withDefaults(defineProps<{
  color?: string
  count?: 3 | 4
}>(), {
  color: 'purple',
  count: 3,
})
</script>

<template>
  <span
    v-for="n in count"
    :key="n"
    class="sparkle"
    :class="[`sparkle-${n}`, `sparkle--${color}`]"
  />
</template>

<style scoped>
/* Base sparkle shape */
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  pointer-events: none;
}

.sparkle::before,
.sparkle::after {
  content: '';
  position: absolute;
  border-radius: 2px;
}

.sparkle::before {
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  transform: translateY(-50%);
}

.sparkle::after {
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
}

/* Color variants */
.sparkle--purple::before,
.sparkle--purple::after {
  background: #a855f7;
}

.sparkle--white::before,
.sparkle--white::after {
  background: white;
}

/* Keyframe */
@keyframes sparkle-anim {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(90deg);
  }
}

/* Position presets — used differently per context via parent scoped override */
.sparkle-1 {
  animation: sparkle-anim 2s ease-in-out infinite 0s;
}
.sparkle-2 {
  animation: sparkle-anim 2s ease-in-out infinite 0.6s;
}
.sparkle-3 {
  animation: sparkle-anim 2s ease-in-out infinite 1.2s;
}
.sparkle-4 {
  animation: sparkle-anim 2s ease-in-out infinite 1.8s;
}
</style>
