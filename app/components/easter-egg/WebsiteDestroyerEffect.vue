<script setup lang="ts">
interface Props {
  phase: number // 0: none, 1: glitch, 2: chaos, 3: gravity, 4: crack
}

const props = defineProps<Props>()

// Generate random values for chaos effect
const elements = ref<HTMLElement[]>([])

const collectElements = () => {
  if (import.meta.client && props.phase >= 2) {
    // Select main content elements for destruction
    const selectors = [
      'header', 'nav', 'main', 'section', 'article', 
      'h1', 'h2', 'h3', 'p', 'img', 'button', 'a',
      '.card', '[class*="card"]'
    ]
    const allElements = document.querySelectorAll(selectors.join(', '))
    elements.value = Array.from(allElements) as HTMLElement[]
  }
}

// Apply chaos/gravity effects to elements
watch(() => props.phase, (newPhase) => {
  if (!import.meta.client) return

  if (newPhase === 2) {
    collectElements()
    // Apply chaos effect
    elements.value.forEach((el, index) => {
      const randomX = (Math.random() - 0.5) * 50
      const randomY = (Math.random() - 0.5) * 30
      const randomRotate = (Math.random() - 0.5) * 20
      const randomScale = 0.9 + Math.random() * 0.2
      
      el.style.transition = 'transform 0.5s ease-out'
      el.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`
    })
  }

  if (newPhase === 3) {
    // Apply gravity effect
    elements.value.forEach((el, index) => {
      const delay = Math.random() * 1000
      const rotation = (Math.random() - 0.5) * 180
      const fallDistance = window.innerHeight + 500
      
      setTimeout(() => {
        el.style.transition = 'transform 2s cubic-bezier(0.55, 0, 1, 0.45)'
        el.style.transform = `translateY(${fallDistance}px) rotate(${rotation}deg)`
      }, delay)
    })
  }
})
</script>

<template>
  <div class="destroyer-effects" :class="`phase-${phase}`">
    <!-- Glitch overlay -->
    <div v-if="phase >= 1" class="glitch-overlay" />
    
    <!-- Screen crack SVG overlay -->
    <div v-if="phase >= 4" class="crack-overlay">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="crack-glow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <!-- Main crack lines -->
        <g filter="url(#crack-glow)" stroke="rgba(255,255,255,0.9)" stroke-width="0.3" fill="none">
          <!-- Center impact point -->
          <circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.5)" />
          
          <!-- Radiating cracks -->
          <path d="M50,50 L20,15 L15,10" />
          <path d="M50,50 L25,20 L18,12" />
          <path d="M50,50 L75,20 L85,8" />
          <path d="M50,50 L80,25 L92,15" />
          <path d="M50,50 L90,45 L100,42" />
          <path d="M50,50 L85,70 L95,85" />
          <path d="M50,50 L70,85 L75,100" />
          <path d="M50,50 L45,80 L40,100" />
          <path d="M50,50 L25,75 L10,90" />
          <path d="M50,50 L15,55 L0,58" />
          <path d="M50,50 L10,35 L0,28" />
          
          <!-- Secondary cracks -->
          <path d="M25,20 L30,8" />
          <path d="M75,20 L72,5" />
          <path d="M85,70 L100,75" />
          <path d="M25,75 L20,100" />
          <path d="M15,55 L5,75" />
          <path d="M90,45 L100,55" />
        </g>
        
        <!-- Shatter fragments hint -->
        <g stroke="rgba(255,255,255,0.3)" stroke-width="0.15" fill="none">
          <path d="M50,50 L55,35 L60,50" />
          <path d="M50,50 L65,55 L55,65" />
          <path d="M50,50 L40,60 L35,50" />
          <path d="M50,50 L45,40 L38,45" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.destroyer-effects {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
}

/* Phase 1: Glitch Effect */
.glitch-overlay {
  position: absolute;
  inset: 0;
  animation: glitch 0.3s infinite;
  background: transparent;
}

.phase-1 .glitch-overlay {
  animation: 
    glitch 0.1s infinite,
    colorShift 0.2s infinite alternate;
}

.phase-2 .glitch-overlay,
.phase-3 .glitch-overlay {
  animation: 
    shake 0.1s infinite,
    colorShift 0.15s infinite alternate;
}

@keyframes glitch {
  0% { transform: translate(0); filter: hue-rotate(0deg); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); filter: hue-rotate(90deg); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 1px); filter: hue-rotate(180deg); }
  100% { transform: translate(0); filter: hue-rotate(0deg); }
}

@keyframes shake {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  10% { transform: translate(-5px, -3px) rotate(-0.5deg); }
  20% { transform: translate(5px, 3px) rotate(0.5deg); }
  30% { transform: translate(-3px, 5px) rotate(-0.3deg); }
  40% { transform: translate(3px, -5px) rotate(0.3deg); }
  50% { transform: translate(-2px, 2px) rotate(-0.2deg); }
  60% { transform: translate(2px, -2px) rotate(0.2deg); }
  70% { transform: translate(-4px, 4px) rotate(-0.4deg); }
  80% { transform: translate(4px, -4px) rotate(0.4deg); }
  90% { transform: translate(-1px, 1px) rotate(-0.1deg); }
}

@keyframes colorShift {
  0% { 
    background: linear-gradient(
      transparent 0%,
      rgba(255, 0, 0, 0.03) 10%,
      transparent 20%,
      rgba(0, 255, 0, 0.03) 30%,
      transparent 40%,
      rgba(0, 0, 255, 0.03) 50%,
      transparent 60%
    );
  }
  100% {
    background: linear-gradient(
      transparent 0%,
      rgba(0, 255, 255, 0.03) 15%,
      transparent 25%,
      rgba(255, 0, 255, 0.03) 40%,
      transparent 55%,
      rgba(255, 255, 0, 0.03) 70%,
      transparent 80%
    );
  }
}

/* Crack overlay */
.crack-overlay {
  position: absolute;
  inset: 0;
  animation: crackAppear 0.5s ease-out forwards;
}

.crack-overlay svg {
  width: 100%;
  height: 100%;
}

@keyframes crackAppear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Global body shake during destruction */
:global(body.destroying) {
  animation: bodyShake 0.1s infinite;
}

@keyframes bodyShake {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(-3px, 3px); }
  50% { transform: translate(3px, -3px); }
  75% { transform: translate(-3px, -3px); }
}
</style>
