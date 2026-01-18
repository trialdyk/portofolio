<script setup lang="ts">
// Website Destroyer Easter Egg
// Simplified: chaos + gravity only, no modal

const { 
  showToast, 
  isDestroying, 
  destructionPhase,
  initEasterEgg,
  dismissToast
} = useWebsiteDestroyer()

// Initialize on mount (client-side only)
onMounted(() => {
  const cleanup = initEasterEgg()

  onUnmounted(() => {
    cleanup?.()
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

    <!-- Destruction Effects (chaos + gravity only) -->
    <EasterEggWebsiteDestroyerEffect 
      v-if="isDestroying" 
      :phase="destructionPhase" 
    />
  </div>
</template>
