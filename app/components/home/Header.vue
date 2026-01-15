<script setup lang="ts">
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
          <!-- Available for Freelance Badge -->
          <div class="mb-4 md:mb-6 flex justify-center md:justify-start">
            <div class="freelance-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-sm font-medium text-slate-200 shadow-lg">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400/60 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
              </span>
              <span>Available for Freelance</span>
            </div>
          </div>
          <HomeHeaderTitle />
        </div>
        <div class="mt-6 md:mt-8">
          <HomeHeaderCta />
        </div>
        <div class="mt-20 lg:mt-36">
          <HomeHeaderTechStack />
        </div>
        <div
          class="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block"
        >
          <HomeHeaderImage />
        </div>
      </div>
    </div>
  </header>
</template>
