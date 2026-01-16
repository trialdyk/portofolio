// Easter Egg: Website Destroyer
// Toast appears on first visit after 15s, but B key always works

const STORAGE_KEY = 'portfolio_easter_egg_shown'
const TRIGGER_DELAY = 15000 // 15 seconds

export const useWebsiteDestroyer = () => {
  const showToast = ref(false)
  const isDestroying = ref(false)
  const showModal = ref(false)
  const destructionPhase = ref(0)

  const isClient = import.meta.client

  // Check if toast was already shown before
  const wasToastShown = (): boolean => {
    if (!isClient) return true
    return localStorage.getItem(STORAGE_KEY) === 'true'
  }

  // Mark toast as shown
  const markToastShown = () => {
    if (!isClient) return
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  // Start destruction sequence
  const triggerDestruction = () => {
    if (isDestroying.value) return
    
    isDestroying.value = true
    showToast.value = false

    // Phase 1: Glitch (0-500ms)
    destructionPhase.value = 1
    
    setTimeout(() => {
      // Phase 2: Chaos (500ms-2s)
      destructionPhase.value = 2
    }, 500)

    setTimeout(() => {
      // Phase 3: Gravity (2s)
      destructionPhase.value = 3
    }, 2000)

    setTimeout(() => {
      // Phase 4: Crack (3s)
      destructionPhase.value = 4
    }, 3000)

    setTimeout(() => {
      // Phase 5: Show modal (3.5s)
      destructionPhase.value = 5
      showModal.value = true
    }, 3500)
  }

  // Keyboard handler - always listen for B key
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === 'b' && !isDestroying.value) {
      triggerDestruction()
    }
  }

  // Initialize the Easter egg
  const initEasterEgg = () => {
    if (!isClient) return

    // Always add keyboard listener (B key always works)
    window.addEventListener('keydown', handleKeyDown)

    // Only show toast on first visit
    if (!wasToastShown()) {
      const timer = setTimeout(() => {
        if (!isDestroying.value) {
          showToast.value = true
          markToastShown()
          
          // Auto-hide toast after 10 seconds
          setTimeout(() => {
            if (showToast.value && !isDestroying.value) {
              showToast.value = false
            }
          }, 10000)
        }
      }, TRIGGER_DELAY)

      // Cleanup function
      return () => {
        clearTimeout(timer)
        window.removeEventListener('keydown', handleKeyDown)
      }
    }

    // Cleanup function (no timer to clear)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }

  // Dismiss toast
  const dismissToast = () => {
    showToast.value = false
  }

  // Refresh page
  const refreshPage = () => {
    if (isClient) {
      window.location.reload()
    }
  }

  // Reset Easter egg (for testing)
  const resetEasterEgg = () => {
    if (!isClient) return
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    showToast,
    isDestroying,
    showModal,
    destructionPhase,
    initEasterEgg,
    triggerDestruction,
    dismissToast,
    refreshPage,
    resetEasterEgg
  }
}
