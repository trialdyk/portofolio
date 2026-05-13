<script setup lang="ts">
// Isometric Tech Stack — Pure SVG with proper 3D cuboids
</script>

<template>
  <div class="relative flex h-[400px] w-full items-center justify-center">
    <!-- Glow behind the stack -->
    <div class="absolute h-56 w-56 rounded-full bg-accent-500/15 opacity-70 blur-3xl animate-pulse dark:bg-accent-500/20" style="animation-duration: 4s;" />

    <svg viewBox="0 0 400 440" class="relative z-10 h-full w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Frontend gradients (Emerald) -->
        <linearGradient id="iso-fe-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a7f3d0" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <linearGradient id="iso-fe-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <linearGradient id="iso-fe-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34d399" />
          <stop offset="100%" stop-color="#065f46" />
        </linearGradient>

        <!-- Backend gradients (Sky) -->
        <linearGradient id="iso-be-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#bae6fd" />
          <stop offset="100%" stop-color="#0ea5e9" />
        </linearGradient>
        <linearGradient id="iso-be-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0ea5e9" />
          <stop offset="100%" stop-color="#0369a1" />
        </linearGradient>
        <linearGradient id="iso-be-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#075985" />
        </linearGradient>

        <!-- Database gradients (Indigo) -->
        <linearGradient id="iso-db-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c7d2fe" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>
        <linearGradient id="iso-db-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#3730a3" />
        </linearGradient>
        <linearGradient id="iso-db-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#818cf8" />
          <stop offset="100%" stop-color="#312e81" />
        </linearGradient>

        <!-- Soft glow for data packets -->
        <filter id="iso-packet-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Floor shadow blur -->
        <filter id="iso-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <!-- Floor shadow -->
      <ellipse cx="200" cy="420" rx="115" ry="9" fill="#0f172a" opacity="0.25" filter="url(#iso-shadow)" />

      <!-- ================ DATABASE Layer (bottom) ================ -->
      <g class="iso-layer iso-database">
        <!-- Right face -->
        <polygon points="280,345 200,380 200,402 280,367" fill="url(#iso-db-right)" stroke="rgba(0,0,0,0.15)" stroke-width="0.5" stroke-linejoin="round" />
        <!-- Left face -->
        <polygon points="120,345 200,380 200,402 120,367" fill="url(#iso-db-left)" stroke="rgba(0,0,0,0.15)" stroke-width="0.5" stroke-linejoin="round" />
        <!-- Top face -->
        <polygon points="200,310 280,345 200,380 120,345" fill="url(#iso-db-top)" stroke="rgba(255,255,255,0.45)" stroke-width="0.8" stroke-linejoin="round" />
        <!-- Front edge highlight -->
        <line x1="200" y1="310" x2="200" y2="380" stroke="rgba(255,255,255,0.2)" stroke-width="0.5" />
        <!-- Label -->
        <text x="200" y="349" text-anchor="middle" fill="white" font-size="11" font-weight="700" letter-spacing="2.5" font-family="ui-sans-serif, system-ui">DATABASE</text>
        <text x="200" y="362" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-size="7.5" letter-spacing="1.5" font-family="ui-sans-serif, system-ui">PostgreSQL</text>
      </g>

      <!-- Connection: Backend → Database -->
      <line x1="200" y1="272" x2="200" y2="310" stroke="rgba(56,189,248,0.35)" stroke-width="1" stroke-dasharray="2,2" />
      <circle r="3" fill="#38bdf8" filter="url(#iso-packet-glow)" opacity="0">
        <animate attributeName="cy" from="272" to="310" dur="2s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="cx" values="200;200" dur="2s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" begin="0s" repeatCount="indefinite" />
      </circle>

      <!-- ================ BACKEND Layer (middle) ================ -->
      <g class="iso-layer iso-backend">
        <polygon points="280,215 200,250 200,272 280,237" fill="url(#iso-be-right)" stroke="rgba(0,0,0,0.15)" stroke-width="0.5" stroke-linejoin="round" />
        <polygon points="120,215 200,250 200,272 120,237" fill="url(#iso-be-left)" stroke="rgba(0,0,0,0.15)" stroke-width="0.5" stroke-linejoin="round" />
        <polygon points="200,180 280,215 200,250 120,215" fill="url(#iso-be-top)" stroke="rgba(255,255,255,0.45)" stroke-width="0.8" stroke-linejoin="round" />
        <line x1="200" y1="180" x2="200" y2="250" stroke="rgba(255,255,255,0.2)" stroke-width="0.5" />
        <text x="200" y="219" text-anchor="middle" fill="white" font-size="11" font-weight="700" letter-spacing="2.5" font-family="ui-sans-serif, system-ui">BACKEND</text>
        <text x="200" y="232" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-size="7.5" letter-spacing="1.5" font-family="ui-sans-serif, system-ui">Go · API</text>
      </g>

      <!-- Connection: Frontend → Backend -->
      <line x1="200" y1="142" x2="200" y2="180" stroke="rgba(52,211,153,0.35)" stroke-width="1" stroke-dasharray="2,2" />
      <circle r="3" fill="#34d399" filter="url(#iso-packet-glow)" opacity="0">
        <animate attributeName="cy" from="142" to="180" dur="2s" begin="0.7s" repeatCount="indefinite" />
        <animate attributeName="cx" values="200;200" dur="2s" begin="0.7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" begin="0.7s" repeatCount="indefinite" />
      </circle>

      <!-- ================ FRONTEND Layer (top) ================ -->
      <g class="iso-layer iso-frontend">
        <polygon points="280,85 200,120 200,142 280,107" fill="url(#iso-fe-right)" stroke="rgba(0,0,0,0.15)" stroke-width="0.5" stroke-linejoin="round" />
        <polygon points="120,85 200,120 200,142 120,107" fill="url(#iso-fe-left)" stroke="rgba(0,0,0,0.15)" stroke-width="0.5" stroke-linejoin="round" />
        <polygon points="200,50 280,85 200,120 120,85" fill="url(#iso-fe-top)" stroke="rgba(255,255,255,0.45)" stroke-width="0.8" stroke-linejoin="round" />
        <line x1="200" y1="50" x2="200" y2="120" stroke="rgba(255,255,255,0.2)" stroke-width="0.5" />
        <text x="200" y="89" text-anchor="middle" fill="white" font-size="11" font-weight="700" letter-spacing="2.5" font-family="ui-sans-serif, system-ui">FRONTEND</text>
        <text x="200" y="102" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-size="7.5" letter-spacing="1.5" font-family="ui-sans-serif, system-ui">Vue · Nuxt</text>
      </g>

      <!-- Floating ambient particles -->
      <g>
        <circle cx="60" cy="200" r="2" fill="#34d399" opacity="0">
          <animate attributeName="cy" from="220" to="120" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="290" r="1.6" fill="#6366f1" opacity="0">
          <animate attributeName="cy" from="320" to="200" dur="6s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.65;0" dur="6s" begin="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="360" r="1.5" fill="#38bdf8" opacity="0">
          <animate attributeName="cy" from="385" to="285" dur="4.5s" begin="2.1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.7;0" dur="4.5s" begin="2.1s" repeatCount="indefinite" />
        </circle>
        <circle cx="345" cy="160" r="1.4" fill="#a78bfa" opacity="0">
          <animate attributeName="cy" from="180" to="80" dur="5.5s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="5.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.iso-layer {
  transform-origin: center;
  transform-box: fill-box;
}

.iso-frontend {
  animation: iso-levitate 4s ease-in-out infinite alternate;
}
.iso-backend {
  animation: iso-levitate 4s ease-in-out infinite alternate;
  animation-delay: -1.3s;
}
.iso-database {
  animation: iso-levitate 4s ease-in-out infinite alternate;
  animation-delay: -2.6s;
}

@keyframes iso-levitate {
  0% { transform: translateY(0); }
  100% { transform: translateY(-4px); }
}
</style>
