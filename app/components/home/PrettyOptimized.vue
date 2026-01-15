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
          Continuous Learning
        </h2>
        <p 
          v-motion
          :initial="{ x: -20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 200 } }"
          class="text-slate-600 dark:text-slate-400"
        >
          Always exploring new technologies, frameworks, and best practices.
          Staying curious and keeping up with the ever-evolving tech landscape.
        </p>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="relative group cursor-pointer">
          <!-- Learning visualization -->
          <div class="flex items-end gap-3">
            <div 
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 300 } }"
              class="h-12 w-12 rounded-lg border border-divider-light bg-slate-50 dark:border-divider-dark dark:bg-slate-800/50 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1"
            >
              <Icon name="heroicons:book-open-20-solid" class="h-5 w-5 text-slate-400 animate-pulse" />
            </div>
            <div 
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 450 } }"
              class="h-14 w-14 rounded-lg border border-divider-light bg-slate-50 dark:border-divider-dark dark:bg-slate-800/50 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2"
            >
              <Icon name="heroicons:academic-cap-20-solid" class="h-6 w-6 text-accent-400 animate-wiggle" />
            </div>
            <div 
              v-motion
              :initial="{ y: 20, opacity: 0, scale: 0.8 }"
              :visibleOnce="{ y: 0, opacity: 1, scale: 1, transition: { delay: 600, type: 'spring' } }"
              class="h-16 w-16 rounded-lg border-2 border-accent-400 bg-accent-400/10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-110"
            >
              <Icon name="heroicons:rocket-launch-20-solid" class="h-7 w-7 text-accent-500 animate-launch" />
            </div>
          </div>
          <p 
            v-motion
            :initial="{ y: 10, opacity: 0 }"
            :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 800 } }"
            class="mt-4 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors group-hover:text-accent-500"
          >
            Learn → Grow → Launch
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes wiggle {
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
}

@keyframes launch {
  0%, 100% {
    transform: translateY(0) rotate(-45deg);
  }
  50% {
    transform: translateY(-4px) rotate(-45deg);
  }
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.animate-launch {
  animation: launch 1.5s ease-in-out infinite;
  transform-origin: center;
}
</style>
