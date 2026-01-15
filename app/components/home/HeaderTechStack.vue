<script setup lang="ts">
import { homeConfig } from '~/config/home'
</script>

<template>
  <div
    v-motion
    :initial="{ y: 16, opacity: 0 }"
    :enter="{ y: 0, opacity: 1, transition: { delay: 600 } }"
    class="relative"
  >
    <!-- Sparkle decorations -->
    <div class="sparkle-container">
      <span class="sparkle sparkle-1" />
      <span class="sparkle sparkle-2" />
      <span class="sparkle sparkle-3" />
    </div>

    <p class="mb-2.5 text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
      <span class="inline-block animate-pulse">✨</span>
      current favorite tech stack/tools:
    </p>
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="(stack, index) in homeConfig.techStack"
        :key="stack.name"
        class="tech-item group relative flex h-9 items-center gap-2 rounded-xl border border-divider-light bg-white px-3 text-[13px] font-semibold text-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-accent-300 dark:border-divider-dark dark:bg-slate-900 dark:text-slate-400 dark:hover:border-accent-700"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <!-- Glow effect on hover -->
        <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500/0 via-accent-500/10 to-accent-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <Icon
          :name="stack.icon"
          :class="['h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12', stack.iconColor]"
        />
        <span class="relative z-10">{{ stack.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Tech item entrance animation */
.tech-item {
  animation: fadeInUp 0.5s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Sparkle container */
.sparkle-container {
  position: absolute;
  inset: -20px;
  pointer-events: none;
  overflow: visible;
}

/* Sparkle base */
.sparkle {
  position: absolute;
  width: 8px;
  height: 8px;
}

.sparkle::before,
.sparkle::after {
  content: '';
  position: absolute;
  background: linear-gradient(135deg, #a855f7, #8b5cf6);
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

@keyframes sparkle-blink {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

.sparkle-1 {
  top: -10px;
  left: 20%;
  animation: sparkle-blink 2s ease-in-out infinite;
  animation-delay: 0s;
}

.sparkle-2 {
  top: 50%;
  right: -10px;
  animation: sparkle-blink 2s ease-in-out infinite;
  animation-delay: 0.7s;
}

.sparkle-3 {
  bottom: -10px;
  left: 60%;
  animation: sparkle-blink 2s ease-in-out infinite;
  animation-delay: 1.4s;
}
</style>
