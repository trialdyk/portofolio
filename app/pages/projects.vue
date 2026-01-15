<script setup lang="ts">
import { projectsConfig } from '~/config/projects'
import clsx from 'clsx'

useSeoMeta({
  title: projectsConfig.meta.title,
  description: projectsConfig.meta.description
})

// Filter state
const selectedType = ref<string>('all')
const selectedTech = ref<string>('all')
const currentPage = ref(1)
const itemsPerPage = 6

// Get unique types and technologies
const types = ['all', 'freelance', 'fulltime', 'internship', 'personal']
const technologies = computed(() => {
  const techs = new Set<string>()
  projectsConfig.projects.forEach(p => p.technologies.forEach(t => techs.add(t)))
  return ['all', ...Array.from(techs).sort()]
})

// Filtered projects
const filteredProjects = computed(() => {
  return projectsConfig.projects.filter(project => {
    const typeMatch = selectedType.value === 'all' || project.type === selectedType.value
    const techMatch = selectedTech.value === 'all' || project.technologies.includes(selectedTech.value)
    return typeMatch && techMatch
  })
})

// Pagination
const totalPages = computed(() => Math.ceil(filteredProjects.value.length / itemsPerPage))
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProjects.value.slice(start, start + itemsPerPage)
})

// Reset page when filters change
watch([selectedType, selectedTech], () => {
  currentPage.value = 1
})

// Tech icon mapping (VSCode icons)
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, string> = {
    'Laravel': 'logos:laravel',
    'Vue.js': 'vscode-icons:file-type-vue',
    'Vue': 'vscode-icons:file-type-vue',
    'Nuxt.js': 'vscode-icons:file-type-nuxt',
    'Next.js': 'logos:nextjs-icon',
    'JavaScript': 'vscode-icons:file-type-js-official',
    'TypeScript': 'vscode-icons:file-type-typescript-official',
    'Golang': 'vscode-icons:file-type-go',
    'PHP': 'vscode-icons:file-type-php',
    'MySQL': 'vscode-icons:file-type-mysql',
    'PostgreSQL': 'vscode-icons:file-type-pgsql',
    'Flutter': 'vscode-icons:file-type-flutter',
    'React': 'vscode-icons:file-type-reactjs',
    'Inertia.js': 'simple-icons:inertia',
    'TailwindCSS': 'vscode-icons:file-type-tailwind',
    'Node.js': 'vscode-icons:file-type-node',
  }
  return iconMap[tech] || 'vscode-icons:file-type-default'
}

const getTypeStyle = (type: string) => {
  switch (type) {
    case 'freelance':
      return {
        bg: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        text: 'text-white',
        icon: 'heroicons:briefcase-solid'
      }
    case 'fulltime':
      return {
        bg: 'bg-gradient-to-r from-blue-500 to-indigo-500',
        text: 'text-white',
        icon: 'heroicons:building-office-2-solid'
      }
    case 'internship':
      return {
        bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
        text: 'text-white',
        icon: 'heroicons:academic-cap-solid'
      }
    case 'personal':
      return {
        bg: 'bg-gradient-to-r from-orange-500 to-amber-500',
        text: 'text-white',
        icon: 'heroicons:sparkles-solid'
      }
    default:
      return {
        bg: 'bg-slate-500',
        text: 'text-white',
        icon: 'heroicons:folder-solid'
      }
  }
}

const getTypeLabel = (type: string) => {
  return type.charAt(0).toUpperCase() + type.slice(1)
}

// Placeholder gradient colors
const placeholderGradients = [
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-amber-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-blue-500',
]

