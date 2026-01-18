<script setup lang="ts">
interface Props {
  phase: number // 0: none, 1: chaos, 2: gravity
}

const props = defineProps<Props>()

// Apply effects directly when phase changes
watch(() => props.phase, (newPhase) => {
  if (!import.meta.client) return
  
  console.log('🎪 Effect phase:', newPhase)

  // Get all main content elements
  const selectors = 'nav, header, main, section, article, footer, h1, h2, h3, h4, p, img, button, a, div[class*="card"], div[class*="grid"]'
  const elements = document.querySelectorAll(selectors)
  
  console.log('🎪 Found elements:', elements.length)

  if (newPhase === 1) {
    // Chaos: shake and random movement
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement
      const randomX = (Math.random() - 0.5) * 80
      const randomY = (Math.random() - 0.5) * 50
      const randomRotate = (Math.random() - 0.5) * 20
      
      htmlEl.style.transition = 'transform 0.5s ease-out'
      htmlEl.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`
    })
  }

  if (newPhase === 2) {
    // Gravity: everything falls down
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement
      const delay = Math.random() * 600
      const rotation = (Math.random() - 0.5) * 120
      const horizontalDrift = (Math.random() - 0.5) * 300
      const fallDistance = window.innerHeight + 800
      
      setTimeout(() => {
        htmlEl.style.transition = 'transform 2s cubic-bezier(0.55, 0, 1, 0.45), opacity 2s ease'
        htmlEl.style.transform = `translate(${horizontalDrift}px, ${fallDistance}px) rotate(${rotation}deg)`
        htmlEl.style.opacity = '0'
      }, delay)
    })
  }
}, { immediate: true })
</script>

<template>
  <div class="destroyer-overlay" />
</template>

<style scoped>
.destroyer-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
}
</style>
