<script setup lang="ts">
defineProps<{
  indicator?: number
}>()
</script>

<template>
  <span
    class="label relative overflow-hidden rounded-md bg-slate-100 px-3 py-1 pb-1.5 text-[13px] font-semibold dark:bg-slate-800"
  >
    <slot />
    <span
      class="label__indicator absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent-400 dark:bg-accent-600"
      :style="{ width: `${indicator || 100}%` }"
    />
  </span>
</template>
