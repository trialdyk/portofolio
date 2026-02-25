<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  text: string
  title: string
  subtitle: string
  date: string
  isLast: boolean
}>()

const emit = defineEmits<{
  (e: 'next'): void
  (e: 'finish'): void
}>()

const displayedText = ref('')
const isTyping = ref(true)
let timeoutIds: NodeJS.Timeout[] = []

const startTyping = () => {
  // Clear any existing timeouts perfectly
  timeoutIds.forEach(clearTimeout)
  timeoutIds = []
  
  displayedText.value = ''
  isTyping.value = true
  
  const chars = props.text.split('')
  
  chars.forEach((char, index) => {
    const id = setTimeout(() => {
      displayedText.value += char
      if (index === chars.length - 1) {
        isTyping.value = false
      }
    }, index * 30); // 30ms per character typing speed
    
    timeoutIds.push(id)
  })
}

// Watch for text changes (when moving to next story node) to restart typing
watch(() => props.text, () => {
  startTyping()
})

const handleNext = () => {
  if (isTyping.value) {
    // If they click next while typing, just show the whole text immediately
    timeoutIds.forEach(clearTimeout)
    displayedText.value = props.text
    isTyping.value = false
  } else {
    // Proceed to next node
    emit('next')
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    if (isTyping.value) {
      handleNext()
    } else {
      if (props.isLast) {
        emit('finish')
      } else {
        emit('next')
      }
    }
  }
}

onMounted(() => {
  startTyping()
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  timeoutIds.forEach(clearTimeout)
})
</script>

<template>
  <div class="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4 md:px-8 max-w-4xl mx-auto">
    <!-- Header Animation -->
    <div 
      v-motion
      :initial="{ y: 20, opacity: 0 }"
      :enter="{ y: 0, opacity: 1, transition: { duration: 800 } }"
      class="mb-6 md:mb-10 text-white"
    >
      <div class="inline-block px-3 py-1 mb-4 text-xs md:text-sm font-semibold tracking-widest uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-300">
        {{ date }}
      </div>
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        {{ title }}
      </h1>
      <h2 class="text-lg md:text-2xl font-medium text-slate-300">
        {{ subtitle }}
      </h2>
    </div>

    <!-- The Typing Text Box -->
    <div 
      v-motion
      :initial="{ scale: 0.95, opacity: 0 }"
      :enter="{ scale: 1, opacity: 1, transition: { delay: 300, duration: 800 } }"
      class="w-full p-6 md:p-10 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[200px] flex flex-col justify-center relative overflow-hidden text-left"
    >
      <!-- Glass reflection -->
      <div class="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <p class="text-base md:text-lg lg:text-xl leading-relaxed text-slate-200 font-medium whitespace-pre-wrap">
        {{ displayedText }}<span v-if="isTyping" class="inline-block w-2.5 h-6 ml-1 align-middle bg-accent-400 animate-pulse" />
      </p>
      
      <div v-if="isTyping" class="absolute bottom-4 right-6 text-xs text-slate-500 animate-pulse">
        Press ENTER to skip
      </div>
    </div>

    <!-- Action Button -->
    <div class="mt-10 h-16 flex items-center justify-center">
      <Transition name="fade-slide">
        <button 
          v-if="!isTyping"
          @click="isLast ? emit('finish') : emit('next')"
          class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-accent-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:-translate-y-1"
        >
          <span>{{ isLast ? 'Return to Earth 🌍' : 'Next Destination' }}</span>
          <Icon 
            v-if="!isLast"
            name="heroicons:rocket-launch-solid" 
            class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" 
          />
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
