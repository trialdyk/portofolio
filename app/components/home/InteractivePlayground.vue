<script setup lang="ts">
import { useWebsiteDestroyer } from '~/composables/useWebsiteDestroyer'

const { triggerDestruction } = useWebsiteDestroyer()
const colorMode = useColorMode()

const handleDestroyerClick = () => {
  // Trigger easter egg programmatically
  if (import.meta.client) {
    triggerDestruction()
  }
}

const colors = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
]

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  
  // Randomize primary color to showcase the full theme capability
  const randomColor = colors[Math.floor(Math.random() * colors.length)] || 'indigo'
  document.documentElement.setAttribute('data-primary', randomColor)
  localStorage.setItem('theme-primary', randomColor)
}
</script>

<template>
  <div class="content-wrapper mb-12 lg:mb-24 pt-10">
    <div class="max-w-6xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
        <h2 class="text-3xl font-extrabold text-slate-800 dark:text-slate-100 md:text-5xl mb-4">
          Interactive <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-fuchsia-500">Playground</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg">
          This portfolio isn't just a document; it's an experience. Go ahead, push some buttons.
        </p>
      </div>

      <!-- Playground Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Space Journey Card -->
        <NuxtLink 
          to="/journey"
          class="group relative flex flex-col justify-between p-8 rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(var(--color-primary-500),0.15)] dark:hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.15)] hover:-translate-y-1"
        >
          <!-- Deep space background layer -->
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 dark:from-accent-900/40 via-transparent dark:via-slate-900 to-transparent dark:to-black opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div class="relative z-10">
            <div class="w-12 h-12 mb-6 rounded-2xl bg-accent-500/10 dark:bg-accent-500/20 border border-accent-500/20 dark:border-accent-500/30 flex items-center justify-center text-accent-600 dark:text-accent-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
              <Icon name="heroicons:rocket-launch-solid" class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Space Journey</h3>
            <p class="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
              Explore my educational and professional timeline through an immersive, personalized trip among the stars.
            </p>
          </div>
          
          <div class="relative z-10 mt-8 flex items-center text-accent-600 dark:text-accent-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Launch Experience <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4 ml-2" />
          </div>
        </NuxtLink>

        <!-- Theme Switcher Card -->
        <button 
          @click="toggleTheme"
          class="group relative flex flex-col justify-between p-8 rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(var(--color-primary-500),0.15)] dark:hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.15)] hover:-translate-y-1 text-left"
        >
          <!-- Light/Dark split background layer -->
          <div class="absolute inset-0 bg-gradient-to-br from-slate-100 dark:from-slate-800 to-transparent dark:to-black opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          <div class="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 dark:bg-accent-500/10 blur-3xl rounded-full group-hover:bg-accent-500/10 dark:group-hover:bg-accent-500/20 transition-colors duration-500" />

          <div class="relative z-10">
            <div class="w-12 h-12 mb-6 rounded-2xl bg-accent-500/10 dark:bg-accent-500/20 border border-accent-500/20 dark:border-accent-500/30 flex items-center justify-center text-accent-600 dark:text-accent-400 group-hover:rotate-180 transition-transform duration-700">
              <Icon :name="colorMode.value === 'dark' ? 'heroicons:sun-solid' : 'heroicons:moon-solid'" class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Theme Switcher</h3>
            <p class="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
              Click here to randomize the website's color palette and toggle between Light and Dark mode instantly.
            </p>
          </div>
          
          <div class="relative z-10 mt-8 flex items-center text-accent-600 dark:text-accent-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Randomize Mode <Icon name="heroicons:swatch-20-solid" class="w-4 h-4 ml-2" />
          </div>
        </button>

        <!-- Easter Egg Card -->
        <button 
          @click="handleDestroyerClick"
          class="group relative flex flex-col justify-between p-8 rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(var(--color-primary-500),0.15)] dark:hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.15)] hover:-translate-y-1 text-left"
        >
          <!-- Glitch/Hacker background layer -->
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-500/5 dark:from-accent-900/30 via-transparent dark:via-slate-900 to-transparent dark:to-black opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          <!-- Subtle scanline effect on hover -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[linear-gradient(transparent_50%,rgba(var(--color-primary-500),0.1)_50%)] dark:bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none transition-opacity duration-300" />

          <div class="relative z-10">
            <div class="w-12 h-12 mb-6 rounded-2xl bg-accent-500/10 dark:bg-accent-500/20 border border-accent-500/20 dark:border-accent-500/30 flex items-center justify-center text-accent-600 dark:text-accent-400 group-hover:animate-pulse transition-all duration-500">
              <Icon name="heroicons:bolt-solid" class="w-6 h-6 group-hover:animate-bounce" style="animation-duration: 0.5s" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:animate-pulse" style="animation-duration: 0.2s">Website Destroyer</h3>
            <p class="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
              A hidden cinematic protocol. Press the <kbd class="px-2 py-1 mx-1 text-xs font-mono bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded border border-slate-300 dark:border-slate-700">'B'</kbd> key anywhere on the site, or click here to initiate system failure.
            </p>
          </div>
          
          <div class="relative z-10 mt-8 flex items-center text-accent-600 dark:text-accent-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Execute Protocol <Icon name="heroicons:hand-raised-solid" class="w-4 h-4 ml-2" />
          </div>
        </button>

      </div>
    </div>
  </div>
</template>
