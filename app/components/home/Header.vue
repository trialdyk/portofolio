<script setup lang="ts">
import { homeConfig } from '~/config/home'
</script>

<template>
  <header
    id="page-header"
    class="background-grid background-grid--fade-out pb-20 pt-36 lg:pb-28 lg:pt-52 relative overflow-hidden"
  >
    <!-- Animated Grid Effects -->
    <HomeAnimatedGrid />
    <div class="content-wrapper">
      <div class="relative">
        <div class="relative z-10">
          <!-- Available for Work Badge (controlled via config) -->
          <div v-if="homeConfig.hero.availableForWork" class="mb-4 md:mb-6 flex justify-center md:justify-start">
            <div class="freelance-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm dark:shadow-lg">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500/60 dark:bg-teal-400/60 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500 dark:bg-teal-400"></span>
              </span>
              <span>Available for Freelance</span>
            </div>
          </div>
          <HomeHeaderTitle />
        </div>
        <div class="mt-6 md:mt-8">
          <HomeHeaderCta />
        </div>
        <!-- Mobile profile photo (visible only on < lg) -->
        <div class="mt-8 flex justify-center lg:hidden">
          <div class="relative h-52 w-52 sm:h-64 sm:w-64">
            <div class="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent-500/20 to-violet-500/10 animate-pulse" style="animation-duration: 3s;" />
            <div class="absolute inset-2 overflow-hidden rounded-[2rem] border border-slate-200/50 shadow-xl dark:border-slate-700/50">
              <img src="/profile.png" alt="Profile Avatar" class="h-full w-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        <div class="mt-20 lg:mt-36">
          <HomeHeaderTechStack />
        </div>
        <div
          class="pointer-events-none absolute -top-8 lg:-top-16 right-0 z-0 hidden select-none lg:block"
        >
          <HomeHeaderImage />
        </div>
      </div>
    </div>
  </header>
</template>
