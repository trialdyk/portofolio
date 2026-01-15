<script setup lang="ts">
interface Reactions {
  '😲': number
  '😊': number
  '😢': number
  '👍': number
}

type EmojiKey = keyof Reactions

const props = defineProps<{
  slug: string
}>()

const reactions = ref<Reactions>({
  '😲': 0,
  '😊': 0,
  '😢': 0,
  '👍': 0
})

const isLoading = ref(true)
const clickedEmoji = ref<EmojiKey | null>(null)

const emojis: { key: EmojiKey; label: string }[] = [
  { key: '😲', label: 'Kaget' },
  { key: '😊', label: 'Senang' },
  { key: '😢', label: 'Sedih' },
  { key: '👍', label: 'Mantap' }
]

// Fetch reactions on mount
onMounted(async () => {
  try {
    const { data } = await useFetch('/api/blog/reactions', {
      query: { slug: props.slug }
    })
    if (data.value?.reactions) {
      reactions.value = data.value.reactions
    }
  } catch (error) {
    console.error('Failed to fetch reactions:', error)
  } finally {
    isLoading.value = false
  }
})

const addReaction = async (emoji: EmojiKey) => {
  // Prevent spam
  if (clickedEmoji.value) return
  
  clickedEmoji.value = emoji
  
  // Optimistic update
  reactions.value[emoji]++
  
  try {
    await $fetch('/api/blog/reactions', {
      method: 'POST',
      body: { slug: props.slug, emoji }
    })
  } catch (error) {
    // Revert on error
    reactions.value[emoji]--
    console.error('Failed to add reaction:', error)
  }
  
  // Allow clicking again after 2 seconds
  setTimeout(() => {
    clickedEmoji.value = null
  }, 2000)
}
</script>

<template>
  <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
    <h4 class="mb-4 text-center text-sm font-semibold text-slate-700 dark:text-slate-300">
      Bagaimana menurutmu tentang artikel ini?
    </h4>
    
    <div class="flex justify-center gap-3">
      <button
        v-for="emoji in emojis"
        :key="emoji.key"
        @click="addReaction(emoji.key)"
        :disabled="clickedEmoji !== null"
        class="group flex flex-col items-center gap-1 rounded-lg px-4 py-3 transition-all hover:bg-slate-100 disabled:cursor-not-allowed dark:hover:bg-slate-700/50"
        :class="clickedEmoji === emoji.key ? 'scale-110' : ''"
      >
        <span class="text-2xl transition-transform group-hover:scale-125">
          {{ emoji.key }}
        </span>
        <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
          {{ reactions[emoji.key] }}
        </span>
      </button>
    </div>
    
    <p v-if="clickedEmoji" class="mt-3 text-center text-xs text-accent-600 dark:text-accent-400">
      Terima kasih atas reaksinya! 🙏
    </p>
  </div>
</template>
