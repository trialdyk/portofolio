<script setup lang="ts">
// Detail Oriented — Bento Grid Section
</script>

<template>
  <div class="content-wrapper relative">
    <!-- Ambient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-500/8 blur-[150px] pointer-events-none" />

    <!-- Section Header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="relative z-10 mb-10 text-center"
    >
      <div class="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
        <span class="h-px w-10 rounded-full bg-accent-500/40" />
        <span>What I bring</span>
        <span class="h-px w-10 rounded-full bg-accent-500/40" />
      </div>
      <h2 class="mb-4 text-3xl font-extrabold text-slate-800 md:text-5xl dark:text-slate-100">
        Built to <span class="text-accent-500 dark:text-accent-400">deliver</span>
      </h2>
      <p class="mx-auto max-w-lg text-lg text-slate-600 dark:text-slate-400">
        Full-stack engineering, problem solving, and continuous growth — the pillars behind every project I ship.
      </p>
    </div>

    <div class="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">

      <!-- ═══ Card 01 · Problem Solver ═══ -->
      <div
        v-motion
        :initial="{ y: 30, opacity: 0 }"
        :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 100, duration: 600 } }"
        class="rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-900/60"
      >
        <div class="mb-5 flex items-start justify-between">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
            <Icon name="heroicons:sparkles" class="h-5 w-5" />
          </div>
          <span class="text-xs font-medium tracking-wider text-slate-400 dark:text-slate-500">A · 01</span>
        </div>

        <h3 class="mb-2 text-xl font-bold text-slate-800 dark:text-slate-100">
          Problem Solver
        </h3>
        <p class="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Breaking down complex challenges into manageable solutions.
          I love analyzing problems and finding the most efficient path.
        </p>

        <div class="mb-4 flex flex-wrap gap-2">
          <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            Analytical
          </span>
          <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            Algorithmic
          </span>
          <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            Systems
          </span>
        </div>

        <!-- Maze Visualization -->
        <div class="overflow-hidden rounded-xl border border-slate-200/40 bg-slate-50/20 dark:border-slate-700/20 dark:bg-slate-800/20">
          <div class="flex items-center justify-center">
            <HomeAnimatedMaze />
          </div>
        </div>
      </div>

      <!-- ═══ Card 02 · Continuous Learning ═══ -->
      <div
        v-motion
        :initial="{ y: 30, opacity: 0 }"
        :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 200, duration: 600 } }"
        class="rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-900/60"
      >
        <div class="mb-5 flex items-start justify-between">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
            <Icon name="heroicons:pencil" class="h-5 w-5" />
          </div>
          <span class="text-xs font-medium tracking-wider text-slate-400 dark:text-slate-500">A · 02</span>
        </div>

        <h3 class="mb-2 text-xl font-bold text-slate-800 dark:text-slate-100">
          Continuous Learning
        </h3>
        <p class="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Always exploring new technologies, frameworks, and best practices.
          Staying curious in an ever-shifting landscape.
        </p>

        <div class="mb-4 flex flex-wrap gap-2">
          <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            Curious
          </span>
          <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            Adaptable
          </span>
          <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            Self-Taught
          </span>
        </div>

        <!-- Core Visualization -->
        <div class="overflow-hidden rounded-xl border border-slate-200/40 bg-slate-50/20 dark:border-slate-700/20 dark:bg-slate-800/20">
          <div class="flex items-center justify-center">
            <HomeAnimatedCore />
          </div>
        </div>
      </div>

      <!-- ═══ Card 03 · Full-Stack Solutions (full width) ═══ -->
      <div
        v-motion
        :initial="{ y: 30, opacity: 0 }"
        :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 300, duration: 600 } }"
        class="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm lg:p-8 dark:border-slate-700/40 dark:bg-slate-900/60"
      >
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
          <!-- Left: Text content -->
          <div class="flex-1">
            <div class="mb-5 flex items-start justify-between lg:justify-start lg:gap-4">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <Icon name="heroicons:command-line" class="h-5 w-5" />
              </div>
              <span class="text-xs font-medium tracking-wider text-slate-400 lg:hidden dark:text-slate-500">A · 03</span>
            </div>

            <h3 class="mb-3 text-2xl font-bold text-slate-800 dark:text-slate-100">
              Full-Stack Solutions
            </h3>
            <p class="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Building complete web applications from the ground up
              — from database design to API development to beautiful frontend interfaces.
              Every layer works together seamlessly.
            </p>

            <!-- Tech badges -->
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                Vue.js
              </span>
              <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                Nuxt
              </span>
              <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                Golang
              </span>
              <span class="rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                PostgreSQL
              </span>
            </div>
          </div>

          <!-- Right: Tech Stack Rows -->
          <div class="flex-1 space-y-3">
            <div class="hidden items-center justify-end lg:flex">
              <span class="text-xs font-medium tracking-wider text-slate-400 dark:text-slate-500">A · 03</span>
            </div>

            <!-- Frontend -->
            <div class="flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50/30 px-4 py-3 dark:border-slate-700/30 dark:bg-slate-800/30">
              <div class="flex items-center gap-3">
                <span class="rounded-md bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                  Frontend
                </span>
                <span class="text-sm text-slate-500 dark:text-slate-400">Nuxt · Vue · Tailwind</span>
              </div>
              <span class="text-xs font-medium text-slate-400 dark:text-slate-500">UI</span>
            </div>

            <!-- Backend -->
            <div class="flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50/30 px-4 py-3 dark:border-slate-700/30 dark:bg-slate-800/30">
              <div class="flex items-center gap-3">
                <span class="rounded-md bg-sky-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400">
                  Backend
                </span>
                <span class="text-sm text-slate-500 dark:text-slate-400">Laravel · Go · REST/GraphQL</span>
              </div>
              <span class="text-xs font-medium text-slate-400 dark:text-slate-500">API</span>
            </div>

            <!-- Database -->
            <div class="flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50/30 px-4 py-3 dark:border-slate-700/30 dark:bg-slate-800/30">
              <div class="flex items-center gap-3">
                <span class="rounded-md bg-violet-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-500 dark:text-violet-400">
                  Database
                </span>
                <span class="text-sm text-slate-500 dark:text-slate-400">PostgreSQL · Redis · S3</span>
              </div>
              <span class="text-xs font-medium text-slate-400 dark:text-slate-500">DATA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
