<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <NuxtLoadingIndicator color="--color-primary" />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
