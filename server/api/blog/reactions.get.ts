import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

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
    const reactions = await redis.get<Reactions>(`blog:reactions:${slug}`) || defaultReactions
    return { reactions }
  } catch (error) {
    console.warn('Upstash Redis not configured, returning default reactions')
    return { reactions: defaultReactions }
  }
})
