<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Fetch the article using Nuxt Content v3 queryCollection
const { data: article } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

if (!article.value) {
  throw createError({
    statusCode: 404,
    message: 'Article not found'
  })
}

// Set SEO
useSeoMeta({
  title: article.value?.title || 'Blog',
  description: article.value?.description || ''
})

// Format date
const formattedDate = computed(() => {
  if (!article.value?.date) return ''
  return new Date(article.value.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Increment view count on mount
const views = ref(0)
onMounted(async () => {
  try {
    const response = await $fetch('/api/blog/views', {
      method: 'POST',
      body: { slug }
    })
    if (response?.views) {
      views.value = response.views
    }
  } catch (error) {
    console.error('Failed to increment views:', error)
  }
})

// Get TOC from article
const toc = computed(() => {
  return article.value?.body?.toc?.links || []
})
</script>

<template>
  <div v-if="article">
    <!-- Header -->
    <header class="background-grid background-grid--fade-out pb-10 pt-32 lg:pb-14 lg:pt-40">
      <div class="content-wrapper">
        <div class="max-w-3xl">
          <!-- Back Button - Right aligned above title -->
          <div class="mb-6 flex items-center justify-between">
            <!-- Breadcrumb -->
            <nav class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <NuxtLink to="/" class="hover:text-accent-600 dark:hover:text-accent-400">Home</NuxtLink>
              <span>/</span>
              <NuxtLink to="/blog" class="hover:text-accent-600 dark:hover:text-accent-400">Blog</NuxtLink>
            </nav>
            
            <!-- Back Button -->
            <NuxtLink 
              to="/blog" 
              class="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            >
              <Icon name="heroicons:arrow-left-20-solid" class="h-4 w-4" />
              Kembali
            </NuxtLink>
          </div>
          
          <!-- Category -->
          <span class="mb-3 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
            {{ article.category }}
          </span>
          
          <!-- Title -->
          <h1 class="text-2xl font-extrabold text-slate-700 dark:text-slate-300 md:text-4xl">
            {{ article.title }}
          </h1>
          
          <!-- Meta -->
          <div class="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span class="flex items-center gap-1">
              <Icon name="heroicons:calendar-20-solid" class="h-4 w-4" />
              {{ formattedDate }}
            </span>
            <span v-if="article.readingTime" class="flex items-center gap-1">
              <Icon name="heroicons:clock-20-solid" class="h-4 w-4" />
              {{ article.readingTime }} min read
            </span>
            <span class="flex items-center gap-1">
              <Icon name="heroicons:eye-20-solid" class="h-4 w-4" />
              {{ views }} views
            </span>
          </div>
          
          <!-- Tags -->
          <div v-if="article.tags?.length" class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Thumbnail Image -->
          <div v-if="article.image" class="mt-6">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full rounded-xl object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Content with TOC sidebar -->
    <div class="pb-20">
      <div class="content-wrapper">
        <div class="flex gap-12">
          <!-- Main Content -->
          <article class="page-content min-w-0 max-w-3xl flex-1">
            <ContentRenderer :value="article" />
            
            <!-- Reactions -->
            <div class="mt-12">
              <BlogReactions :slug="slug" />
            </div>
            
            <!-- Related Posts -->
            <div class="mt-12">
              <BlogRelated 
                :current-slug="slug" 
                :category="article.category || ''"
                :tags="article.tags || []"
              />
            </div>
          </article>
          
          <!-- TOC Sidebar - Desktop -->
          <aside class="hidden w-64 flex-shrink-0 lg:block">
            <div class="sticky top-32 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50">
              <BlogToc 
                v-if="toc.length" 
                :links="toc" 
              />
              
              <!-- Author -->
              <div class="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700">
                <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Written by</p>
                <p class="mt-1 font-semibold text-slate-700 dark:text-slate-300">
                  {{ article.author || 'Tri Aldy' }}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>
