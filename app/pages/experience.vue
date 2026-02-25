<script setup lang="ts">
import { experienceConfig } from '~/config/experience'
import clsx from 'clsx'

useSeoMeta({
  title: experienceConfig.meta.title,
  description: experienceConfig.meta.description
})

// Separate by type
const freelanceItems = experienceConfig.timeline.filter(item => item.type === 'freelance')
const fulltimeItems = experienceConfig.timeline.filter(item => item.type === 'fulltime')
const educationItems = experienceConfig.education
const internshipItems = experienceConfig.internship

// Table of Contents
const tocItems = [
  { id: 'education', label: 'Education', icon: 'heroicons:academic-cap-20-solid' },
  { id: 'internship', label: 'Internship', icon: 'heroicons:building-library-20-solid' },
  { id: 'freelance', label: 'Freelance', icon: 'heroicons:briefcase-20-solid' },
  { id: 'fulltime', label: 'Full-time Work', icon: 'heroicons:building-office-2-20-solid' },
]

// Active section tracking
const activeSection = ref('education')

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Intersection Observer for active section
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { 
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0 
    }
  )

  tocItems.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) observer.observe(element)
  })

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div class="relative">
    <!-- Sticky TOC Sidebar - Desktop (positioned absolute right) -->
    <aside class="hidden lg:block fixed right-[max(2rem,calc((100vw-1200px)/2+1rem))] top-32 w-56 z-50">
      <div 
        :class="clsx(
          'rounded-xl border border-slate-200 bg-white/95 backdrop-blur-sm p-4',
          'dark:border-slate-700 dark:bg-slate-900/95',
          'shadow-lg'
        )"
      >
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
          On this page
        </h3>
        <nav class="space-y-1">
          <button 
            v-for="item in tocItems" 
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="clsx(
              'group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium',
              'transition-all duration-200',
              activeSection === item.id ? [
                'bg-accent-50 text-accent-700',
                'dark:bg-accent-900/30 dark:text-accent-400'
              ] : [
                'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                'dark:text-slate-400 dark:hover:bg-slate-700/50 dark:hover:text-slate-200'
              ]
            )"
          >
            <span 
              :class="clsx(
                'flex h-7 w-7 items-center justify-center rounded-lg',
                'transition-colors',
                activeSection === item.id ? [
                  'bg-accent-100 dark:bg-accent-800/50'
                ] : [
                  'bg-slate-100 group-hover:bg-slate-200',
                  'dark:bg-slate-700 dark:group-hover:bg-slate-600'
                ]
              )"
            >
              <Icon 
                :name="item.icon" 
                :class="clsx(
                  'h-3.5 w-3.5',
                  activeSection === item.id ? 'text-accent-600 dark:text-accent-400' : 'text-slate-500 dark:text-slate-400'
                )" 
              />
            </span>
            {{ item.label }}
            <span 
              v-if="activeSection === item.id"
              class="ml-auto h-1.5 w-1.5 rounded-full bg-accent-500"
            />
          </button>
        </nav>
      </div>
    </aside>

    <!-- Page Header -->
    <header class="background-grid background-grid--fade-out pb-10 pt-32 lg:pb-14 lg:pt-40">
      <div class="content-wrapper">
        <div class="max-w-3xl">
          <div class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 lg:mb-4">
            {{ experienceConfig.meta.caption }}
          </div>
          <h1 class="text-2xl font-extrabold text-slate-700 dark:text-slate-300 md:text-4xl">
            {{ experienceConfig.meta.title }}
          </h1>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            {{ experienceConfig.meta.description }}
          </p>
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="pb-20" id="page-content">
      <div class="content-wrapper">
        <div class="page-content max-w-3xl">
          <p class="mb-8">
            I started my professional career as a web developer around 2016. In 2021, I resigned from my job 
            to focus on completing college matters while taking on some freelance projects.
          </p>

          <!-- Interactive Story Prompt Banner -->
          <NuxtLink 
            to="/journey"
            class="group relative block w-full p-6 sm:p-8 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(var(--color-primary-500),0.15)] dark:hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.15)] mb-12"
          >
            <!-- Background effects -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 dark:from-accent-900/30 via-transparent dark:via-slate-900 to-transparent dark:to-black transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-accent-600/10 dark:bg-accent-600/20 blur-3xl rounded-full group-hover:bg-accent-500/20 dark:group-hover:bg-accent-500/30 transition-colors duration-500" />

            <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div class="flex items-center gap-5">
                <div class="flex-shrink-0 w-14 h-14 rounded-full bg-accent-500/10 dark:bg-accent-500/10 border border-accent-500/20 dark:border-accent-500/30 flex items-center justify-center text-accent-600 dark:text-accent-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <Icon name="heroicons:rocket-launch-solid" class="w-7 h-7" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">Want a more immersive look?</h3>
                  <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Explore my timeline through an interactive Space Journey ✨</p>
                </div>
              </div>
              
              <div class="flex-shrink-0 flex items-center justify-center px-5 py-2.5 rounded-full bg-accent-500/10 dark:bg-white/10 text-accent-700 dark:text-white font-medium group-hover:bg-accent-500/20 dark:group-hover:bg-white/20 backdrop-blur-md border border-accent-500/20 dark:border-white/10 transition-colors">
                Launch <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>

          <!-- Table of Contents - Mobile -->
          <div class="lg:hidden mt-6 mb-6">
            <div 
              :class="clsx(
                'rounded-xl border border-slate-200 bg-slate-50 p-4',
                'dark:border-slate-700 dark:bg-slate-800/50'
              )"
            >
              <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Jump to section
              </h3>
              <nav class="flex flex-wrap gap-2">
                <button 
                  v-for="item in tocItems" 
                  :key="item.id"
                  @click="scrollToSection(item.id)"
                  :class="clsx(
                    'flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium',
                    'transition-colors',
                    activeSection === item.id ? [
                      'bg-accent-500 text-white'
                    ] : [
                      'bg-slate-200 text-slate-700 hover:bg-slate-300',
                      'dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                    ]
                  )"
                >
                  <Icon :name="item.icon" class="h-4 w-4" />
                  {{ item.label }}
                </button>
              </nav>
            </div>
          </div>

          <!-- Education Section -->
          <section id="education" class="scroll-mt-24 mt-10">
            <h2>Education</h2>
            <WorkTimeline :items="educationItems" />
          </section>

          <!-- Internship Section -->
          <section id="internship" class="scroll-mt-24 mt-10">
            <h2>Internship</h2>
            <WorkTimeline :items="internshipItems" />
          </section>

          <!-- Freelance Section -->
          <section id="freelance" class="scroll-mt-24 mt-10">
            <h2>Freelance</h2>
            <WorkTimeline :items="freelanceItems" />
          </section>

          <!-- Full-time Section -->
          <section id="fulltime" class="scroll-mt-24 mt-10">
            <h2>Full-time Work</h2>
            <WorkTimeline :items="fulltimeItems" />
          </section>


        </div>
      </div>
    </div>
  </div>
</template>
