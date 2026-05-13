<script setup lang="ts">
// Animated Knowledge Core — Pure SVG with orbiting planets and glowing core
</script>

<template>
  <div class="relative flex h-[350px] w-full max-w-sm items-center justify-center p-4">
    <!-- Outer ambient glow -->
    <div class="absolute h-60 w-60 rounded-full bg-accent-500/15 opacity-50 blur-3xl animate-pulse dark:bg-accent-500/20" style="animation-duration: 5s;" />

    <svg viewBox="0 0 200 200" class="relative z-10 h-72 w-72" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Core radial gradient -->
        <radialGradient id="core-grad" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stop-color="#ede9fe" />
          <stop offset="35%" stop-color="#a78bfa" />
          <stop offset="100%" stop-color="#3730a3" />
        </radialGradient>

        <!-- Planet glow -->
        <filter id="core-planet-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Soft glow for the core halo -->
        <filter id="core-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>

        <!-- Orbit paths -->
        <ellipse id="core-orbit-1" cx="100" cy="100" rx="80" ry="22" />
        <ellipse id="core-orbit-2" cx="100" cy="100" rx="68" ry="68" />
        <ellipse id="core-orbit-3" cx="100" cy="100" rx="50" ry="16" />
      </defs>

      <!-- Background star field -->
      <g class="text-slate-400 dark:text-slate-500">
        <circle cx="20" cy="35" r="0.6" fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="180" cy="40" r="0.5" fill="currentColor">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="160" r="0.7" fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="175" r="0.5" fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="20" r="0.4" fill="currentColor" opacity="0.5" />
        <circle cx="160" cy="180" r="0.5" fill="currentColor" opacity="0.4" />
        <circle cx="190" cy="100" r="0.4" fill="currentColor" opacity="0.4" />
        <circle cx="10" cy="100" r="0.4" fill="currentColor" opacity="0.4" />
      </g>

      <!-- Connection lines (radiating from center to outer nodes) -->
      <g class="text-slate-300 dark:text-slate-600" stroke="currentColor" stroke-width="0.4" fill="none">
        <line x1="100" y1="100" x2="40" y2="40" opacity="0.4">
          <animate attributeName="opacity" values="0.15;0.55;0.15" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="100" x2="160" y2="60" opacity="0.4">
          <animate attributeName="opacity" values="0.15;0.55;0.15" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="100" x2="30" y2="140" opacity="0.4">
          <animate attributeName="opacity" values="0.15;0.55;0.15" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="100" x2="170" y2="160" opacity="0.4">
          <animate attributeName="opacity" values="0.15;0.55;0.15" dur="2.5s" begin="1.8s" repeatCount="indefinite" />
        </line>
      </g>

      <!-- Outer node dots -->
      <circle cx="40" cy="40" r="1.8" class="fill-accent-400" filter="url(#core-planet-glow)" />
      <circle cx="160" cy="60" r="2.2" class="fill-sky-400" filter="url(#core-planet-glow)" />
      <circle cx="30" cy="140" r="1.8" class="fill-emerald-400" filter="url(#core-planet-glow)" />
      <circle cx="170" cy="160" r="2.2" class="fill-indigo-400" filter="url(#core-planet-glow)" />

      <!-- Orbit ring 1 (largest, equatorial) -->
      <use href="#core-orbit-1" fill="none" class="stroke-slate-400/45 dark:stroke-slate-500/45" stroke-width="0.6" />

      <!-- Orbit ring 2 (medium, polar/circular) -->
      <use href="#core-orbit-2" fill="none" class="stroke-slate-400/40 dark:stroke-slate-500/40" stroke-width="0.6" transform="rotate(60 100 100)" />

      <!-- Orbit ring 3 (smallest, slightly tilted) -->
      <use href="#core-orbit-3" fill="none" class="stroke-accent-400/55 dark:stroke-accent-500/55" stroke-width="0.6" transform="rotate(-30 100 100)" />

      <!-- Planet 1 (Sky blue, on orbit 1) -->
      <circle r="3.6" fill="#38bdf8" filter="url(#core-planet-glow)">
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href="#core-orbit-1" />
        </animateMotion>
      </circle>

      <!-- Planet 2 (Emerald, on orbit 2 — rotated to match orbit tilt) -->
      <g transform="rotate(60 100 100)">
        <circle r="3" fill="#34d399" filter="url(#core-planet-glow)">
          <animateMotion dur="14s" repeatCount="indefinite">
            <mpath href="#core-orbit-2" />
          </animateMotion>
        </circle>
      </g>

      <!-- Planet 3 (Violet, on orbit 3) -->
      <g transform="rotate(-30 100 100)">
        <circle r="2.6" fill="#c4b5fd" filter="url(#core-planet-glow)">
          <animateMotion dur="8s" repeatCount="indefinite">
            <mpath href="#core-orbit-3" />
          </animateMotion>
        </circle>
      </g>

      <!-- Core soft halo -->
      <circle cx="100" cy="100" r="22" fill="#8b5cf6" opacity="0.35" filter="url(#core-soft-glow)" />

      <!-- Pulsing outer ring -->
      <circle cx="100" cy="100" r="14" fill="none" stroke="rgba(167,139,250,0.6)" stroke-width="0.6" class="core-pulse-ring" />

      <!-- Core sphere -->
      <circle cx="100" cy="100" r="14" fill="url(#core-grad)" filter="url(#core-planet-glow)" />

      <!-- Specular highlight -->
      <ellipse cx="96" cy="95" rx="4" ry="2.5" fill="rgba(255,255,255,0.55)" />

      <!-- Sparkle icon (4-point star, centered on core) -->
      <g transform="translate(100 100)">
        <path d="M 0,-5 L 1.4,-1.4 L 5,0 L 1.4,1.4 L 0,5 L -1.4,1.4 L -5,0 L -1.4,-1.4 Z" fill="white" class="core-sparkle" />
      </g>

      <!-- Ascending data particles -->
      <g>
        <circle r="1.1" fill="white" opacity="0">
          <animate attributeName="cx" values="92;95" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="95;55" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle r="1.4" fill="#c4b5fd" opacity="0">
          <animate attributeName="cx" values="100;105" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="cy" values="95;48" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle r="0.9" fill="#ddd6fe" opacity="0">
          <animate attributeName="cx" values="108;103" dur="2.5s" begin="1.3s" repeatCount="indefinite" />
          <animate attributeName="cy" values="95;58" dur="2.5s" begin="1.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="1.3s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.core-pulse-ring {
  transform-origin: 100px 100px;
  transform-box: fill-box;
  animation: core-pulse 2.5s ease-out infinite;
}

@keyframes core-pulse {
  0% { r: 14; opacity: 0.7; }
  100% { r: 26; opacity: 0; }
}

.core-sparkle {
  transform-origin: center;
  transform-box: fill-box;
  animation: core-sparkle 3s ease-in-out infinite;
}

@keyframes core-sparkle {
  0%, 100% { opacity: 0.85; transform: scale(1) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.15) rotate(45deg); }
}
</style>
