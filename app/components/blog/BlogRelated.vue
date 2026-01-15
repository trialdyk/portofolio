<script setup lang="ts">
const props = defineProps<{
  currentSlug: string
  category: string
  tags: string[]
}>()

const { data: relatedPosts } = await useAsyncData(`related-${props.currentSlug}`, async () => {
  // Get all blog posts
  const allPosts = await queryCollection('blog').all()
  
  // Filter related posts (same category or matching tags, exclude current)
  return allPosts
    .filter((post: any) => {
      if (post.path === `/blog/${props.currentSlug}`) return false
      
      const sameCategory = post.category === props.category
      const hasMatchingTag = props.tags.some(tag => post.tags?.includes(tag))
      
      return sameCategory || hasMatchingTag
    })
    .slice(0, 3)
})
</script>

<template>
  <div v-if="relatedPosts && relatedPosts.length > 0">
    <h3 class="mb-4 text-lg font-bold text-slate-800 dark:text-slate-200">
      Artikel Terkait
    </h3>
    
    <div class="space-y-3">
      <NuxtLink
        v-for="post in relatedPosts"
        :key="post.path"
        :to="post.path"
        class="block rounded-lg border border-slate-200 p-4 transition-all hover:border-accent-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-accent-600 dark:hover:bg-slate-800"
      >
        <span class="mb-1 inline-block rounded bg-accent-100 px-2 py-0.5 text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
          {{ post.category || 'Uncategorized' }}
        </span>
        <h4 class="font-semibold text-slate-700 dark:text-slate-300">
          {{ post.title }}
        </h4>
        <p class="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
          {{ post.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
