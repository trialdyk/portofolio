import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

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
    throw createError({
      statusCode: 400,
      message: 'Slug is required'
    })
  }
  
  if (!emoji || !validEmojis.includes(emoji)) {
    throw createError({
      statusCode: 400,
      message: 'Valid emoji is required (😲, 😊, 😢, 👍)'
    })
  }

  try {
    const key = `blog:reactions:${slug}`
    let reactions = await redis.get<Reactions>(key) || { ...defaultReactions }
    
    // Increment the reaction count
    reactions[emoji] = (reactions[emoji] || 0) + 1
    
    await redis.set(key, reactions)
    
    return { reactions }
  } catch (error) {
    console.warn('Upstash Redis not configured, reactions not saved')
    return { reactions: defaultReactions }
  }
})
