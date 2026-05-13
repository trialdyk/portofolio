<script setup lang="ts">
const scrollToStory = () => {
  if (import.meta.client) {
    const el = document.getElementById('my-story')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div
    v-motion
    :initial="{ x: -32, opacity: 0 }"
    :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }"
    class="flex flex-col gap-3 md:flex-row md:gap-4"
  >
    <!-- See My Story - Premium animated button with rotating border -->
    <NuxtLink
      to="/contact"
      class="cta-button group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3 font-bold text-white cursor-pointer"
    >
      <!-- Rotating gradient border -->
      <span class="absolute inset-[-2px] rounded-xl bg-gradient-conic animate-border-rotate" />
      
      <!-- Inner background -->
      <span class="absolute inset-[2px] rounded-[10px] bg-accent-600" />
      
      <!-- Shine sweep effect -->
      <span class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      
      <!-- Sparkle effects -->
      <UiSparkleEffect color="white" :count="4" />
      
      <!-- Content -->
      <span class="relative z-10 flex items-center gap-2">
        <Icon name="heroicons:chat-bubble-left-ellipsis-20-solid" class="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
        <span>Get in touch</span>
        <Icon name="heroicons:arrow-right-20-solid" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </NuxtLink>
    
    <!-- Read the Blog - Ghost button with animated underline -->
    <NuxtLink
      to="/blog"
      class="group relative inline-flex items-center justify-center gap-2 rounded-xl border border-divider-light bg-white/50 px-6 py-3 font-bold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-accent-300 hover:bg-accent-50/50 dark:border-divider-dark dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-accent-700 dark:hover:bg-accent-900/20"
    >
      <Icon name="heroicons:book-open-20-solid" class="h-5 w-5 text-accent-500 transition-transform duration-300 group-hover:scale-110" />
      <span class="relative">
        Read the Blog
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full" />
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.cta-button {
  box-shadow: 
    0 4px 20px -3px rgba(139, 92, 246, 0.5),
    0 0 40px -10px rgba(139, 92, 246, 0.3);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.cta-button:hover {
  box-shadow: 
    0 8px 30px -5px rgba(139, 92, 246, 0.6),
    0 0 50px -5px rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
}

/* Rotating gradient border */
.bg-gradient-conic {
  background: conic-gradient(
    from 0deg,
    #8b5cf6,
    #a855f7,
    #d946ef,
    #ec4899,
    #f43f5e,
    #f97316,
    #eab308,
    #22c55e,
    #14b8a6,
    #06b6d4,
    #3b82f6,
    #8b5cf6
  );
}

@keyframes border-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-border-rotate {
  animation: border-rotate 3s linear infinite;
}

/* Sparkle position overrides for CTA button */
:deep(.sparkle-1) { top: 10%; left: 15%; }
:deep(.sparkle-2) { top: 20%; right: 20%; }
:deep(.sparkle-3) { bottom: 15%; left: 25%; }
:deep(.sparkle-4) { bottom: 25%; right: 15%; }
</style>
