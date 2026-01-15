<script setup lang="ts">
interface Spec {
  name: string
  detail: string
}

defineProps<{
  specs: Spec[]
}>()
</script>

<template>
  <table class="w-full text-sm mb-6">
    <tbody>
      <tr v-for="spec in specs" :key="spec.name" class="border-b border-slate-200 dark:border-slate-700">
        <td class="py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
          {{ spec.name }}
        </td>
        <td class="py-2 text-slate-600 dark:text-slate-400">
          {{ spec.detail }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
