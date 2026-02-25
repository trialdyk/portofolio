<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { experienceConfig } from '~/config/experience'
import type { TimelineItem } from '~/config/experience'

definePageMeta({
  layout: false // We use a bare layout because this is a full-screen immersive experience
})

useSeoMeta({
  title: 'My Journey | Tri Aldy Kurniawan',
  description: 'An interactive space journey through my educational and professional experience.',
})

const router = useRouter()

// 1. Gather all timeline items and parse their start dates for chronological sorting
interface ParsedTimelineItem extends TimelineItem {
  parsedDate: Date
}

const allItems: ParsedTimelineItem[] = [
  ...experienceConfig.timeline,
  ...experienceConfig.education,
  ...experienceConfig.internship
].map(item => {
  let parsedDate = new Date()
  if (item.periodStart && item.periodStart.includes('-')) {
    const [year, month] = item.periodStart.split('-')
    if (year && month) {
      parsedDate = new Date(parseInt(year), parseInt(month) - 1)
    }
  } else if (item.periodStart) {
    parsedDate = new Date(parseInt(item.periodStart), 0)
  }
  return { ...item, parsedDate }
})

// Sort chronologically (oldest first) for the journey
const sortedJourney = allItems.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime())

// State
const currentIndex = ref(0)
const isWarping = ref(true) // Start with warping animation
const hasStarted = ref(false)

onMounted(() => {
  // Simulate the arrival warp effect
  setTimeout(() => {
    hasStarted.value = true
    setTimeout(() => {
      isWarping.value = false
    }, 500)
  }, 800)
})

const currentStory = computed(() => sortedJourney[currentIndex.value])
const isLast = computed(() => currentIndex.value === sortedJourney.length - 1)

// Navigation
const handleNext = () => {
  if (isLast.value) return
  
  // Trigger warp speed effect
  isWarping.value = true
  
  // Wait for warp animation peak, then change text, then slow down
  setTimeout(() => {
    currentIndex.value++
    setTimeout(() => {
      isWarping.value = false
    }, 500)
  }, 800)
}

const handleFinish = () => {
  isWarping.value = true
  setTimeout(() => {
    router.push('/')
  }, 1000)
}

// Map the generic descriptions to more conversational story lines for the typing effect
const generateStoryText = (item: ParsedTimelineItem) => {
  let intro = ''
  if (item.type === 'education') {
    intro = `In ${item.periodStart.substring(0,4)}, I studied at ${item.company}.`
  } else if (item.type === 'internship') {
    intro = `I began my practical journey as a ${item.role} at ${item.company}.`
  } else if (item.type === 'freelance') {
    intro = `I ventured into freelance work as a ${item.role} for ${item.company}.`
  } else {
    intro = `I took on the role of ${item.role} at ${item.company}.`
  }
  
  const tasks = item.tasks && item.tasks.length > 0 
    ? '\n\nKey achievements & responsibilities:\n• ' + item.tasks.join('\n• ') 
    : ''
    
  return `${intro}\n\n${item.description}${tasks}`
}

</script>

<template>
  <div class="relative min-h-screen w-full bg-black overflow-hidden font-sans text-slate-100 flex items-center justify-center">
    
    <!-- Immersive Background -->
    <JourneySpaceBackground :is-warping="isWarping" />

    <!-- Overlay content -->
    <div 
      class="relative z-10 w-full px-4 transition-all duration-700"
      :class="isWarping ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-none'"
    >
      <!-- Navigation / Back button -->
      <div class="absolute top-4 md:top-8 left-4 md:left-8 z-50">
        <button 
          @click="router.push('/')"
          class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10 backdrop-blur-md"
        >
          <Icon name="heroicons:arrow-left-20-solid" class="w-4 h-4" />
          Back to Earth
        </button>
      </div>

      <!-- Main Story Node Component -->
      <JourneyStoryNode 
        v-if="currentStory && hasStarted"
        :key="currentIndex"
        :title="currentStory.role"
        :subtitle="currentStory.company"
        :date="currentStory.period"
        :text="generateStoryText(currentStory)"
        :is-last="isLast"
        @next="handleNext"
        @finish="handleFinish"
      />
    </div>

  </div>
</template>
