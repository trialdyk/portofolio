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
    <div class="mb-16 md:mb-24">
      <HomeQuote />
    </div>

    <!-- Bento Grid Section -->
    <section class="mb-16 lg:mb-28">
      <HomeDetailOriented />
    </section>

    <!-- Bento Grid Showcase (Navigation Hub) -->
    <section class="mb-16 lg:mb-28">
      <HomeShowcase />
    </section>

    <!-- Interactive Playground Section -->
    <HomeInteractivePlayground />
  </div>
</template>
