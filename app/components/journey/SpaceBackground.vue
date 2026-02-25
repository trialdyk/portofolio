<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  isWarping: boolean
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = window.innerWidth
  let height = window.innerHeight
  canvas.width = width
  canvas.height = height

  const numStars = 600
  const stars: { x: number, y: number, z: number, pz: number }[] = []

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
      pz: Math.random() * width
    })
  }

  let baseSpeed = 1
  let currentSpeed = baseSpeed

  // Watch for warp state
  watch(() => props.isWarping, (val) => {
    // Smoothly interpolate speed could be added here, but direct works for impact
    currentSpeed = val ? 45 : baseSpeed
  })

  const drawStars = () => {
    // During warp, leave trails by barely fading the background
    ctx.fillStyle = props.isWarping ? 'rgba(5, 5, 5, 0.2)' : '#050505'
    ctx.fillRect(0, 0, width, height)

    const cx = width / 2
    const cy = height / 2

    for (let i = 0; i < numStars; i++) {
      const star = stars[i]
      if (!star) continue
      
      star.pz = star.z
      star.z -= currentSpeed

      if (star.z <= 0) {
        star.x = Math.random() * width - width / 2
        star.y = Math.random() * height - height / 2
        star.z = width
        star.pz = width // Prevent line drawing from front to back
      }

      const x = (star.x / star.z) * cx + cx
      const y = (star.y / star.z) * cy + cy
      
      const px = (star.x / star.pz) * cx + cx
      const py = (star.y / star.pz) * cy + cy
      
      const radius = Math.max(0, 1.5 * (1 - star.z / width))

      ctx.beginPath()
      
      if (props.isWarping) {
        // Draw stretched lines during warp
        ctx.moveTo(px, py)
        ctx.lineTo(x, y)
        ctx.lineWidth = radius
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - star.z / width})`
        ctx.stroke()
      } else {
        // Draw dots normally
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / width})`
        ctx.fill()
      }
    }

    animationFrameId = requestAnimationFrame(drawStars)
  }

  drawStars()

  const handleResize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <div class="fixed inset-0 z-0 pointer-events-none bg-black">
    <canvas ref="canvasRef" class="w-full h-full opacity-80" />
    
    <!-- Deep space colored nebulas using CSS -->
    <div class="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-fuchsia-900/20 mix-blend-screen" />
    <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style="animation-duration: 8s" />
  </div>
</template>
