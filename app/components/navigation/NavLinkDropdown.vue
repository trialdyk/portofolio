<script setup lang="ts">
import clsx from 'clsx'

defineProps<{
  title: string
  items: Array<{ title: string; href: string }>
}>()

const isOpen = ref(false)
</script>

<template>
  <div class="relative">
    <button
      type="button"
      :class="clsx('nav-link nav-link--label')"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      {{ title }}
      <Icon name="heroicons:chevron-down-20-solid" class="h-4 w-4" />
    </button>
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-divider-light bg-white py-2 shadow-lg dark:border-divider-dark dark:bg-slate-900"
      >
        <NuxtLink
          v-for="item in items"
          :key="item.href"
          :to="item.href"
          class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          @click="isOpen = false"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>
