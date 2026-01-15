<script setup lang="ts">
interface TocItem {
  id: string
  text: string
  depth: number
}

const props = defineProps<{
  links: TocItem[]
}>()

const activeId = ref('')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-20% 0px -70% 0px' }
  )

  props.links.forEach((link) => {
    const element = document.getElementById(link.id)
    if (element) observer.observe(element)
  })

  onUnmounted(() => observer.disconnect())
})

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <nav class="space-y-1">
    <h4 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      Table of Contents
    </h4>
    <button
      v-for="link in links"
      :key="link.id"
      @click="scrollTo(link.id)"
      class="block w-full text-left text-sm transition-colors"
      :class="[
        activeId === link.id 
          ? 'font-medium text-accent-600 dark:text-accent-400' 
          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200',
        link.depth === 2 ? 'py-1.5' : 'py-1 pl-3 text-xs'
      ]"
    >
      {{ link.text }}
    </button>
  </nav>
</template>
