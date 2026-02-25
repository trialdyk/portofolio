import { serverSupabaseClient } from '#supabase/server'

export interface Reactions {
  '😲': number
  '😊': number
  '😢': number
  '👍': number
}

type EmojiKey = keyof Reactions

const validEmojis: EmojiKey[] = ['😲', '😊', '😢', '👍']

const defaultReactions: Reactions = {
  '😲': 0,
  '😊': 0,
  '😢': 0,
  '👍': 0
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const slug = body.slug as string
  const emoji = body.emoji as EmojiKey
  
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Slug is required' })
  }
  
  if (!emoji || !validEmojis.includes(emoji)) {
    throw createError({ statusCode: 400, message: 'Valid emoji is required (😲, 😊, 😢, 👍)' })
  }

  try {
    const supabase = await serverSupabaseClient<any>(event)
    
    // 1. Increment this specific reaction using our Postgres function.
    // Casting to any to avoid strict TS type generator issues without a types file.
    const { error: rpcError } = await (supabase.rpc as any)('increment_blog_reaction', { 
      base_slug: slug, 
      base_emoji: emoji 
    })

    if (rpcError) throw rpcError
    
    // 2. Fetch the summary of ALL reactions for this slug so the UI updates
    const { data: allReactions, error } = await supabase
      .from('blog_reactions')
      .select('emoji, count')
      .eq('slug', slug)
      
    if (error) throw error

    const reactions: Reactions = { ...defaultReactions }
    if (allReactions) {
      (allReactions as { emoji: string, count: number }[]).forEach(row => {
        if (validEmojis.includes(row.emoji as EmojiKey)) {
          reactions[row.emoji as EmojiKey] = row.count
        }
      })
    }
    
    return { reactions }
  } catch (error) {
    console.warn('Supabase error, reactions not saved:', error)
    return { reactions: defaultReactions }
  }
})
