<script setup lang="ts">
// Interactive Bento Grid Hub connecting to Experience, Projects, and Skills
</script>

<template>
  <div class="relative py-12 lg:py-24 overflow-hidden">
    <!-- Ambient glowing sphere behind the entire grid -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-500/5 blur-[150px] pointer-events-none"></div>

    <div class="content-wrapper">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-12 lg:mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Explore My World
        </h2>
        <p class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Dive deeper into my professional journey, the projects I've built, and the tools I use to bring ideas to life.
        </p>
      </div>

      <!-- The Bento Grid Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
        
        <!-- 1. Featured Projects (Wide Card - spanning 2 columns on desktop) -->
        <NuxtLink 
          to="/projects"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 100 } }"
          class="group relative md:col-span-2 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.15)] focus:outline-none focus:ring-2 focus:ring-accent-500 flex flex-col justify-between p-8"
        >
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              Featured Projects
            </h3>
            <p class="mt-2 text-slate-600 dark:text-slate-400 max-w-sm">
              Explore the web applications, APIs, and systems I've developed.
            </p>
          </div>

          <!-- Decorative Mac-style Window Mockup that tilts on hover -->
          <div class="absolute -bottom-16 -right-12 w-3/4 h-3/4 bg-slate-100 dark:bg-slate-800 rounded-tl-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-105 group-hover:-translate-x-4">
             <!-- Window Toolbar -->
             <div class="h-8 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-1.5 bg-slate-50 dark:bg-slate-800 rounded-tl-2xl">
                <div class="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                <div class="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                <div class="h-2.5 w-2.5 rounded-full bg-green-400"></div>
             </div>
             <!-- Mock UI Elements -->
             <div class="p-6 flex flex-col gap-4">
               <div class="h-4 w-1/3 rounded-full bg-slate-300/50 dark:bg-slate-600/50"></div>
               <div class="flex gap-4">
                 <div class="h-20 w-20 rounded-xl bg-accent-500/20"></div>
                 <div class="flex-1 flex flex-col gap-2">
                   <div class="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700"></div>
                   <div class="h-3 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                   <div class="h-3 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                 </div>
               </div>
             </div>
          </div>
          
          <div class="relative z-10 mt-auto flex items-center text-sm font-semibold text-accent-600 dark:text-accent-400">
            View Projects <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </NuxtLink>

        <!-- 2. Interactive Career Timeline (Tall Card) - Sky Blue -->
        <NuxtLink 
          to="/experience"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 200 } }"
          class="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.15)] focus:outline-none focus:ring-2 focus:ring-accent-500 p-8 flex flex-col"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none" />

          <!-- Timeline Decoration -->
          <div class="absolute right-8 top-12 bottom-12 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block">
            <!-- Animated Flowing Line on Hover -->
            <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[flow-down_2s_ease-in-out_infinite]" />
            <!-- Nodes -->
            <div class="absolute top-[10%] -left-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 group-hover:bg-accent-400 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all duration-300" />
            <div class="absolute top-[50%] -left-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 group-hover:bg-accent-400 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all duration-300 delay-100" />
            <div class="absolute top-[90%] -left-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 group-hover:bg-accent-400 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all duration-300 delay-200" />
          </div>

          <div class="relative z-10 pr-12">
            <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              Career Journey
            </h3>
            <p class="mt-2 text-slate-600 dark:text-slate-400">
              My professional path and the roles that shaped my expertise.
            </p>
          </div>

          <div class="relative z-10 mt-auto flex items-center text-sm font-semibold text-accent-600 dark:text-accent-400">
            View Experience <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </NuxtLink>

        <!-- 3. Tech Arsenal Orbit (Standard Card) - Emerald Green -->
        <NuxtLink 
          to="/skills-and-tools"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 300 } }"
          class="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.15)] focus:outline-none focus:ring-2 focus:ring-accent-500 p-8 flex flex-col"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none" />

          <!-- Orbit Decoration -->
          <div class="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border border-slate-200/50 dark:border-slate-700/50 group-hover:border-accent-500/30 transition-colors duration-500">
             <div class="w-full h-full relative animate-[spin_20s_linear_infinite] group-hover:animate-[spin_10s_linear_infinite]">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-800 shadow-md">
                   <Icon name="simple-icons:vuedotjs" class="h-6 w-6 text-[#4FC08D]" />
                </div>
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-800 shadow-md">
                   <Icon name="simple-icons:go" class="h-6 w-6 text-[#00ADD8]" />
                </div>
                <div class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-800 shadow-md">
                   <Icon name="simple-icons:postgresql" class="h-6 w-6 text-[#4169E1]" />
                </div>
                <div class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-800 shadow-md">
                   <Icon name="simple-icons:docker" class="h-6 w-6 text-[#2496ED]" />
                </div>
             </div>
             <!-- Central Core -->
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-accent-500/10 blur-xl group-hover:bg-accent-500/30 transition-colors duration-500" />
          </div>

          <div class="relative z-10 pr-12">
             <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              Tech Arsenal
            </h3>
            <p class="mt-2 text-slate-600 dark:text-slate-400">
              The languages, frameworks, and tools I use.
            </p>
          </div>

          <div class="relative z-10 mt-auto flex items-center text-sm font-semibold text-accent-600 dark:text-accent-400">
            View Skills <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </NuxtLink>

        <!-- 4. Let's Connect (Standard Card) - Rose/Pink -->
        <NuxtLink 
          to="/contact"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400 } }"
          class="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.15)] focus:outline-none focus:ring-2 focus:ring-accent-500 p-8 flex flex-col"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none" />
          
          <!-- Mail icon decoration -->
          <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-500"></div>
          <Icon name="heroicons:envelope" class="absolute right-6 bottom-6 h-16 w-16 text-accent-500/20 dark:text-accent-500/30 group-hover:text-accent-500/40 group-hover:scale-110 transition-all duration-500 -rotate-12" />

          <div class="relative z-10 pr-12">
             <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              Let's Connect
            </h3>
            <p class="mt-2 text-slate-600 dark:text-slate-400">
              Have a project in mind? Let's build it together.
            </p>
          </div>

          <div class="relative z-10 mt-auto flex items-center text-sm font-semibold text-accent-600 dark:text-accent-400">
            Say Hello <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </NuxtLink>

        <!-- 5. Articles & Blog (Standard Card) - Amber/Gold -->
        <NuxtLink 
          to="/blog"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 500 } }"
          class="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgb(var(--color-primary-500)/0.15)] focus:outline-none focus:ring-2 focus:ring-accent-500 p-8 flex flex-col"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none" />
          
          <!-- Document decoration -->
          <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-500"></div>
          <Icon name="heroicons:document-text" class="absolute right-8 bottom-8 h-12 w-12 text-accent-500/20 dark:text-accent-500/30 group-hover:text-accent-500/40 group-hover:-translate-y-2 transition-all duration-500 rotate-6" />

          <div class="relative z-10 pr-12">
             <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              Thoughts
            </h3>
            <p class="mt-2 text-slate-600 dark:text-slate-400">
              Articles and insights on modern web development.
            </p>
          </div>

          <div class="relative z-10 mt-auto flex items-center text-sm font-semibold text-accent-600 dark:text-accent-400">
            Read Blog <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes flow-down {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(300%); }
}
</style>
