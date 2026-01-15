<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper">
    <div class="flex flex-col gap-8 lg:flex-row-reverse lg:gap-16">
      <div class="flex-1">
        <h2 
          v-motion
          :initial="{ x: 20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 100 } }"
          class="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200 md:text-3xl"
        >
          Problem Solver
        </h2>
        <p 
          v-motion
          :initial="{ x: 20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 200 } }"
          class="text-slate-600 dark:text-slate-400"
        >
          Breaking down complex challenges into manageable solutions. 
          I love analyzing problems and finding the most efficient approach
          to solve them.
        </p>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="relative group cursor-pointer">
          <!-- Problem to Solution visualization -->
          <div class="flex items-center gap-4">
            <div 
              v-motion
              :initial="{ scale: 0, rotate: -180 }"
              :visibleOnce="{ scale: 1, rotate: 0, transition: { delay: 300, type: 'spring' } }"
              class="h-16 w-16 rounded-xl border-2 border-red-400 bg-red-400/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-red-400/20"
            >
              <Icon name="heroicons:puzzle-piece-20-solid" class="h-7 w-7 text-red-500 animate-wiggle" />
            </div>
            <div 
              v-motion
              :initial="{ scaleX: 0 }"
              :visibleOnce="{ scaleX: 1, transition: { delay: 500 } }"
              class="flex flex-col items-center origin-left"
            >
              <Icon name="heroicons:arrow-long-right-20-solid" class="h-8 w-12 text-accent-500 animate-pulse-x" />
            </div>
            <div 
              v-motion
              :initial="{ scale: 0, rotate: 180 }"
              :visibleOnce="{ scale: 1, rotate: 0, transition: { delay: 700, type: 'spring' } }"
              class="h-16 w-16 rounded-xl border-2 border-green-400 bg-green-400/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-green-400/20"
            >
              <Icon name="heroicons:check-circle-20-solid" class="h-7 w-7 text-green-500 group-hover:animate-bounce" />
            </div>
          </div>
          <p 
            v-motion
            :initial="{ y: 10, opacity: 0 }"
            :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 900 } }"
            class="mt-4 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors group-hover:text-accent-500"
          >
            Problem → Solution
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes wiggle {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@keyframes pulse-x {
  0%, 100% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(4px);
    opacity: 0.7;
  }
}

.animate-wiggle {
  animation: wiggle 2s ease-in-out infinite;
}

.animate-pulse-x {
  animation: pulse-x 1.5s ease-in-out infinite;
}
</style>
