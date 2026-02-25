import { serverSupabaseClient } from '#supabase/server'

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
    const supabase = await serverSupabaseClient<any>(event)
    const { data, error } = await (supabase.rpc as any)('increment_blog_view', { base_slug: slug })
    
    if (error) throw error
    
    return { views: data }
  } catch (error) {
    console.warn('Supabase error, views not incremented:', error)
    return { views: 1 }
  }
})
