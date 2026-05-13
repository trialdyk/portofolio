<script setup lang="ts">
// Clean and Intuitive Section
</script>

<template>
  <div class="content-wrapper relative">
    <!-- Deep Ambient Glow Background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

    <div class="relative z-10 flex flex-col gap-8 lg:flex-row lg:gap-16">
      <div class="flex-1 lg:py-12">
        <div
          v-motion
          :initial="{ x: -20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 50 } }"
          class="mb-3 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400"
        >
          <span class="tabular-nums">01</span>
          <span class="h-px w-8 rounded-full bg-accent-500/50" />
          <span>Full-Stack Dev</span>
        </div>
        <h2
          v-motion
          :initial="{ x: -20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 100 } }"
          class="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200 md:text-3xl"
        >
          Full-Stack Solutions
        </h2>
        <p 
          v-motion
          :initial="{ x: -20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 200 } }"
          class="text-slate-600 dark:text-slate-400 mb-8 lg:text-lg leading-relaxed"
        >
          Building complete web applications from the ground up — from
          database design to API development to beautiful frontend interfaces.
          Every layer works together seamlessly.
        </p>

        <!-- Tech Stack Badges -->
        <div 
          v-motion
          :initial="{ y: 20, opacity: 0 }"
          :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 400 } }"
          class="flex flex-wrap gap-3"
        >
          <div class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            <Icon name="simple-icons:vuedotjs" class="h-3.5 w-3.5 text-[#4FC08D]" /> Vue.js
          </div>
          <div class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            <Icon name="simple-icons:nuxtdotjs" class="h-3.5 w-3.5 text-[#00DC82]" /> Nuxt
          </div>
          <div class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
             <Icon name="simple-icons:go" class="h-3.5 w-3.5 text-[#00ADD8]" /> Golang
          </div>
          <div class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
             <Icon name="simple-icons:postgresql" class="h-3.5 w-3.5 text-[#4169E1]" /> PostgreSQL
          </div>
        </div>

      </div>
      <div class="flex flex-1 items-center justify-center lg:justify-end">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
          class="w-full max-w-sm flex justify-center perspective-[1000px]"
        >
          <HomeIsometricStack />
        </div>
      </div>
    </div>
  </div>
</template>
