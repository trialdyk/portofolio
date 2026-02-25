<script setup lang="ts">
// Page Meta
useHead({
  title: 'Site Statistics',
  meta: [
    { name: 'description', content: 'Open analytics and site statistics.' }
  ]
})

definePageMeta({
  layout: 'default'
})

// Fetch Data from Backend API securely
const { data: stats, pending: isLoading, error } = await useFetch('/api/statistics', {
  lazy: true,
  server: false // Prevent SSR hydration mismatch on load, run on client
})

// Computed properties for the template
const totalViews = computed(() => stats.value?.totalViews || 0)
const uniqueVisitors = computed(() => stats.value?.uniqueVisitors || 0)
const topPages = computed(() => stats.value?.topPages || [])
const topBrowsers = computed(() => stats.value?.topBrowsers || [])
const topOS = computed(() => stats.value?.topOS || [])

</script>

<template>
  <main class="min-h-screen bg-slate-50 pt-32 pb-20 dark:bg-[#0B0C10] transition-colors duration-300">
    <div class="mx-auto max-w-5xl px-6">
      <!-- Header -->
      <div class="mb-12" v-motion-fade-visible-once>
        <div class="flex items-center gap-3 mb-2">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
            <Icon name="lucide:line-chart" class="h-5 w-5 text-accent-500" />
          </div>
          <h1 class="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Open Statistics
          </h1>
        </div>
        <p class="text-base text-slate-500 dark:text-slate-400 max-w-2xl ml-1">
          Publicly available analytics showing how people interact with my portfolio in real-time.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <Icon name="lucide:loader-2" class="h-8 w-8 text-accent-500 animate-spin" />
      </div>

      <!-- Dashboard Content -->
      <div v-else class="space-y-8" v-motion-fade-visible-once>
        
        <!-- Top Level Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Total Views Card -->
          <div class="relative overflow-hidden group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900/50">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-4 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:eye" class="h-5 w-5" />
                <h3 class="text-sm font-medium uppercase tracking-wider">Total Page Views</h3>
              </div>
              <div class="text-5xl font-bold text-slate-900 dark:text-white font-mono">
                {{ totalViews }}
              </div>
            </div>
            <!-- Decorative blur -->
            <div class="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-accent-500/10 blur-[40px]"></div>
          </div>

          <!-- Unique Visitors Card -->
          <div class="relative overflow-hidden group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900/50">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-4 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:users" class="h-5 w-5" />
                <h3 class="text-sm font-medium uppercase tracking-wider">Unique Visitors</h3>
              </div>
              <div class="text-5xl font-bold text-slate-900 dark:text-white font-mono">
                {{ uniqueVisitors }}
              </div>
            </div>
            <div class="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-[40px]"></div>
          </div>
        </div>

        <!-- Detailed Lists (3 Columns) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Top Pages -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <h3 class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
              <Icon name="lucide:file-text" class="h-4 w-4" /> Top Pages
            </h3>
            <ul class="space-y-4">
              <li v-for="page in topPages" :key="page.path" class="flex justify-between items-center group">
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300 truncate pr-4 group-hover:text-accent-500 transition-colors">
                  {{ page.path === '/' ? '/ (Home)' : page.path }}
                </span>
                <span class="inline-flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                  {{ page.count }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Top Browsers -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <h3 class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
              <Icon name="lucide:globe" class="h-4 w-4" /> Browsers
            </h3>
            <ul class="space-y-4">
              <li v-for="browser in topBrowsers" :key="browser.name" class="flex justify-between items-center">
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Icon v-if="browser.name === 'Chrome'" name="simple-icons:googlechrome" class="w-4 h-4 text-slate-400" />
                  <Icon v-else-if="browser.name === 'Firefox'" name="simple-icons:firefoxbrowser" class="w-4 h-4 text-slate-400" />
                  <Icon v-else-if="browser.name === 'Safari'" name="simple-icons:safari" class="w-4 h-4 text-slate-400" />
                  <Icon v-else name="lucide:monitor" class="w-4 h-4 text-slate-400" />
                  {{ browser.name }}
                </span>
                <span class="inline-flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                  {{ browser.count }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Top OS -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <h3 class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
              <Icon name="lucide:cpu" class="h-4 w-4" /> Operating Systems
            </h3>
            <ul class="space-y-4">
              <li v-for="os in topOS" :key="os.name" class="flex justify-between items-center">
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Icon v-if="os.name === 'Windows'" name="simple-icons:windows" class="w-4 h-4 text-slate-400" />
                  <Icon v-else-if="os.name === 'Mac OS' || os.name === 'iOS'" name="simple-icons:apple" class="w-4 h-4 text-slate-400" />
                  <Icon v-else-if="os.name === 'Android'" name="simple-icons:android" class="w-4 h-4 text-slate-400" />
                  <Icon v-else-if="os.name === 'Linux'" name="simple-icons:linux" class="w-4 h-4 text-slate-400" />
                  <Icon v-else name="lucide:monitor-smartphone" class="w-4 h-4 text-slate-400" />
                  {{ os.name }}
                </span>
                <span class="inline-flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                  {{ os.count }}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>
