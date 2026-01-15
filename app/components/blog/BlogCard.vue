<script setup lang="ts">
interface Props {
  title: string
  description: string
  date: string
  category?: string
  tags?: string[]
  slug: string
  image?: string
  readingTime?: number
}

const props = withDefaults(defineProps<Props>(), {
  category: 'Uncategorized',
  tags: () => [],
  readingTime: 5
})

const formattedDate = computed(() => {
  if (!props.date) return ''
  try {
    return new Date(props.date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return props.date
  }
})
</script>

<template>
  <NuxtLink 
    :to="`/blog/${slug}`"
    class="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-accent-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-accent-600"
  >
    <!-- Thumbnail -->
    <div v-if="image" class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
      <img 
        :src="image" 
        :alt="title"
        class="h-full w-full object-cover transition-transform group-hover:scale-105"
      />
    </div>
    <div v-else class="aspect-video w-full bg-gradient-to-br from-accent-500/20 to-accent-600/30 flex items-center justify-center">
      <Icon name="heroicons:document-text-20-solid" class="h-12 w-12 text-accent-500/50" />
    </div>
    
    <!-- Content -->
    <div class="p-5">
      <!-- Category Badge -->
      <div class="mb-3 flex items-center justify-between">
        <span class="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
          {{ category }}
        </span>
        <span class="text-xs text-slate-500 dark:text-slate-400">
          {{ readingTime }} min read
        </span>
      </div>
      
      <!-- Title -->
      <h3 class="mb-2 line-clamp-2 text-lg font-bold text-slate-800 group-hover:text-accent-600 dark:text-slate-200 dark:group-hover:text-accent-400">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
        {{ description }}
      </p>
      
      <!-- Footer -->
      <div class="flex items-center justify-between">
        <!-- Date -->
        <span class="text-xs text-slate-500 dark:text-slate-500">
          {{ formattedDate }}
        </span>
        
        <!-- Tags -->
        <div v-if="tags && tags.length > 0" class="flex flex-wrap gap-1">
          <span 
            v-for="tag in tags.slice(0, 2)" 
            :key="tag"
            class="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
