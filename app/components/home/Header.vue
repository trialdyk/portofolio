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
