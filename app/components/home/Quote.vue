<script setup lang="ts">
import { homeConfig } from '~/config/home'
import { computed } from 'vue'

const quoteWords = computed(() => {
  return homeConfig.quote.text.split(' ')
})
</script>

<template>
  <div class="content-wrapper">
    <!-- Eyebrow divider -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{ opacity: 1, transition: { duration: 600 } }"
      class="mb-2 flex items-center justify-center gap-3"
    >
      <span class="h-px w-12 rounded-full bg-slate-300 dark:bg-slate-700" />
      <span class="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">My philosophy</span>
      <span class="h-px w-12 rounded-full bg-slate-300 dark:bg-slate-700" />
    </div>

    <div class="flex items-center justify-center py-12 md:py-16">
      <blockquote
        class="relative max-w-2xl text-center"
      >
        <!-- Quote icon -->
        <Icon
          v-motion
          :initial="{ scale: 0, opacity: 0, rotate: -45 }"
          :visibleOnce="{ scale: 1, opacity: 1, rotate: 0, transition: { type: 'spring', delay: 100 } }"
          name="heroicons:chat-bubble-bottom-center-text-20-solid"
          class="absolute -left-3 -top-3 h-11 w-11 text-accent-300/50 dark:text-accent-500/30"
        />

        <!-- Staggered word text -->
        <p class="text-xl md:text-2xl font-medium italic text-slate-700 dark:text-slate-300 leading-relaxed">
          <span
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="inline-block mr-1 not-italic font-serif text-3xl leading-none text-accent-500/70 dark:text-accent-400/60"
          >
            "
          </span>
          <span 
            v-for="(word, index) in quoteWords" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 50) } }"
            class="inline-block mr-1"
          >
            {{ word }}
          </span>
          <span
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 + (quoteWords.length * 50) } }"
            class="inline-block not-italic font-serif text-3xl leading-none text-accent-500/70 dark:text-accent-400/60"
          >
            "
          </span>
        </p>

        <!-- Author -->
        <footer
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400 + (quoteWords.length * 50) } }"
          class="mt-6 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400"
        >
          — {{ homeConfig.quote.author }}
        </footer>
      </blockquote>
    </div>
  </div>
</template>
