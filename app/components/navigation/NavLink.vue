<script setup lang="ts">
import clsx from 'clsx'

const props = defineProps<{
  title: string
  href: string
}>()

const route = useRoute()

// Check if current route matches this link
const isActive = computed(() => {
  return route.path === props.href || route.path.startsWith(props.href + '/')
})
</script>

<template>
  <NuxtLink
    :to="href"
    :class="clsx(
      'nav-link',
      isActive && 'nav-link--active'
    )"
  >
    {{ title }}
  </NuxtLink>
</template>
