<script setup lang="ts">
// Logic Matrix (Problem Solver) — Pure SVG circuit board
</script>

<template>
  <div class="relative flex h-[350px] w-full max-w-sm items-center justify-center p-4">
    <!-- Ambient Background Glow -->
    <div class="absolute h-48 w-48 rounded-full bg-accent-500/10 opacity-40 blur-3xl animate-pulse" style="animation-duration: 5s;" />

    <!-- Main Container -->
    <div class="relative h-[280px] w-[280px] rounded-2xl border border-divider-light bg-slate-50/50 shadow-xl backdrop-blur-sm dark:border-divider-dark dark:bg-slate-900/50 overflow-hidden">

      <svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Soft glow for path -->
          <filter id="maze-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <!-- Stronger glow for nodes -->
          <filter id="maze-strong-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>

          <!-- Active path gradient -->
          <linearGradient id="maze-path-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#fb7185" />
            <stop offset="50%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#34d399" />
          </linearGradient>

          <!-- Solution path geometry (referenced by every drawer) -->
          <path id="maze-solution-path" d="M 12 75 L 25 75 L 25 55 L 45 55 L 45 35 L 65 35 L 65 55 L 80 55 L 80 28 L 88 28" fill="none" />

          <!-- Circuit dot pattern -->
          <pattern id="maze-dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="0.35" class="fill-slate-400/40 dark:fill-slate-500/40" />
          </pattern>

          <!-- Radial fade mask -->
          <radialGradient id="maze-fade" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stop-color="white" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <mask id="maze-fade-mask">
            <rect width="100" height="100" fill="url(#maze-fade)" />
          </mask>
        </defs>

        <!-- Background dot pattern -->
        <rect width="100" height="100" fill="url(#maze-dots)" mask="url(#maze-fade-mask)" />

        <!-- Decorative dead-end traces -->
        <g stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.55">
          <path d="M 5 20 L 18 20 L 18 32" />
          <path d="M 78 8 L 78 18 L 92 18" />
          <path d="M 5 90 L 16 90 L 16 80" />
          <path d="M 50 90 L 50 75 L 62 75 L 62 88" />
          <path d="M 92 70 L 84 70 L 84 80 L 92 80" stroke-dasharray="1.5 1.5" />
          <path d="M 18 48 L 30 48" stroke-dasharray="1.5 1.5" />
          <path d="M 68 75 L 78 75" stroke-dasharray="1.5 1.5" />
          <circle cx="18" cy="32" r="0.7" fill="currentColor" />
          <circle cx="92" cy="18" r="0.7" fill="currentColor" />
          <circle cx="16" cy="80" r="0.7" fill="currentColor" />
          <circle cx="62" cy="88" r="0.7" fill="currentColor" />
        </g>

        <!-- Solution path background track -->
        <use href="#maze-solution-path" class="stroke-slate-300/60 dark:stroke-slate-600/60" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Animated solution path (gradient stroke) -->
        <use href="#maze-solution-path" stroke="url(#maze-path-grad)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#maze-glow)" class="maze-draw" />

        <!-- Junction nodes -->
        <circle cx="25" cy="55" r="0.9" class="fill-slate-400 dark:fill-slate-500" />
        <circle cx="45" cy="35" r="0.9" class="fill-slate-400 dark:fill-slate-500" />
        <circle cx="65" cy="55" r="0.9" class="fill-slate-400 dark:fill-slate-500" />
        <circle cx="80" cy="55" r="0.9" class="fill-slate-400 dark:fill-slate-500" />

        <!-- Trailing particle (behind main packet) -->
        <circle r="0.7" fill="#a855f7" opacity="0">
          <animateMotion dur="3.5s" repeatCount="indefinite" begin="-0.15s">
            <mpath href="#maze-solution-path" />
          </animateMotion>
          <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.9;1" dur="3.5s" repeatCount="indefinite" />
        </circle>

        <!-- Main data packet -->
        <circle r="1.6" fill="white" filter="url(#maze-glow)" opacity="0">
          <animateMotion dur="3.5s" repeatCount="indefinite">
            <mpath href="#maze-solution-path" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="3.5s" repeatCount="indefinite" />
        </circle>

        <!-- Starting Node (Problem) -->
        <g>
          <circle cx="12" cy="75" r="4" class="fill-rose-400/20 maze-ping" />
          <circle cx="12" cy="75" r="3" class="fill-rose-400/35" />
          <circle cx="12" cy="75" r="2.4" class="fill-rose-400" filter="url(#maze-strong-glow)" />
          <circle cx="12" cy="75" r="1.1" class="fill-white" />
        </g>

        <!-- Ending Node (Solution) -->
        <g>
          <circle cx="88" cy="28" r="2" fill="none" class="stroke-emerald-400 maze-success-ring" stroke-width="1.2" />
          <circle cx="88" cy="28" r="3.2" class="fill-emerald-400/25" />
          <circle cx="88" cy="28" r="2.2" class="fill-emerald-400" filter="url(#maze-strong-glow)" />
          <circle cx="88" cy="28" r="1" class="fill-white" />
        </g>
      </svg>

      <!-- Floating labels -->
      <div class="absolute top-3 left-3 px-2 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-[9px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
        Problem
      </div>
      <div class="absolute top-3 right-3 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        Solved
      </div>
    </div>
  </div>
</template>

<style scoped>
.maze-draw {
  stroke-dasharray: 30 220;
  stroke-dashoffset: 250;
  animation: maze-trace 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes maze-trace {
  0% { stroke-dashoffset: 250; }
  100% { stroke-dashoffset: -30; }
}

.maze-success-ring {
  animation: maze-success 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  transform-origin: 88px 28px;
  transform-box: fill-box;
}

@keyframes maze-success {
  0%, 75% { r: 2; opacity: 0; }
  85% { r: 2; opacity: 1; }
  100% { r: 9; opacity: 0; }
}

.maze-ping {
  animation: maze-ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes maze-ping {
  0%, 100% { r: 4; opacity: 0.45; }
  50% { r: 7; opacity: 0; }
}
</style>
