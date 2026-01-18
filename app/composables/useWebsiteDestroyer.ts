// Easter Egg: Website Destroyer
// Toast appears on first visit after 15s, but B key always works

const STORAGE_KEY = 'portfolio_easter_egg_shown'
const TRIGGER_DELAY = 15000 // 15 seconds

// Singleton state - shared across all usages
const showToast = ref(false)
const isDestroying = ref(false)
const destructionPhase = ref(0) // 0: none, 1: chaos, 2: gravity
let initialized = false

export const useWebsiteDestroyer = () => {
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

    // Phase 1: Chaos
    destructionPhase.value = 1
    
    setTimeout(() => {
      // Phase 2: Gravity
      destructionPhase.value = 2
    }, 1000)
  }

  // Keyboard handler
  const handleKeyDown = (event: KeyboardEvent) => {
    // Only trigger on 'b' or 'B' key, not when typing in inputs
    const target = event.target as HTMLElement
    const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
    
    if (event.key.toLowerCase() === 'b' && !isDestroying.value && !isInput) {
      console.log('🎪 Website Destroyer: B key pressed!')
      triggerDestruction()
    }
  }

  // Initialize the Easter egg (should only run once)
  const initEasterEgg = () => {
    if (!isClient || initialized) return
    initialized = true
    
    console.log('🎪 Website Destroyer: Initialized!')

    // Always add keyboard listener
    window.addEventListener('keydown', handleKeyDown)

    // Only show toast on first visit
    if (!wasToastShown()) {
      setTimeout(() => {
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
    }

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      initialized = false
    }
  }

  // Dismiss toast
  const dismissToast = () => {
    showToast.value = false
  }

  // Reset Easter egg (for testing)
  const resetEasterEgg = () => {
    if (!isClient) return
    localStorage.removeItem(STORAGE_KEY)
    isDestroying.value = false
    destructionPhase.value = 0
    initialized = false
  }

  return {
    showToast,
    isDestroying,
    destructionPhase,
    initEasterEgg,
    triggerDestruction,
    dismissToast,
    resetEasterEgg
  }
}
