<script setup lang="ts">
import { skillsConfig } from '~/config/skills'
import clsx from 'clsx'

useSeoMeta({
  title: skillsConfig.meta.title,
  description: skillsConfig.meta.description
})

const yearsOfExperience = skillsConfig.yearsOfExperience()

// Table of Contents
const tocItems = [
  { id: 'roles', label: 'What I Do', icon: 'heroicons:briefcase-20-solid' },
  { id: 'tech-stack', label: 'Tech Stack', icon: 'heroicons:code-bracket-20-solid' },
  { id: 'detail', label: 'Detail & Summary', icon: 'heroicons:list-bullet-20-solid' },
]

// Active section tracking
const activeSection = ref('roles')

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
    <!-- Sticky TOC Sidebar - Desktop -->
    <aside class="hidden lg:block fixed right-[max(2rem,calc((100vw-1200px)/2+1rem))] top-32 w-48 z-50">
      <div 
        :class="clsx(
          'rounded-xl border border-slate-200 bg-white/95 backdrop-blur-sm p-3',
          'dark:border-slate-700 dark:bg-slate-900/95',
          'shadow-lg'
        )"
      >
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
          On this page
        </h3>
        <nav class="space-y-1">
          <button 
            v-for="item in tocItems" 
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="clsx(
              'group flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-medium',
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
            <Icon 
              :name="item.icon" 
              :class="clsx(
                'h-4 w-4',
                activeSection === item.id ? 'text-accent-600 dark:text-accent-400' : 'text-slate-400 dark:text-slate-500'
              )" 
            />
            {{ item.label }}
          </button>
        </nav>
      </div>
    </aside>

    <!-- Page Header -->
    <header class="background-grid background-grid--fade-out pb-10 pt-32 lg:pb-14 lg:pt-40">
      <div class="content-wrapper">
        <div class="max-w-3xl">
          <div class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 lg:mb-4">
            {{ skillsConfig.meta.caption }}
          </div>
          <h1 class="text-2xl font-extrabold text-slate-700 dark:text-slate-300 md:text-4xl">
            {{ skillsConfig.meta.title }}
          </h1>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            {{ skillsConfig.meta.description }}
          </p>
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="pb-20" id="page-content">
      <div class="content-wrapper">
        <div class="page-content max-w-3xl">
          <p>
            I started learning web development since <strong>high school (SMK)</strong>, 
            which means I've been in this field for about <strong>{{ yearsOfExperience }} years</strong>. 
            Throughout my journey, I've explored various technologies and roles in software development.
          </p>

          <!-- What I Do Section -->
          <section id="roles" class="scroll-mt-24">
            <h2 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">What I Do</h2>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              I'm a versatile developer with experience across multiple domains:
            </p>
            
            <!-- Role Cards with descriptions -->
            <div class="space-y-3">
              <div 
                v-for="role in skillsConfig.roles"
                :key="role.title"
                :class="clsx(
                  'flex items-center gap-4 rounded-lg p-4 border',
                  'bg-accent-50/50 border-accent-200/50',
                  'dark:bg-accent-900/10 dark:border-accent-800/30'
                )"
              >
                <span class="h-10 w-10 rounded-lg bg-accent-100 dark:bg-accent-800/50 flex items-center justify-center shrink-0">
                  <Icon :name="role.icon" class="h-5 w-5 text-accent-600 dark:text-accent-400" />
                </span>
                <div>
                  <h3 class="text-base font-bold text-accent-700 dark:text-accent-400 m-0">
                    {{ role.title }}
                  </h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400 m-0 mt-1">
                    {{ role.description }}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Tech Stack Section -->
          <section id="tech-stack" class="scroll-mt-24">
            <h2 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Tech Stack</h2>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              My primary technologies that I use for building applications:
            </p>
            
            <!-- Tech Cards -->
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="tech in skillsConfig.techCards"
                :key="tech.name"
                :class="clsx(
                  'rounded-lg p-3 border',
                  'bg-gradient-to-br border-slate-200',
                  tech.gradient,
                  'dark:border-slate-700'
                )"
              >
                <div class="flex items-center gap-2 mb-1">
                  <span :class="clsx('h-7 w-7 rounded-md flex items-center justify-center', tech.iconBg)">
                    <Icon :name="tech.icon" :class="clsx('h-4 w-4', tech.iconColor)" />
                  </span>
                  <h3 class="text-sm font-bold text-slate-900 dark:text-slate-200 m-0">{{ tech.name }}</h3>
                </div>
                <p class="text-slate-500 dark:text-slate-400 text-xs m-0 line-clamp-2">
                  {{ tech.description }}
                </p>
              </div>
            </div>
          </section>

          <!-- Detail and Summary Section -->
          <section id="detail" class="scroll-mt-24">
            <h2 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Detail and Summary</h2>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              I represent all data in labels to make it easier to read. 
              The <strong class="text-accent-600 dark:text-accent-400">underline indicator</strong> shows how often I use the related item.
            </p>
            
            <!-- Legend -->
            <div class="flex flex-wrap gap-3 mb-6">
              <div class="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span class="inline-block w-6 h-0.5 bg-accent-500 rounded-full"></span>
                <span>Frequently Used</span>
              </div>
              <div class="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span class="inline-block w-3 h-0.5 bg-accent-400 rounded-full"></span>
                <span>Occasionally</span>
              </div>
            </div>

            <!-- Programming Languages -->
            <h3 class="text-base font-semibold text-slate-700 dark:text-slate-300 mt-6 mb-2">Programming Languages</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Languages I use for writing code, from frontend to backend.
            </p>
            <div class="flex flex-wrap gap-2">
              <div 
                v-for="skill in skillsConfig.programmingLanguages" 
                :key="skill.name"
                :class="clsx(
                  'relative inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5',
                  'bg-slate-50 border-slate-200',
                  'dark:bg-slate-800/50 dark:border-slate-700'
                )"
              >
                <Icon v-if="skill.icon" :name="skill.icon" :class="clsx('h-4 w-4', skill.iconColor)" />
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ skill.name }}</span>
                <!-- Left-aligned underline indicator -->
                <span 
                  class="absolute bottom-0 left-2 h-0.5 rounded-full bg-accent-500"
                  :style="{ width: `calc(${skill.indicator}% - 16px)` }"
                />
              </div>
            </div>

            <!-- Frameworks -->
            <h3 class="text-base font-semibold text-slate-700 dark:text-slate-300 mt-6 mb-2">Frameworks & Libraries</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">
              My go-to frameworks for rapid development.
            </p>
            <div class="flex flex-wrap gap-2">
              <div 
                v-for="skill in skillsConfig.frameworks" 
                :key="skill.name"
                :class="clsx(
                  'relative inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5',
                  'bg-slate-50 border-slate-200',
                  'dark:bg-slate-800/50 dark:border-slate-700'
                )"
              >
                <Icon v-if="skill.icon" :name="skill.icon" :class="clsx('h-4 w-4', skill.iconColor)" />
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ skill.name }}</span>
                <span 
                  class="absolute bottom-0 left-2 h-0.5 rounded-full bg-accent-500"
                  :style="{ width: `calc(${skill.indicator}% - 16px)` }"
                />
              </div>
            </div>

            <!-- Databases -->
            <h3 class="text-base font-semibold text-slate-700 dark:text-slate-300 mt-6 mb-2">Databases</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Database technologies for data storage and management.
            </p>
            <div class="flex flex-wrap gap-2">
              <div 
                v-for="skill in skillsConfig.databases" 
                :key="skill.name"
                :class="clsx(
                  'relative inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5',
                  'bg-slate-50 border-slate-200',
                  'dark:bg-slate-800/50 dark:border-slate-700'
                )"
              >
                <Icon v-if="skill.icon" :name="skill.icon" :class="clsx('h-4 w-4', skill.iconColor)" />
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ skill.name }}</span>
                <span 
                  class="absolute bottom-0 left-2 h-0.5 rounded-full bg-accent-500"
                  :style="{ width: `calc(${skill.indicator}% - 16px)` }"
                />
              </div>
            </div>

            <!-- Tools -->
            <h3 class="text-base font-semibold text-slate-700 dark:text-slate-300 mt-6 mb-2">Softwares & Tools</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Development tools and software I use daily.
            </p>
            <div class="flex flex-wrap gap-2">
              <div 
                v-for="skill in skillsConfig.tools" 
                :key="skill.name"
                :class="clsx(
                  'relative inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5',
                  'bg-slate-50 border-slate-200',
                  'dark:bg-slate-800/50 dark:border-slate-700'
                )"
              >
                <Icon v-if="skill.icon" :name="skill.icon" :class="clsx('h-4 w-4', skill.iconColor)" />
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ skill.name }}</span>
                <span 
                  class="absolute bottom-0 left-2 h-0.5 rounded-full bg-accent-500"
                  :style="{ width: `calc(${skill.indicator}% - 16px)` }"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
