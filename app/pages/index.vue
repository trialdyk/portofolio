<script setup lang="ts">
import { homeConfig } from '~/config/home'

useSeoMeta({
  title: homeConfig.meta.title,
  description: homeConfig.meta.description,
})
</script>

<template>
  <div>
    <!-- Header Section -->
    <HomeHeader />
    

    <!-- Quote Section -->
    <div class="-mt-12 mb-12 md:mb-24 md:mt-0">
      <HomeQuote />
    </div>
    
    <!-- Clean & Intuitive Section -->
    <section class="mb-12 lg:mb-24">
      <HomeCleanIntuitive />
    </section>
    
    <!-- Detail Oriented Section -->
    <section class="mb-12 lg:mb-24">
      <HomeDetailOriented />
    </section>
    
    <!-- Pretty & Optimized Section -->
    <section class="mb-12 lg:mb-24">
      <HomePrettyOptimized />
    </section>

    <!-- Interactive Playground Section -->
    <HomeInteractivePlayground />

    <!-- Bento Grid Showcase (Navigation Hub) -->
    <section>
      <HomeShowcase />
    </section>
  </div>
</template>
