<script setup lang="ts">
import clsx from 'clsx'
import { contactConfig } from '~/config/contact'

const workLinks = [
  { title: 'Skills & Tools', href: '/skills-and-tools' },
  { title: 'Experience', href: '/experience' },
  { title: 'Contact', href: '/contact' },
]

const allLinks = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Blog', href: '/blog' },
  ...workLinks,
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Close menu on route change
const route = useRoute()
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<template>
  <header
    :class="clsx('fixed left-0 right-0 top-0 z-[1000]', 'fm:absolute')"
  >
    <div
      :class="clsx(
        'fixed inset-0 h-16',
        isScrolled && [
          'border-divider-light border-b bg-white/70 backdrop-blur',
          'dark:border-divider-dark dark:bg-slate-900/80',
        ],
        'fm:hidden'
      )"
    />
    <div :class="clsx('h-2', isScrolled && '-mt-2')" />
    <div :class="clsx('content-wrapper-max')">
      <div
        :class="clsx(
          'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
          'md:px-4'
        )"
      >
        <!-- Left side: Logo + Desktop Nav -->
        <nav :class="clsx('flex', 'md:gap-2')" data-accent="violet">
          <NavigationNavLogo href="/" title="Home" />
          <!-- Desktop Navigation -->
          <ul :class="clsx('hidden items-center md:flex', 'md:gap-1')">
            <li>
              <NavigationNavLink title="Projects" href="/projects" />
            </li>
            <li>
              <NavigationNavLink title="Blog" href="/blog" />
            </li>

            <li v-for="link in workLinks" :key="link.href">
              <NavigationNavLink :title="link.title" :href="link.href" />
            </li>
          </ul>
        </nav>
        
        <!-- Right side: Icons + Theme Toggle + Mobile Hamburger -->
        <ul :class="clsx('flex items-center')">
          <!-- Social icons (hidden on mobile) -->
          <li :class="clsx('hidden', 'sm:block')">
            <NavigationNavIcon
              :href="contactConfig.socialLinks.find(s => s.name === 'GitHub')?.url || 'https://github.com'"
              title="GitHub"
            >
              <Icon name="simple-icons:github" class="h-5 w-5" />
            </NavigationNavIcon>
          </li>
          <li :class="clsx('hidden', 'sm:block')">
            <div
              :class="clsx(
                'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
                'dark:bg-slate-700'
              )"
            />
          </li>
          <li :class="clsx('mr-2')">
            <ThemeToggle />
          </li>
          
          <!-- Mobile Hamburger Button -->
          <li class="md:hidden">
            <button
              @click="toggleMobileMenu"
              :class="clsx(
                'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
                'hover:bg-slate-100 dark:hover:bg-slate-800',
                isMobileMenuOpen && 'bg-slate-100 dark:bg-slate-800'
              )"
              aria-label="Toggle menu"
            >
              <Icon 
                :name="isMobileMenuOpen ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'" 
                class="h-5 w-5 transition-transform duration-200"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        @click="closeMobileMenu"
      />
    </Transition>
    
    <!-- Mobile Menu Drawer -->
    <Transition name="slide">
      <div 
        v-if="isMobileMenuOpen"
        :class="clsx(
          'fixed right-0 top-0 z-50 h-full w-72 md:hidden',
          'bg-white dark:bg-slate-900',
          'border-l border-divider-light dark:border-divider-dark',
          'shadow-2xl'
        )"
      >
        <!-- Drawer Header -->
        <div class="flex h-16 items-center justify-between border-b border-divider-light px-4 dark:border-divider-dark">
          <span class="font-bold text-slate-700 dark:text-slate-300">Menu</span>
          <button
            @click="closeMobileMenu"
            class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close menu"
          >
            <Icon name="heroicons:x-mark-20-solid" class="h-5 w-5" />
          </button>
        </div>
        
        <!-- Drawer Links -->
        <nav class="p-4">
          <ul class="space-y-1">
            <li v-for="link in allLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                @click="closeMobileMenu"
                :class="clsx(
                  'flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors',
                  'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                  'dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                )"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
          
          <!-- Social Links -->
          <div class="mt-6 border-t border-divider-light pt-6 dark:border-divider-dark">
            <p class="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Connect
            </p>
            <div class="flex gap-2 px-4">
              <a
                v-for="social in contactConfig.socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :class="clsx(
                  'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
                  'bg-slate-100 hover:bg-slate-200',
                  'dark:bg-slate-800 dark:hover:bg-slate-700'
                )"
                :title="social.name"
              >
                <Icon :name="social.icon" :class="['h-5 w-5', social.iconColor]" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
