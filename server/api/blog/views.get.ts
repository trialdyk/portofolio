import { serverSupabaseClient } from '#supabase/server'

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
      .from('blog_views')
      .select('count')
      .eq('slug', slug)
      .single()
      
    // Ignore PGRST116 (No rows found) - just means 0 views
    if (error && error.code !== 'PGRST116') throw error
    
    return { views: data?.count || 0 }
  } catch (error) {
    console.warn('Supabase error, returning 0 views:', error)
    return { views: 0 }
  }
})
