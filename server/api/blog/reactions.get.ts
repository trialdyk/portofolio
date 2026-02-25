import { serverSupabaseClient } from '#supabase/server'

export interface Reactions {
  '😲': number
  '😊': number
  '😢': number
  '👍': number
}

const defaultReactions: Reactions = {
  '😲': 0,
  '😊': 0,
  '😢': 0,
  '👍': 0
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const slug = query.slug as string
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug is required'
    })
  }

  try {
    const supabase = await serverSupabaseClient<any>(event)
    const { data, error } = await supabase
      .from('blog_reactions')
      .select('emoji, count')
      .eq('slug', slug)
      
    if (error) throw error

    const reactions: Reactions = { ...defaultReactions }
    if (data) {
      (data as { emoji: string, count: number }[]).forEach(row => {
        if (row.emoji in reactions) {
          reactions[row.emoji as keyof Reactions] = row.count
        }
      })
    }
    
    return { reactions }
  } catch (error) {
    console.warn('Supabase error, returning default reactions:', error)
    return { reactions: defaultReactions }
  }
})
