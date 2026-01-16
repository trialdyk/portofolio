<script setup lang="ts">
// Website Destroyer Easter Egg
// Activates after 20 seconds on first visit when user presses 'B'

const { 
  showToast, 
  isDestroying, 
  showModal, 
  destructionPhase,
  initEasterEgg,
  dismissToast,
  refreshPage
} = useWebsiteDestroyer()

// Initialize on mount (client-side only)
onMounted(() => {
  const cleanup = initEasterEgg()
  
  // Add body class during destruction
  watch(isDestroying, (destroying) => {
    if (destroying) {
      document.body.classList.add('destroying')
    }
  })

  onUnmounted(() => {
    cleanup?.()
    document.body.classList.remove('destroying')
  })
})
</script>

<template>
  <div class="website-destroyer">
    <!-- Toast Notification -->
    <EasterEggWebsiteDestroyerToast 
      :visible="showToast" 
      @dismiss="dismissToast" 
    />

    <!-- Destruction Effects -->
    <EasterEggWebsiteDestroyerEffect 
      v-if="isDestroying" 
      :phase="destructionPhase" 
    />

    <!-- Refresh Modal -->
    <EasterEggWebsiteDestroyerModal 
      :visible="showModal" 
      @refresh="refreshPage" 
    />
  </div>
</template>

<style>
/* Global styles for destruction effect */
body.destroying {
  overflow: hidden;
}

body.destroying * {
  cursor: not-allowed !important;
  user-select: none !important;
}
</style>
