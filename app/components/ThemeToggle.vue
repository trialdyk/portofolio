<script setup lang="ts">
const colorMode = useColorMode()
const isOpen = ref(false)

// Primary colors (matching the reference image - no Black)
const primaryColors = [
  { name: 'Red', value: 'red', color: '#ef4444' },
  { name: 'Orange', value: 'orange', color: '#f97316' },
  { name: 'Amber', value: 'amber', color: '#f59e0b' },
  { name: 'Yellow', value: 'yellow', color: '#eab308' },
  { name: 'Lime', value: 'lime', color: '#84cc16' },
  { name: 'Green', value: 'green', color: '#22c55e' },
  { name: 'Emerald', value: 'emerald', color: '#10b981' },
  { name: 'Teal', value: 'teal', color: '#14b8a6' },
  { name: 'Cyan', value: 'cyan', color: '#06b6d4' },
  { name: 'Sky', value: 'sky', color: '#0ea5e9' },
  { name: 'Blue', value: 'blue', color: '#3b82f6' },
  { name: 'Indigo', value: 'indigo', color: '#6366f1' },
  { name: 'Violet', value: 'violet', color: '#8b5cf6' },
  { name: 'Purple', value: 'purple', color: '#a855f7' },
  { name: 'Fuchsia', value: 'fuchsia', color: '#d946ef' },
  { name: 'Pink', value: 'pink', color: '#ec4899' },
  { name: 'Rose', value: 'rose', color: '#f43f5e' },
]

// Color modes
const colorModes = [
  { name: 'Light', value: 'light', icon: 'heroicons:sun-20-solid' },
  { name: 'Dark', value: 'dark', icon: 'heroicons:moon-20-solid' },
  { name: 'System', value: 'system', icon: 'heroicons:computer-desktop-20-solid' },
]

// Current selection (stored in localStorage)
const selectedPrimary = ref('indigo')

// Load saved preferences
onMounted(() => {
  const savedPrimary = localStorage.getItem('theme-primary')
  if (savedPrimary) selectedPrimary.value = savedPrimary
  applyTheme()
})

// Apply theme to document
const applyTheme = () => {
  document.documentElement.setAttribute('data-primary', selectedPrimary.value)
}

// Select primary color
const selectPrimary = (color: string) => {
  selectedPrimary.value = color
  localStorage.setItem('theme-primary', color)
  applyTheme()
}

// Set color mode
const setColorMode = (mode: string) => {
  colorMode.preference = mode
}

// Toggle panel
const togglePanel = () => {
  isOpen.value = !isOpen.value
}

// Close on click outside
const panelRef = ref<HTMLElement | null>(null)
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (panelRef.value && !panelRef.value.contains(e.target as Node)) {
      isOpen.value = false
    }
  })
})
</script>

<template>
  <div ref="panelRef" class="relative">
    <!-- Toggle Button -->
    <button
      type="button"
      title="Theme Settings"
      class="flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      @click.stop="togglePanel"
    >
      <Icon name="heroicons:swatch-20-solid" class="h-5 w-5" />
    </button>
    
    <!-- Settings Panel -->
    <Transition name="panel">
      <div 
        v-if="isOpen"
        class="absolute right-0 top-12 z-50 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900"
        @click.stop
      >
        <!-- Primary Colors -->
        <div class="mb-5">
          <h3 class="mb-3 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            Primary
            <span class="flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[10px] text-slate-400 dark:border-slate-600 dark:text-slate-500">?</span>
          </h3>
          <div class="grid grid-cols-3 gap-1.5">
            <button
              v-for="color in primaryColors"
              :key="color.value"
              class="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors"
              :class="selectedPrimary === color.value 
                ? 'border-slate-400 bg-slate-100 text-slate-900 dark:border-slate-500 dark:bg-slate-800 dark:text-white' 
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800'"
              @click="selectPrimary(color.value)"
            >
              <span 
                class="h-2.5 w-2.5 rounded-full flex-shrink-0" 
                :style="{ backgroundColor: color.color }"
              />
              {{ color.name }}
            </button>
          </div>
        </div>
        
        <!-- Color Mode -->
        <div>
          <h3 class="mb-3 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            Color Mode
            <span class="flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[10px] text-slate-400 dark:border-slate-600 dark:text-slate-500">?</span>
          </h3>
          <div class="flex rounded-lg border border-slate-200 p-1 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50">
            <button
              v-for="mode in colorModes"
              :key="mode.value"
              class="flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-colors"
              :class="colorMode.preference === mode.value 
                ? 'bg-accent-600 text-white' 
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'"
              @click="setColorMode(mode.value)"
            >
              <Icon :name="mode.icon" class="h-4 w-4" />
              <span>{{ mode.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.panel-enter-active,
.panel-leave-active {
  transition: all 0.2s ease;
}

.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}
</style>
