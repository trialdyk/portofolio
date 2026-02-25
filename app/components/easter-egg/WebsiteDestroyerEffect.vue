<script setup lang="ts">
interface Props {
  phase: number // 0: none, 1: chaos, 2: gravity
}

const props = defineProps<Props>()
const isSystemFailure = ref(false)

// Apply effects directly when phase changes
watch(() => props.phase, (newPhase) => {
  if (!import.meta.client) return
  
  const selectors = 'nav, header, main, section, article, footer, h1, h2, h3, h4, p, img, button, a, div[class*="card"], div[class*="grid"]'
  const elements = document.querySelectorAll(selectors)
  
  if (newPhase === 1) {
    // Chaos: Glitch and shake
    document.body.style.overflow = 'hidden' // Prevent scrolling
    
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement
      // Save original inline styles to restore if needed, or just blast them
      
      const glitchInterval = setInterval(() => {
        if (!document.body.classList.contains('destroyer-active')) {
          document.body.classList.add('destroyer-active')
        }
        
        const randomX = (Math.random() - 0.5) * 30
        const randomY = (Math.random() - 0.5) * 30
        const randomRotate = (Math.random() - 0.5) * 8
        
        htmlEl.style.transition = 'transform 0.1s ease-in-out, filter 0.1s'
        htmlEl.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`
        
        // Random chromatic aberration
        if (Math.random() > 0.6) {
          htmlEl.style.filter = `drop-shadow(${Math.random() * 10}px 0 0 rgba(255,0,0,0.8)) drop-shadow(-${Math.random() * 10}px 0 0 rgba(0,255,255,0.8))`
        } else {
          htmlEl.style.filter = 'none'
        }
      }, 100)
      
      // Store interval ID on dataset to clear later
      htmlEl.dataset.glitchInterval = glitchInterval.toString()
    })
  }

  if (newPhase === 2) {
    // Explosive Gravity + 3D fly away
    document.body.classList.remove('destroyer-active')
    
    // Show System Failure after a slight delay
    setTimeout(() => {
      isSystemFailure.value = true
    }, 1500)

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement
      
      // Clear glitch interval
      if (htmlEl.dataset.glitchInterval) {
        clearInterval(parseInt(htmlEl.dataset.glitchInterval))
      }
      
      const delay = Math.random() * 600
      
      // Calculate outward explosion from center
      const rect = htmlEl.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const elX = rect.left + rect.width / 2
      const elY = rect.top + rect.height / 2
      
      const dirX = elX - centerX
      const dirY = elY - centerY
      
      const dist = Math.sqrt(dirX * dirX + dirY * dirY) || 1
      const normalizedX = dirX / dist
      const normalizedY = dirY / dist
      
      // Blast outwards and heavily downwards
      const explosiveForce = 400 + Math.random() * 800
      const finalX = normalizedX * explosiveForce * 2
      const finalY = (normalizedY * explosiveForce) + window.innerHeight
      
      const rotationX = (Math.random() - 0.5) * 720
      const rotationY = (Math.random() - 0.5) * 720
      const rotationZ = (Math.random() - 0.5) * 360
      const scale = Math.random() * 1.5 + 0.2
      
      setTimeout(() => {
        htmlEl.style.transition = 'all 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)'
        htmlEl.style.transform = `translate3d(${finalX}px, ${finalY}px, -200px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg) scale(${scale})`
        htmlEl.style.opacity = '0'
        htmlEl.style.filter = 'blur(12px)'
        htmlEl.style.pointerEvents = 'none'
      }, delay)
    })
  }
}, { immediate: true })

const reloadPage = () => {
  if (import.meta.client) {
    window.location.reload()
  }
}
</script>

<template>
  <div>
    <!-- Cinematic Dark Overlay -->
    <div 
      class="destroyer-overlay transition-all duration-1000" 
      :class="{ 
        'opacity-0': phase === 0,
        'opacity-30 bg-red-900/20 mix-blend-color-burn': phase === 1,
        'opacity-100 bg-[#050505] backdrop-blur-sm pointer-events-auto': phase === 2 
      }" 
    >
      <!-- Vignette effect -->
      <div v-if="phase > 0" class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
    </div>
    
    <!-- System Failure Text -->
    <Transition name="fade-scale">
      <div v-if="isSystemFailure" class="system-failure-container">
        <h1 class="system-failure-text glitch" data-text="SYSTEM FAILURE">SYSTEM FAILURE</h1>
        <p class="system-failure-sub">Simulation protocol terminated. Reality engine detached.</p>
        <button class="reboot-btn mt-8" @click="reloadPage">
          <Icon name="lucide:power" class="w-4 h-4 mr-2" />
          REBOOT_SYS
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.destroyer-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
}

.system-failure-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.system-failure-text {
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  color: #ff2a2a;
  margin: 0;
  line-height: 1;
  text-align: center;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  position: relative;
}

/* Glitch effect for the text */
.glitch::before, .glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}
.glitch::before {
  left: 3px;
  text-shadow: -2px 0 cyan;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}
.glitch::after {
  left: -3px;
  text-shadow: -2px 0 red;
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(10px, 9999px, 83px, 0); transform: skew(0.5deg); }
  20% { clip: rect(62px, 9999px, 11px, 0); transform: skew(-0.5deg); }
  40% { clip: rect(31px, 9999px, 88px, 0); transform: skew(0.5deg); }
  60% { clip: rect(78px, 9999px, 49px, 0); transform: skew(-0.5deg); }
  80% { clip: rect(10px, 9999px, 17px, 0); transform: skew(0.5deg); }
  100% { clip: rect(44px, 9999px, 93px, 0); transform: skew(-0.5deg); }
}
@keyframes glitch-anim-2 {
  0% { clip: rect(65px, 9999px, 100px, 0); transform: skew(-0.5deg); }
  20% { clip: rect(21px, 9999px, 48px, 0); transform: skew(0.5deg); }
  40% { clip: rect(44px, 9999px, 20px, 0); transform: skew(-0.5deg); }
  60% { clip: rect(9px, 9999px, 77px, 0); transform: skew(0.5deg); }
  80% { clip: rect(82px, 9999px, 54px, 0); transform: skew(-0.5deg); }
  100% { clip: rect(31px, 9999px, 12px, 0); transform: skew(0.5deg); }
}

.system-failure-sub {
  font-family: 'Courier New', Courier, monospace;
  color: #a0a0a0;
  margin-top: 1rem;
  font-size: 1.2rem;
  opacity: 0.8;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
}

.reboot-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #ff2a2a;
  border: 1px solid #ff2a2a;
  padding: 0.75rem 2rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 42, 42, 0.2), inset 0 0 10px rgba(255, 42, 42, 0.1);
  border-radius: 4px;
}

.reboot-btn:hover {
  background: rgba(255, 42, 42, 0.15);
  box-shadow: 0 0 20px rgba(255, 42, 42, 0.4), inset 0 0 15px rgba(255, 42, 42, 0.3);
  text-shadow: 0 0 5px #ff2a2a;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
  filter: blur(10px);
}
</style>
