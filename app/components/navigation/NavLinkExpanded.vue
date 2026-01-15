<script setup lang="ts">
import clsx from 'clsx'

defineProps<{
  title: string
  items: Array<{ title: string; href: string }>
}>()
</script>

<template>
  <div :class="clsx('flex items-center')">
    <span :class="clsx('nav-link__separator px-1')">/</span>
    <span :class="clsx('nav-link nav-link--label')">
      {{ title }}
      <Icon name="heroicons:chevron-down-20-solid" class="h-4 w-4" />
    </span>
    <ul :class="clsx('flex items-center')">
      <li v-for="(item, index) in items" :key="item.href" :class="clsx('flex items-center')">
        <span v-if="index > 0" :class="clsx('nav-link__separator')">/</span>
        <NuxtLink :to="item.href" :class="clsx('nav-link')">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
