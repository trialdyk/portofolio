<script setup lang="ts">
import { homeConfig } from '~/config/home'

const codeSnippets = homeConfig.codeSnippets

const currentSnippetIndex = ref(0)
const currentLineIndex = ref(0)
const showCursor = ref(true)
const isTransitioning = ref(false)

let lineInterval: ReturnType<typeof setInterval>
let cursorInterval: ReturnType<typeof setInterval>

onMounted(() => {
  // Animate through code lines
  lineInterval = setInterval(() => {
    if (codeSnippets[currentSnippetIndex.value] && currentLineIndex.value < codeSnippets[currentSnippetIndex.value]!.lines.length + 1) {
      currentLineIndex.value++
    } else {
      // Switch to next snippet
      isTransitioning.value = true
      setTimeout(() => {
        currentSnippetIndex.value = (currentSnippetIndex.value + 1) % codeSnippets.length
        currentLineIndex.value = 0
        isTransitioning.value = false
      }, 500)
    }
  }, 600)

  // Blinking cursor
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})
onUnmounted(() => {
  clearInterval(lineInterval)
  clearInterval(cursorInterval)
})

const currentSnippet = computed(() => codeSnippets[currentSnippetIndex.value] || codeSnippets[0])
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.95 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 800 } }"
    class="relative h-[400px] w-[400px] lg:h-[480px] lg:w-[480px] mx-auto"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <!-- Outer rotating ring -->
      <div class="absolute h-80 w-80 lg:h-96 lg:w-96 rounded-full border border-accent-500/20 animate-spin-slow" />
      <!-- Inner pulsing circle -->
      <div class="absolute h-64 w-64 lg:h-80 lg:w-80 rounded-full bg-gradient-to-br from-accent-500/10 to-violet-500/10 animate-pulse" style="animation-duration: 3s;" />
      
      <!-- Floating tech icons -->
      <div class="absolute top-4 left-6 animate-float" style="animation-delay: 0s;">
        <div class="h-10 w-10 rounded-xl bg-[#02569B]/20 border border-[#02569B]/40  flex items-center justify-center backdrop-blur-md shadow-lg">
          <Icon name="simple-icons:flutter" class="h-5 w-5 text-[#02569B]" />
        </div>
      </div>
      <div class="absolute top-12 -right-2 animate-float" style="animation-delay: 0.5s;">
        <div class="h-10 w-10 rounded-xl bg-[#4169E1]/20 border border-[#4169E1]/40 flex items-center justify-center backdrop-blur-md shadow-lg">
          <Icon name="simple-icons:postgresql" class="h-5 w-5 text-[#4169E1]" />
        </div>
      </div>
      <div class="absolute bottom-28 left-4 animate-float z-30" style="animation-delay: 1s;">
        <div class="h-10 w-10 rounded-xl bg-[#00ADD8]/20 border border-[#00ADD8]/40 flex items-center justify-center backdrop-blur-md shadow-lg">
          <Icon name="simple-icons:go" class="h-5 w-5 text-[#00ADD8]" />
        </div>
      </div>
      <div class="absolute top-1/2 -right-4 mt-8 animate-float z-30" style="animation-delay: 1.5s;">
        <div class="h-10 w-10 rounded-xl bg-[#4FC08D]/20 border border-[#4FC08D]/40 flex items-center justify-center backdrop-blur-md shadow-lg">
          <Icon name="simple-icons:vuedotjs" class="h-5 w-5 text-[#4FC08D]" />
        </div>
      </div>
    </div>
    
    <!-- Base Layer: 1:1 Profile Photo -->
    <div class="absolute inset-8 lg:inset-10 lg:bottom-16 z-10 overflow-hidden rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-slate-200/50 dark:border-slate-700/50 transition-transform duration-700 hover:scale-[1.02]">
      <img 
        src="/profile.png" 
        alt="Profile Avatar" 
        class="w-full h-full object-cover transition-all duration-700 hover:scale-105"
      />
      <!-- Subtle tint overlay for depth -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
    </div>
    
    <!-- Code Editor Mockup (Overlapping Top Layer) -->
    <div 
      class="code-editor absolute -bottom-4 right-0 lg:-right-4 z-20 w-64 lg:w-72 overflow-hidden rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/90 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)]"
      :class="isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    >
      <!-- Editor header -->
      <div class="flex items-center gap-2 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-100/30 dark:bg-slate-800/30 px-3 py-2.5">
        <div class="flex gap-1.5">
          <div class="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div class="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div class="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span class="ml-2 text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400 transition-all duration-300">
          {{ currentSnippet?.filename }}
        </span>
      </div>
      
      <!-- Code content -->
      <div class="p-4 font-mono text-[11px] sm:text-xs leading-relaxed">
        <div
          v-for="(line, index) in currentSnippet?.lines"
          :key="index"
          class="flex items-center transition-all duration-300"
          :class="index < currentLineIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
        >
          <span class="mr-3 w-4 text-right opacity-50">{{ index + 1 }}</span>
          <span :class="line.color" class="whitespace-pre">{{ line.text }}</span>
          <span 
            v-if="index === currentLineIndex - 1 && showCursor && currentLineIndex <= (currentSnippet?.lines.length || 0)" 
            class="ml-0.5 inline-block h-4 w-0.5 bg-accent-500 animate-pulse"
          />
        </div>
      </div>
    </div>
    
    <!-- Sparkle effects -->
    <div class="absolute top-16 left-16 h-1 w-1 rounded-full bg-accent-400 animate-ping z-30" style="animation-duration: 2s;" />
    <div class="absolute bottom-28 right-32 h-1.5 w-1.5 rounded-full bg-violet-400 animate-ping z-30" style="animation-duration: 2.5s; animation-delay: 0.5s;" />
    <div class="absolute top-1/2 -right-4 h-1.5 w-1.5 rounded-full bg-pink-400 animate-ping z-30" style="animation-duration: 3s; animation-delay: 1s;" />
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.code-editor {
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 40px -10px rgba(139, 92, 246, 0.2);
}
</style>
