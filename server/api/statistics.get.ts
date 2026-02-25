import { serverSupabaseServiceRole, serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  try {
    // Try using service role first to bypass RLS, fallback to normal client
    let supabase;
    try {
      supabase = await serverSupabaseServiceRole<any>(event)
    } catch (e) {
      supabase = await serverSupabaseClient<any>(event)
    }

    const { data, error } = await supabase
      .from('page_views')
      .select('page_path, visitor_id, user_agent')
      
    if (error) {
      throw error
    }

    if (!data || data.length === 0) {
      return {
        totalViews: 0,
        uniqueVisitors: 0,
        topPages: [],
        topBrowsers: [],
        topOS: []
      }
    }

    const views = data as { page_path: string, visitor_id: string, user_agent: string }[]

    // Calculate Unique Visitors
    const uniqueSessions = new Set(views.map(v => v.visitor_id))
    const uniqueVisitors = uniqueSessions.size
    const totalViews = views.length

    // Calculate Top Pages
    const pageCounts = views.reduce((acc: Record<string, number>, view) => {
      acc[view.page_path] = (acc[view.page_path] || 0) + 1
      return acc
    }, {})
    
    const topPages = Object.entries(pageCounts)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)

    // Helper to parse simple browser and OS from User Agent string
    const getBrowser = (ua: string) => {
      if (!ua) return 'Unknown';
      if (ua.includes('Chrome') && !ua.includes('Edge')) return 'Chrome';
      if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
      if (ua.includes('Firefox')) return 'Firefox';
      if (ua.includes('Edge') || ua.includes('Edg/')) return 'Edge';
      return 'Unknown';
    }

    const getOS = (ua: string) => {
      if (!ua) return 'Unknown';
      if (ua.includes('Windows') || ua.includes('Win')) return 'Windows';
      if (ua.includes('like Mac')) return 'iOS';
      if (ua.includes('Mac')) return 'Mac OS';
      if (ua.includes('Android')) return 'Android';
      if (ua.includes('Linux')) return 'Linux';
      return 'Unknown';
    }

    // Calculate Top Browsers
    const browserCounts = views.reduce((acc: Record<string, number>, view) => {
      const b = getBrowser(view.user_agent)
      acc[b] = (acc[b] || 0) + 1
      return acc
    }, {})
    
    const topBrowsers = Object.entries(browserCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)

    // Calculate Top OS
    const osCounts = views.reduce((acc: Record<string, number>, view) => {
      const o = getOS(view.user_agent)
      acc[o] = (acc[o] || 0) + 1
      return acc
    }, {})
    
    const topOS = Object.entries(osCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)

    return {
      totalViews,
      uniqueVisitors,
      topPages,
      topBrowsers,
      topOS
    }
  } catch (error: any) {
    console.error('API /statistics error:', error.message || error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch statistics'
    })
  }
})
