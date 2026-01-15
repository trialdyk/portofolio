<script setup lang="ts">
import { homeConfig } from '~/config/home'

// Rotating text animation
const currentTitleIndex = ref(0)
const isAnimating = ref(false)

// Rotate titles every 3 seconds
onMounted(() => {
  setInterval(() => {
    isAnimating.value = true
    setTimeout(() => {
      currentTitleIndex.value = (currentTitleIndex.value + 1) % homeConfig.hero.titles.length
      isAnimating.value = false
    }, 300)
  }, 3000)
})

const currentTitle = computed(() => homeConfig.hero.titles[currentTitleIndex.value])
</script>

<template>
  <div>
    <div
      v-motion
      :initial="{ x: -32, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { delay: 100 } }"
      class="mb-1 flex items-center gap-1 text-2xl text-slate-600 md:mb-0 md:gap-2 md:text-4xl dark:text-slate-400"
    >
      {{ homeConfig.hero.greeting }}
      <div
        v-motion
        :initial="{ opacity: 0, y: 16, rotate: 30 }"
        :enter="{ opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', delay: 350 } }"
        class="animate-wave origin-bottom-right"
      >
        <img
          class="w-7 md:w-10"
          alt="Love-you Gesture"
          src="/assets/emojis/love-you-gesture.png"
          width="48"
          height="48"
        />
      </div>
    </div>
    <span class="text-slate-700 dark:text-slate-300">
      <span
        v-motion
        :initial="{ x: -32, opacity: 0 }"
        :enter="{ x: 0, opacity: 1, transition: { delay: 200 } }"
        class="mb-4 block text-[2rem] font-[1000] leading-none md:mb-6 md:text-6xl"
      >
        I'm {{ homeConfig.hero.name.first }} 
        <strong class="name-animated relative inline-block text-accent-600 dark:text-accent-500">
          {{ homeConfig.hero.name.highlighted }}
          <!-- Sparkles -->
          <span class="sparkle sparkle-1" />
          <span class="sparkle sparkle-2" />
          <span class="sparkle sparkle-3" />
        </strong>,
      </span>
      <h1
        v-motion
        :initial="{ x: -32, opacity: 0 }"
        :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }"
        class="block max-w-xl text-base text-slate-600 md:text-xl dark:text-slate-400"
      >
        <span class="lowercase">a </span>
        <strong 
          class="title-animated font-bold lowercase text-slate-700 dark:text-slate-300 inline-block"
          :class="isAnimating ? 'animate-slide-out' : 'animate-slide-in'"
        >
          {{ currentTitle }}
        </strong>
        <span>
           {{ homeConfig.hero.tagline }}
        </span>
      </h1>
    </span>
  </div>
</template>

<style scoped>
/* Waving hand animation */
@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30%, 50% {
    transform: rotate(14deg);
  }
  20%, 40% {
    transform: rotate(-8deg);
  }
  60% {
    transform: rotate(0deg);
  }
}

.animate-wave {
  animation: wave 2.5s ease-in-out infinite;
}

/* Name hover effect */
.name-animated {
  transition: all 0.3s ease;
}

.name-animated:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.5));
}

/* Sparkle effects */
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  pointer-events: none;
}

.sparkle::before,
.sparkle::after {
  content: '';
  position: absolute;
  background: #a855f7;
  border-radius: 2px;
}

.sparkle::before {
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  transform: translateY(-50%);
}

.sparkle::after {
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
}

@keyframes sparkle-anim {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(90deg);
  }
}

.sparkle-1 {
  top: -8px;
  right: -4px;
  animation: sparkle-anim 2s ease-in-out infinite;
  animation-delay: 0s;
}

.sparkle-2 {
  top: 50%;
  right: -12px;
  animation: sparkle-anim 2s ease-in-out infinite;
  animation-delay: 0.6s;
}

.sparkle-3 {
  bottom: -4px;
  right: 30%;
  animation: sparkle-anim 2s ease-in-out infinite;
  animation-delay: 1.2s;
}

/* Title slide animations */
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out forwards;
}

.animate-slide-out {
  animation: slide-out 0.3s ease-in forwards;
}
</style>