const getProjectGradient = (index: number) => {
  return placeholderGradients[index % placeholderGradients.length]
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <header class="background-grid background-grid--fade-out pb-10 pt-32 lg:pb-14 lg:pt-40">
      <div class="content-wrapper">
        <div class="max-w-3xl">
          <div class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 lg:mb-4">
            {{ projectsConfig.meta.caption }}
          </div>
          <h1 class="text-2xl font-extrabold text-slate-700 dark:text-slate-300 md:text-4xl">
            {{ projectsConfig.meta.title }}
          </h1>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            {{ projectsConfig.meta.description }}
          </p>
        </div>
      </div>
    </header>

    <!-- Filters -->
    <div class="content-wrapper pb-12">
      <div class="flex flex-wrap gap-6">
        <!-- Type Filter -->
        <div class="flex flex-wrap items-center gap-3">
          <span class="text-sm font-semibold text-slate-600 dark:text-slate-400">Type:</span>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="type in types"
              :key="type"
              @click="selectedType = type"
              :class="clsx(
                'flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
                selectedType === type 
                  ? [getTypeStyle(type).bg, getTypeStyle(type).text, 'shadow-lg scale-105'] 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
              )"
            >
              <Icon v-if="type !== 'all'" :name="getTypeStyle(type).icon" class="h-4 w-4" />
              {{ type === 'all' ? 'All' : getTypeLabel(type) }}
            </button>
          </div>
        </div>

        <!-- Tech Filter -->
        <div class="flex flex-wrap items-center gap-3">
          <span class="text-sm font-semibold text-slate-600 dark:text-slate-400">Tech:</span>
          <select
            v-model="selectedTech"
            class="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <option v-for="tech in technologies" :key="tech" :value="tech">
              {{ tech === 'all' ? 'All Technologies' : tech }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="content-wrapper pb-20">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in paginatedProjects"
          :key="project.title"
          :class="clsx(
            'group relative overflow-hidden rounded-2xl border border-slate-200 bg-white',
            'transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
            'dark:border-slate-700 dark:bg-slate-900'
          )"
        >
          <!-- Thumbnail - 16:9 with gradient placeholder -->
          <div class="relative aspect-video overflow-hidden">
            <!-- Gradient Placeholder -->
            <div 
              v-if="!project.image"
              :class="clsx(
                'absolute inset-0 bg-gradient-to-br',
                getProjectGradient(index)
              )"
            >
              <!-- Code pattern overlay -->
              <div class="absolute inset-0 opacity-20">
                <div class="flex h-full flex-col justify-center gap-2 p-6">
                  <div class="h-2 w-3/4 rounded bg-white/40"></div>
                  <div class="h-2 w-1/2 rounded bg-white/40 ml-4"></div>
                  <div class="h-2 w-2/3 rounded bg-white/40 ml-4"></div>
                  <div class="h-2 w-1/3 rounded bg-white/40"></div>
                  <div class="h-2 w-1/2 rounded bg-white/40 ml-8"></div>
                </div>
              </div>
              <!-- Project title on gradient -->
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-2xl font-bold text-white/90 text-center px-4">{{ project.title }}</span>
              </div>
            </div>
            
            <!-- Actual image if available -->
            <img 
              v-else
              :src="project.image" 
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <!-- Type Badge - Floating -->
            <div class="absolute left-3 top-3">
              <span 
                :class="clsx(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow-lg',
                  getTypeStyle(project.type).bg,
                  getTypeStyle(project.type).text
                )"
              >
                <Icon :name="getTypeStyle(project.type).icon" class="h-3 w-3" />
                {{ getTypeLabel(project.type) }}
              </span>
            </div>

            <!-- Visit Website Icon - Top Right -->
            <a 
              v-if="project.link"
              :href="project.link" 
              target="_blank"
              rel="noopener noreferrer"
              class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:bg-slate-800"
              title="Visit Website"
            >
              <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="h-4 w-4" />
            </a>

            <!-- Category Badge -->
            <div class="absolute bottom-3 left-3">
              <span class="rounded-lg bg-white/90 px-2 py-0.5 text-xs font-medium text-slate-700 backdrop-blur-sm dark:bg-slate-900/90 dark:text-slate-300">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <!-- Title -->
            <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Technologies with Icons -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              >
                <Icon :name="getTechIcon(tech)" class="h-4 w-4" />
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-12 flex items-center justify-center gap-2">
        <button
          @click="currentPage = Math.max(1, currentPage - 1)"
          :disabled="currentPage === 1"
          :class="clsx(
            'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
            currentPage === 1 
              ? 'cursor-not-allowed text-slate-300 dark:text-slate-600' 
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
          )"
        >
          <Icon name="heroicons:chevron-left-20-solid" class="h-5 w-5" />
        </button>

        <div class="flex gap-1">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="clsx(
              'flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all',
              currentPage === page 
                ? 'bg-accent-500 text-white shadow-lg' 
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            )"
          >
            {{ page }}
          </button>
        </div>

        <button
          @click="currentPage = Math.min(totalPages, currentPage + 1)"
          :disabled="currentPage === totalPages"
          :class="clsx(
            'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
            currentPage === totalPages 
              ? 'cursor-not-allowed text-slate-300 dark:text-slate-600' 
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
          )"
        >
          <Icon name="heroicons:chevron-right-20-solid" class="h-5 w-5" />
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="!filteredProjects.length" class="py-16 text-center">
        <Icon name="heroicons:folder-open" class="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600" />
        <p class="mt-4 text-slate-500 dark:text-slate-400">No projects found with the selected filters.</p>
        <button
          @click="selectedType = 'all'; selectedTech = 'all'"
          class="mt-4 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400"
        >
          Clear filters
        </button>
      </div>
    </div>
  </div>
</template>
