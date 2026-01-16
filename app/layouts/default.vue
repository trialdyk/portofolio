<template>
  <div class="flex flex-col min-h-full font-sans">
    <TheNavigation />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
    
    <!-- Easter Egg: Website Destroyer -->
    <EasterEggWebsiteDestroyer />
  </div>
</template>
