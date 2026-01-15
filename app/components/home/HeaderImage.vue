<script setup lang="ts">
// Multiple code snippets that rotate
const codeSnippets = [
  {
    filename: 'developer.ts',
    lines: [
      { text: 'const developer = {', color: 'text-violet-400' },
      { text: '  name: "Tri Aldy",', color: 'text-green-400' },
      { text: '  role: "Fullstack",', color: 'text-green-400' },
      { text: '  stack: ["Vue", "Go"],', color: 'text-amber-400' },
      { text: '  coffee: true ☕', color: 'text-pink-400' },
      { text: '};', color: 'text-violet-400' },
    ]
  },
  {
    filename: 'analyst.ts',
    lines: [
      { text: 'class SystemAnalyst {', color: 'text-violet-400' },
      { text: '  analyze(problem) {', color: 'text-sky-400' },
      { text: '    const solution =', color: 'text-green-400' },
      { text: '      this.solve(problem);', color: 'text-green-400' },
      { text: '    return solution;', color: 'text-amber-400' },
      { text: '  }', color: 'text-violet-400' },
    ]
  },
  {
    filename: 'mobile.dart',
    lines: [
      { text: 'class MobileApp {', color: 'text-violet-400' },
      { text: '  final platforms = [', color: 'text-sky-400' },
      { text: '    "Android",', color: 'text-green-400' },
      { text: '    "iOS",', color: 'text-green-400' },
      { text: '  ];', color: 'text-amber-400' },
      { text: '}', color: 'text-violet-400' },
    ]
  },
]

const currentSnippetIndex = ref(0)
const currentLineIndex = ref(0)
const showCursor = ref(true)
const isTransitioning = ref(false)

onMounted(() => {
  // Animate through code lines
  setInterval(() => {
    if (currentLineIndex.value < codeSnippets[currentSnippetIndex.value].lines.length + 1) {
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
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

const currentSnippet = computed(() => codeSnippets[currentSnippetIndex.value])
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 32 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
    class="relative h-[400px] w-[400px]"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 flex items-center justify-center">
      <!-- Outer rotating ring -->
      <div class="absolute h-80 w-80 rounded-full border border-accent-500/20 animate-spin-slow" />
      <!-- Inner pulsing circle -->
      <div class="absolute h-64 w-64 rounded-full bg-gradient-to-br from-accent-500/10 to-violet-500/10 animate-pulse" style="animation-duration: 3s;" />
      
      <!-- Floating tech icons -->
      <div class="absolute top-8 left-12 animate-float" style="animation-delay: 0s;">
        <div class="h-10 w-10 rounded-xl bg-[#02569B]/20 border border-[#02569B]/40  flex items-center justify-center backdrop-blur-sm">
          <Icon name="simple-icons:flutter" class="h-5 w-5 text-[#02569B]" />
        </div>
      </div>
      <div class="absolute top-16 right-8 animate-float" style="animation-delay: 0.5s;">
        <div class="h-10 w-10 rounded-xl bg-[#4169E1]/20 border border-[#4169E1]/40 flex items-center justify-center backdrop-blur-sm">
          <Icon name="simple-icons:postgresql" class="h-5 w-5 text-[#4169E1]" />
        </div>
      </div>
      <div class="absolute bottom-16 left-8 animate-float" style="animation-delay: 1s;">
        <div class="h-10 w-10 rounded-xl bg-[#00ADD8]/20 border border-[#00ADD8]/40 flex items-center justify-center backdrop-blur-sm">
          <Icon name="simple-icons:go" class="h-5 w-5 text-[#00ADD8]" />
        </div>
      </div>
      <div class="absolute bottom-8 right-12 animate-float" style="animation-delay: 1.5s;">
        <div class="h-10 w-10 rounded-xl bg-[#4FC08D]/20 border border-[#4FC08D]/40 flex items-center justify-center backdrop-blur-sm">
          <Icon name="simple-icons:vuedotjs" class="h-5 w-5 text-[#4FC08D]" />
        </div>
      </div>
    </div>
    
    <!-- Code editor mockup -->
    <div 
      class="code-editor relative z-10 mx-auto mt-16 w-72 overflow-hidden rounded-xl border border-divider-light bg-slate-900 shadow-2xl dark:border-slate-700 transition-all duration-500"
      :class="isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    >
      <!-- Editor header -->
      <div class="flex items-center gap-2 border-b border-slate-800 bg-slate-800/50 px-3 py-2">
        <div class="flex gap-1.5">
          <div class="h-3 w-3 rounded-full bg-red-500" />
          <div class="h-3 w-3 rounded-full bg-yellow-500" />
          <div class="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span class="ml-2 text-xs text-slate-400 transition-all duration-300">
          {{ currentSnippet.filename }}
        </span>
      </div>
      
      <!-- Code content -->
      <div class="p-4 font-mono text-xs leading-relaxed">
        <div
          v-for="(line, index) in currentSnippet.lines"
          :key="index"
          class="flex items-center transition-all duration-300"
          :class="index < currentLineIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
        >
          <span class="mr-3 w-4 text-right text-slate-600">{{ index + 1 }}</span>
          <span :class="line.color">{{ line.text }}</span>
          <span 
            v-if="index === currentLineIndex - 1 && showCursor && currentLineIndex <= currentSnippet.lines.length" 
            class="ml-0.5 inline-block h-4 w-0.5 bg-accent-500 animate-pulse"
          />
        </div>
      </div>
    </div>
    
    <!-- Sparkle effects -->
    <div class="absolute top-20 left-20 h-1.5 w-1.5 rounded-full bg-accent-400 animate-ping" style="animation-duration: 2s;" />
    <div class="absolute bottom-24 right-20 h-1.5 w-1.5 rounded-full bg-violet-400 animate-ping" style="animation-duration: 2.5s; animation-delay: 0.5s;" />
    <div class="absolute top-32 right-24 h-1.5 w-1.5 rounded-full bg-pink-400 animate-ping" style="animation-duration: 3s; animation-delay: 1s;" />
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
