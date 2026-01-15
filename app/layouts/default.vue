<template>
  <div class="flex flex-col min-h-full font-sans">
    <TheNavigation />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
