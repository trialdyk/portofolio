import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const slug = body.slug as string
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug is required'
    })
  }

  try {
    const views = await redis.incr(`blog:views:${slug}`)
    return { views }
  } catch (error) {
    console.warn('Upstash Redis not configured, views not incremented')
    return { views: 1 }
  }
})
