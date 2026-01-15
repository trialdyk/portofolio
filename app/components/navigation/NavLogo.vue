<script setup lang="ts">
defineProps<{
  href?: string
  title: string
}>()
</script>

<template>
  <NuxtLink
    :to="href || '/'"
    :title="title"
    class="flex h-9 items-center justify-center gap-2 rounded-xl px-2 transition-transform hover:scale-105"
  >
    <div class="flex items-center gap-2">
      <!-- Inline SVG Logo - Terminal with A hint (Dynamic accent colors) -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        class="h-7 w-7"
        fill="none"
      >
        <!-- Terminal window frame -->
        <rect x="10" y="15" width="80" height="70" rx="8" stroke="currentColor" stroke-width="4" fill="none" class="text-accent-500"/>
        
        <!-- Terminal top bar -->
        <rect x="10" y="15" width="80" height="16" rx="8" class="fill-accent-500"/>
        <rect x="10" y="23" width="80" height="8" class="fill-accent-500"/>
        
        <!-- Window buttons -->
        <circle cx="22" cy="23" r="3" class="fill-accent-900"/>
        <circle cx="32" cy="23" r="3" class="fill-accent-900"/>
        <circle cx="42" cy="23" r="3" class="fill-accent-900"/>
        
        <!-- Terminal prompt > -->
        <path d="M25 50L38 60L25 70" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="text-accent-500"/>
        
        <!-- Cursor line -->
        <path d="M45 68H70" stroke="currentColor" stroke-width="4" stroke-linecap="round" class="text-accent-400"/>
        
        <!-- Subtle A shape -->
        <path d="M55 45L62 60L69 45" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-accent-400"/>
        <path d="M57 54H67" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="text-accent-400"/>
      </svg>
    </div>
  </NuxtLink>
</template>
