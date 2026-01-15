import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

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
    const views = await redis.get<number>(`blog:views:${slug}`) || 0
    return { views }
  } catch (error) {
    console.warn('Upstash Redis not configured, returning 0 views')
    return { views: 0 }
  }
})
