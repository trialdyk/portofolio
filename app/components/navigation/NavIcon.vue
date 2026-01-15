<script setup lang="ts">
defineProps<{
  href: string
  title: string
}>()
</script>

<template>
  <a
    :href="href"
    :title="title"
    target="_blank"
    rel="noopener noreferrer"
    class="flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
  >
    <slot />
  </a>
</template>
