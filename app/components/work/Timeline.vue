<script setup lang="ts">
import type { TimelineItem } from '~/config/experience'
import clsx from 'clsx'

defineProps<{
  items: TimelineItem[]
}>()

// Use accent color variants for consistency with theme
const getBadgeClasses = (type: TimelineItem['type']) => {
  switch (type) {
    case 'fulltime':
      return 'bg-accent-600 text-white'
    case 'freelance':
      return 'bg-accent-500/80 text-white'
    case 'education':
      return 'bg-accent-400/70 text-white'
    case 'internship':
      return 'bg-accent-500/60 text-white'
    default:
      return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
  }
}

const getBadgeLabel = (type: TimelineItem['type']) => {
  switch (type) {
    case 'fulltime':
      return 'Full-time'
    case 'freelance':
      return 'Freelance'
    case 'education':
      return 'Education'
    case 'internship':
      return 'Internship'
    default:
      return type
  }
}

const getDotColor = (type: TimelineItem['type']) => {
  switch (type) {
    case 'fulltime':
      return 'before:bg-accent-600'
    case 'freelance':
      return 'before:bg-accent-500'
    case 'education':
      return 'before:bg-accent-400'
    case 'internship':
      return 'before:bg-accent-500'
    default:
      return 'before:bg-slate-400'
  }
}
</script>

<template>
  <div class="timeline">
    <div 
      v-for="(item, index) in items" 
      :key="`${item.company}-${item.periodStart}`"
      :class="clsx(
        'timeline-item relative pb-12 pl-8',
        'before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full',
        'before:ring-4 before:ring-white before:dark:ring-slate-900',
        getDotColor(item.type),
        index !== items.length - 1 && [
          'after:absolute after:left-[5px] after:top-5 after:h-full after:w-0.5',
          'after:bg-gradient-to-b after:from-accent-300 after:to-transparent',
          'after:dark:from-accent-700'
        ]
      )"
    >
      <!-- Header -->
      <div class="mb-3">
        <div class="flex flex-wrap items-baseline gap-2">
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-200">
            {{ item.company }}
          </h3>
          <span
            :class="clsx(
              'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
              getBadgeClasses(item.type)
            )"
          >
            <Icon 
              v-if="item.type === 'education'" 
              name="heroicons:academic-cap-20-solid" 
              class="h-3 w-3" 
            />
            <Icon 
              v-else-if="item.type === 'fulltime'" 
              name="heroicons:building-office-2-20-solid" 
              class="h-3 w-3" 
            />
            <Icon 
              v-else-if="item.type === 'internship'" 
              name="heroicons:building-library-20-solid" 
              class="h-3 w-3" 
            />
            <Icon 
              v-else 
              name="heroicons:briefcase-20-solid" 
              class="h-3 w-3" 
            />
            {{ getBadgeLabel(item.type) }}
          </span>
        </div>
        <div class="mt-1 flex flex-wrap items-center gap-2 text-sm">
          <span class="font-medium text-slate-700 dark:text-slate-300">
            {{ item.role }}
          </span>
          <span class="text-slate-400">•</span>
          <span class="text-slate-500 dark:text-slate-500">
            {{ item.period }}
          </span>
        </div>
      </div>

      <!-- Description -->
      <p class="mb-3 text-slate-600 dark:text-slate-400">
        {{ item.description }}
      </p>

      <!-- Tasks - Simple list without gray boxes -->
      <ul class="list-none space-y-1.5">
        <li 
          v-for="task in item.tasks" 
          :key="task"
          class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
        >
          <Icon 
            name="heroicons:check-20-solid" 
            class="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
          />
          <span>{{ task }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.timeline-item::before {
  content: '';
}

.timeline-item::after {
  content: '';
}
</style>
