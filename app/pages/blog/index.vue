<script setup lang="ts">
import clsx from 'clsx'

useSeoMeta({
  title: 'Blog - Tri Aldy',
  description: 'My Personal Blog about development, productivity, dan personal growth.'
})

// Filters
const search = ref('')
const selectedCategory = ref('')
const selectedTag = ref('')
const currentPage = ref(1)
const postsPerPage = 6

// Fetch all posts using Nuxt Content v3 queryCollection
const { data: allPosts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').all()
})

// Get unique categories and tags
const categories = computed(() => {
  if (!allPosts.value) return []
  return [...new Set(allPosts.value.map((p: any) => p.category).filter(Boolean))]
})

const tags = computed(() => {
  if (!allPosts.value) return []
  const allTags = allPosts.value.flatMap((p: any) => p.tags || [])
  return [...new Set(allTags)]
})

// Filtered posts
const filteredPosts = computed(() => {
  if (!allPosts.value) return []
  
  return allPosts.value.filter((post: any) => {
    const matchesSearch = !search.value || 
      post.title?.toLowerCase().includes(search.value.toLowerCase()) ||
      post.description?.toLowerCase().includes(search.value.toLowerCase())
    
    const matchesCategory = !selectedCategory.value || 
      post.category === selectedCategory.value
    
    const matchesTag = !selectedTag.value || 
      (post.tags && post.tags.includes(selectedTag.value))
    
    return matchesSearch && matchesCategory && matchesTag
  })
})

// Sort by date descending
const sortedPosts = computed(() => {
  return [...filteredPosts.value].sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

// Pagination
const totalPages = computed(() => Math.ceil(sortedPosts.value.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return sortedPosts.value.slice(start, start + postsPerPage)
})

// Reset page when filters change
watch([search, selectedCategory, selectedTag], () => {
  currentPage.value = 1
})

const clearFilters = () => {
  search.value = ''
  selectedCategory.value = ''
  selectedTag.value = ''
}

const getSlug = (path: string) => path?.replace('/blog/', '') || ''
</script>

<template>
  <div>
    <!-- Header -->
    <header class="background-grid background-grid--fade-out pb-10 pt-32 lg:pb-14 lg:pt-40">
      <div class="content-wrapper">
        <div class="max-w-3xl">
          <div class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 lg:mb-4">
            Blog
          </div>
          <h1 class="text-2xl font-extrabold text-slate-700 dark:text-slate-300 md:text-4xl">
            Thoughts & Writings
          </h1>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            My Personal Blog about development, productivity, dan personal growth.
          </p>
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="pb-20">
      <div class="content-wrapper">
        <!-- Filters -->
        <div class="mb-8 space-y-4">
          <!-- Search -->
          <div class="relative">
            <Icon name="heroicons:magnifying-glass-20-solid" class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              v-model="search"
              type="text"
              placeholder="Cari artikel..."
              class="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            />
          </div>
          
          <!-- Category & Tag Filters -->
          <div class="flex flex-wrap gap-3">
            <!-- Category -->
            <select
              v-model="selectedCategory"
              class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-accent-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <option value="">Semua Kategori</option>
              <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
            
            <!-- Tag -->
            <select
              v-model="selectedTag"
              class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-accent-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <option value="">Semua Tag</option>
              <option v-for="tag in tags" :key="tag" :value="tag">
                #{{ tag }}
              </option>
            </select>
            
            <!-- Clear Filters -->
            <button
              v-if="search || selectedCategory || selectedTag"
              @click="clearFilters"
              class="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <!-- Results Count -->
        <p class="mb-6 text-sm text-slate-500 dark:text-slate-400">
          Menampilkan {{ sortedPosts.length }} artikel
        </p>

        <!-- Blog Grid -->
        <div v-if="paginatedPosts.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            v-for="post in paginatedPosts"
            :key="post.path"
            :title="post.title || 'Untitled'"
            :description="post.description || ''"
            :date="post.date || ''"
            :category="post.category || 'Uncategorized'"
            :tags="post.tags || []"
            :slug="getSlug(post.path)"
            :image="post.image"
            :reading-time="post.readingTime || 5"
          />
        </div>
        
        <!-- Empty State -->
        <div v-else class="rounded-xl border border-slate-200 bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-800/50">
          <Icon name="heroicons:document-magnifying-glass-20-solid" class="mx-auto mb-4 h-12 w-12 text-slate-400" />
          <p class="text-slate-600 dark:text-slate-400">Tidak ada artikel yang ditemukan</p>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-10 flex justify-center gap-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="clsx(
              'h-10 w-10 rounded-lg text-sm font-medium transition-colors',
              currentPage === page
                ? 'bg-accent-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
            )"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
