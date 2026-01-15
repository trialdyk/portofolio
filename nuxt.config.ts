// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/mdc',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@nuxtjs/sitemap'
  ],

  // Sitemap - auto-generates from pages
  sitemap: {},

  runtimeConfig: {
    public: {
      siteUrl: 'https://trialdyk.id'
    }
  },

  css: [
    '~/assets/css/base.css',
    '~/assets/css/components.css',
    '~/assets/css/content-styles.css'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
            dark: 'github-dark',
          }
        }
      }
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Tri Aldy Kurniawan · Fullstack Developer',
      titleTemplate: '%s | Tri Aldy Kurniawan',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Fullstack Developer, Mobile Developer, and System Analyst. I transform ideas into elegant digital solutions and love exploring the fascinating world of psychology.' },
        { name: 'author', content: 'Tri Aldy Kurniawan' },
        { name: 'keywords', content: 'Tri Aldy Kurniawan, Fullstack Developer, Mobile Developer, System Analyst, Laravel, Vue.js, Nuxt.js, Golang, Flutter, Web Developer Indonesia, Software Engineer' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://trialdyk.id' },
        { property: 'og:title', content: 'Tri Aldy Kurniawan · Fullstack Developer' },
        { property: 'og:description', content: 'Fullstack Developer, Mobile Developer, and System Analyst. I transform ideas into elegant digital solutions and love exploring the fascinating world of psychology.' },
        { property: 'og:image', content: 'https://trialdyk.id/og-image.png' },
        { property: 'og:site_name', content: 'Tri Aldy Kurniawan' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://trialdyk.id' },
        { name: 'twitter:title', content: 'Tri Aldy Kurniawan · Fullstack Developer' },
        { name: 'twitter:description', content: 'Fullstack Developer, Mobile Developer, and System Analyst. I transform ideas into elegant digital solutions.' },
        { name: 'twitter:image', content: 'https://trialdyk.id/og-image.png' },
        { name: 'twitter:creator', content: '@trialdykurniawan' },
        
        // Additional SEO
        { name: 'theme-color', content: '#8b5cf6' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'msapplication-TileColor', content: '#8b5cf6' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Robots
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://trialdyk.id' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap' 
        }
      ],
      script: [
        // JSON-LD Structured Data
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Tri Aldy Kurniawan',
            url: 'https://trialdyk.id',
            jobTitle: 'Fullstack Developer',
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Politeknik Negeri Malang'
            },
            knowsAbout: ['Web Development', 'Mobile Development', 'System Analysis', 'Laravel', 'Vue.js', 'Nuxt.js', 'Golang', 'Flutter'],
            sameAs: [
              'https://github.com/trialdyk',
              'https://linkedin.com/in/trialdyk'
            ]
          })
        }
      ]
    }
  }
})
