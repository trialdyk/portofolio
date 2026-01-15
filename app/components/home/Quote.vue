<script setup lang="ts">
import { homeConfig } from '~/config/home'

const quoteText = homeConfig.quote.text
const displayedText = ref('')
const showCursor = ref(true)
const isTyping = ref(false)
const hasStarted = ref(false)
const quoteRef = ref<HTMLElement | null>(null)

// Typing animation
const startTyping = () => {
  if (hasStarted.value) return
  hasStarted.value = true
  isTyping.value = true
  
  let index = 0
  const typeInterval = setInterval(() => {
    if (index < quoteText.length) {
      displayedText.value += quoteText[index]
      index++
    } else {
      clearInterval(typeInterval)
      isTyping.value = false
    }
  }, 30)
}

// Blinking cursor
onMounted(() => {
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
  
  // Intersection observer for scroll trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTyping()
        }
      })
    },
    { threshold: 0.5 }
  )
  
  if (quoteRef.value) {
    observer.observe(quoteRef.value)
  }
})
</script>

<template>
  <div class="content-wrapper">
    <div ref="quoteRef" class="flex items-center justify-center py-8">
      <blockquote 
        v-motion
        :initial="{ y: 20, opacity: 0 }"
        :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 100 } }"
        class="relative max-w-xl text-center"
      >
        <!-- Quote icon -->
        <Icon
          name="heroicons:chat-bubble-bottom-center-text-20-solid"
          class="absolute -left-2 -top-2 h-8 w-8 text-slate-200 dark:text-slate-800"
        />
        
        <!-- Typing text -->
        <p class="text-lg font-medium italic text-slate-700 dark:text-slate-300 min-h-[4rem]">
          "<span>{{ displayedText }}</span><span 
            v-if="showCursor && (isTyping || displayedText.length === 0)" 
            class="inline-block w-0.5 h-5 bg-accent-500 ml-0.5 align-middle animate-pulse"
          />"
        </p>
        
        <!-- Author (fade in after typing) -->
        <footer 
          class="mt-4 text-sm text-slate-500 dark:text-slate-400 transition-all duration-500"
          :class="displayedText.length === quoteText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
        >
          — {{ homeConfig.quote.author }}
        </footer>
      </blockquote>
    </div>
  </div>
</template>
