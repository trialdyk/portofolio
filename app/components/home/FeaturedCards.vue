<script setup lang="ts">
import { homeConfig } from '~/config/home'

interface FeaturedCardProps {
  icon: string
  iconColor: string
  iconBg: string
  gradientFrom: string
  gradientTo: string
  title: string
  desc: string
}

const cards: FeaturedCardProps[] = [
  {
    icon: 'heroicons:globe-alt-20-solid',
    iconColor: 'text-white',
    iconBg: 'bg-gradient-to-br from-violet-400 to-violet-600',
    gradientFrom: 'from-violet-500/10',
    gradientTo: 'to-transparent',
    title: 'Full-Stack Solutions',
    desc: 'Building complete web applications from database to UI with seamless integration.',
  },
  {
    icon: 'heroicons:puzzle-piece-20-solid',
    iconColor: 'text-white',
    iconBg: 'bg-gradient-to-br from-rose-400 to-rose-600',
    gradientFrom: 'from-rose-500/10',
    gradientTo: 'to-transparent',
    title: 'Problem Solver',
    desc: 'Breaking down complex challenges into manageable and efficient solutions.',
  },
  {
    icon: 'heroicons:rocket-launch-20-solid',
    iconColor: 'text-white',
    iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
    gradientFrom: 'from-amber-500/10',
    gradientTo: 'to-transparent',
    title: 'Continuous Learning',
    desc: 'Always exploring new technologies and staying up with the evolving tech landscape.',
  },
]
</script>

<template>
  <div class="content-wrapper">
    <div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
      <div
        v-for="(card, index) in cards"
        :key="card.title"
        v-motion
        :initial="{ y: 24, opacity: 0 }"
        :enter="{ y: 0, opacity: 1, transition: { delay: 100 + index * 150 } }"
        class="featured-card group relative flex flex-1 flex-col items-center gap-4 overflow-hidden rounded-2xl border border-divider-light bg-white/80 p-6 text-center backdrop-blur-sm transition-all duration-500 dark:border-divider-dark dark:bg-slate-900/80"
      >
        <!-- Gradient overlay on hover -->
        <div 
          :class="[
            'absolute inset-0 bg-gradient-to-b opacity-0 transition-opacity duration-500 group-hover:opacity-100',
            card.gradientFrom,
            card.gradientTo
          ]"
        />
        
        <!-- Animated border glow -->
        <div class="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div class="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-transparent via-accent-500/50 to-transparent animate-border-flow" />
        </div>
        
        <!-- Content -->
        <div class="relative z-10">
          <!-- Icon with pulse ring -->
          <div class="relative mb-2">
            <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div :class="['absolute inset-[-4px] rounded-full animate-ping opacity-30', card.iconBg]" style="animation-duration: 2s;" />
            </div>
            <div 
              :class="[
                'relative h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500',
                'group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-6',
                card.iconBg
              ]"
            >
              <Icon 
                :name="card.icon" 
                :class="[
                  'h-6 w-6 transition-transform duration-500', 
                  card.iconColor,
                  index === 2 ? 'group-hover:animate-bounce' : ''
                ]" 
              />
            </div>
          </div>
        </div>
        
        <!-- Text -->
        <div class="relative z-10">
          <h3 class="mb-2 text-lg font-bold text-slate-700 dark:text-slate-300 transition-colors duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-400">
            {{ card.title }}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
            {{ card.desc }}
          </p>
        </div>
        
        <!-- Decorative corner elements -->
        <div class="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-accent-500/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <div class="absolute bottom-0 left-0 h-16 w-16 -translate-x-8 translate-y-8 rounded-full bg-gradient-to-tr from-accent-500/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.featured-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.15),
    0 0 20px -5px rgba(139, 92, 246, 0.1);
}

.dark .featured-card:hover {
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.5),
    0 0 30px -5px rgba(139, 92, 246, 0.2);
}

@keyframes border-flow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-border-flow {
  background-size: 200% 200%;
  animation: border-flow 3s ease infinite;
}
</style>
