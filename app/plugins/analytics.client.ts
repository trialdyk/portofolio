export default defineNuxtPlugin(async (nuxtApp) => {
  // Only execute this on the client side
  if (process.server) return;

  const supabase = useSupabaseClient<any>();
  const route = useRoute();

  // Helper to determine OS from user agent
  const getOS = (userAgent: string) => {
    if (userAgent.indexOf("Windows") !== -1 || userAgent.indexOf("Win") !== -1) return "Windows";
    if (userAgent.indexOf("Mac") !== -1) return "Mac OS";
    if (userAgent.indexOf("Linux") !== -1) return "Linux";
    if (userAgent.indexOf("Android") !== -1) return "Android";
    if (userAgent.indexOf("like Mac") !== -1) return "iOS";
    return "Unknown OS";
  };

  // Helper to determine basic Browser from user agent
  const getBrowser = (userAgent: string) => {
    if (userAgent.indexOf("Chrome") !== -1) return "Chrome";
    if (userAgent.indexOf("Safari") !== -1) return "Safari";
    if (userAgent.indexOf("Firefox") !== -1) return "Firefox";
    if (userAgent.indexOf("Edge") !== -1) return "Edge";
    return "Unknown Browser";
  };

  // Get or Create Session ID
  let sessionId = localStorage.getItem('visitor_session_id');
  if (!sessionId) {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      sessionId = crypto.randomUUID();
    } else {
      // Fallback for extremely old browsers
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 15);
    }
    localStorage.setItem('visitor_session_id', sessionId);
  }

  // Generic Tracker Function
  const trackPageView = async (currentPath: string) => {
    try {
      await supabase.from('page_views').insert([
        {
          page_path: currentPath,
          visitor_id: sessionId,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent
        }
      ]);
    } catch (e) {
      console.warn("Analytics tracking failed (likely ad-blocker or network error):", e);
    }
  };

  // Track initial page load
  await trackPageView(route.path);

  // Listen to route changes (client-side navigation)
  nuxtApp.hook('page:finish', async () => {
    // A small delay ensures the path has updated fully
    setTimeout(async () => {
      await trackPageView(route.path);
    }, 100);
  });
});
