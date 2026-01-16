<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const is404 = computed(() => props.error.statusCode === 404)

const handleGoHome = () => {
  clearError({ redirect: '/' })
}

const handleGoBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    handleGoHome()
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
    <div class="text-center max-w-lg">
      <!-- Error Code -->
      <div class="relative mb-8">
        <span 
          class="text-[150px] md:text-[200px] font-black text-slate-200 dark:text-slate-800 leading-none select-none"
        >
          {{ error.statusCode }}
        </span>
        <div class="absolute inset-0 flex items-center justify-center">
          <div v-if="is404" class="text-6xl animate-bounce">🔍</div>
          <div v-else class="text-6xl">😵</div>
        </div>
      </div>

      <!-- Error Title -->
      <h1 class="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
        <template v-if="is404">
          Page Not Found
        </template>
        <template v-else>
          Oops! Something went wrong
        </template>
      </h1>

      <!-- Error Message -->
      <p class="text-slate-600 dark:text-slate-400 mb-8">
        <template v-if="is404">
          The page you're looking for doesn't exist or has been moved.
          <br />
          <span class="text-sm text-slate-500">Maybe try the navigation above?</span>
        </template>
        <template v-else>
          {{ error.message || 'An unexpected error occurred.' }}
        </template>
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          @click="handleGoHome"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-600 text-white font-semibold hover:bg-accent-700 transition-colors"
        >
          <Icon name="heroicons:home-20-solid" class="h-5 w-5" />
          Go Home
        </button>
        <button
          @click="handleGoBack"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Icon name="heroicons:arrow-left-20-solid" class="h-5 w-5" />
          Go Back
        </button>
      </div>

      <!-- Fun Links (for 404) -->
      <div v-if="is404" class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Or explore these pages:</p>
        <div class="flex flex-wrap justify-center gap-2">
          <NuxtLink 
            to="/projects" 
            class="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            Projects
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            Blog
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
