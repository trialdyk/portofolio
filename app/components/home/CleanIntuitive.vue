<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper">
    <div class="flex flex-col gap-8 lg:flex-row lg:gap-16">
      <div class="flex-1">
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
          class="text-slate-600 dark:text-slate-400"
        >
          Building complete web applications from the ground up — from database design 
          to API development to beautiful frontend interfaces. Every layer works 
          together seamlessly.
        </p>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div 
          v-motion
          :initial="{ scale: 0.9, opacity: 0 }"
          :visibleOnce="{ scale: 1, opacity: 1, transition: { delay: 300 } }"
          class="group relative h-48 w-full max-w-sm rounded-2xl border border-divider-light bg-slate-50 p-6 dark:border-divider-dark dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex flex-col gap-3">
            <!-- Backend -->
            <div class="flex items-center gap-2 group/item cursor-pointer">
              <Icon name="simple-icons:go" class="h-5 w-5 text-[#00ADD8] transition-transform group-hover/item:scale-125 group-hover/item:rotate-12" />
              <span class="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors group-hover/item:text-[#00ADD8]">Backend</span>
            </div>
            <div class="h-2 w-full rounded bg-gradient-to-r from-[#00ADD8] to-[#00ADD8]/50 animate-pulse" style="animation-duration: 2s;" />
            
            <!-- Frontend -->
            <div class="flex items-center gap-2 group/item cursor-pointer">
              <Icon name="simple-icons:vuedotjs" class="h-5 w-5 text-[#4FC08D] transition-transform group-hover/item:scale-125 group-hover/item:rotate-12" />
              <span class="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors group-hover/item:text-[#4FC08D]">Frontend</span>
            </div>
            <div class="h-2 w-3/4 rounded bg-gradient-to-r from-[#4FC08D] to-[#4FC08D]/50 animate-pulse" style="animation-duration: 2.5s;" />
            
            <!-- Database -->
            <div class="flex items-center gap-2 group/item cursor-pointer">
              <Icon name="simple-icons:postgresql" class="h-5 w-5 text-[#4169E1] transition-transform group-hover/item:scale-125 group-hover/item:rotate-12" />
              <span class="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors group-hover/item:text-[#4169E1]">Database</span>
            </div>
            <div class="h-2 w-1/2 rounded bg-gradient-to-r from-[#4169E1] to-[#4169E1]/50 animate-pulse" style="animation-duration: 3s;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
