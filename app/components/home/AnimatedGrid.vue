<script setup lang="ts">
interface Meteor {
  id: number
  left: number
  duration: number
  size: number
  active: boolean
}

const meteors = ref<Meteor[]>([])
let meteorId = 0

// Spawn a single meteor at random position
const spawnMeteor = () => {
  const meteor: Meteor = {
    id: meteorId++,
    left: 15 + Math.random() * 70, // Random horizontal position
    duration: 1.2 + Math.random() * 0.8, // Random speed
    size: 0.7 + Math.random() * 0.5,
    active: true
  }
  
  meteors.value.push(meteor)
  
  // Remove meteor after animation completes
  setTimeout(() => {
    meteors.value = meteors.value.filter(m => m.id !== meteor.id)
  }, meteor.duration * 1000 + 100)
}

// Random interval meteor spawner
const startMeteorShower = () => {
  const spawn = () => {
    spawnMeteor()
    // Next meteor in 2-6 seconds (random)
    const nextDelay = 2000 + Math.random() * 4000
    setTimeout(spawn, nextDelay)
  }
  
  // Start with a random delay
  setTimeout(spawn, Math.random() * 2000)
}

onMounted(() => {
  startMeteorShower()
})
</script>

<template>
  <div class="animated-grid">
    <!-- Meteors - shooting stars spawning randomly -->
    <div class="meteors">
      <div 
        v-for="meteor in meteors" 
        :key="meteor.id" 
        class="meteor"
        :style="{
          left: `${meteor.left}%`,
          animationDuration: `${meteor.duration}s`,
          '--meteor-scale': meteor.size
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.animated-grid {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.meteors {
  position: absolute;
  inset: 0;
}

/* Meteor with correct tail - thick at head, thin at end */
.meteor {
  position: absolute;
  top: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: white;
  transform: scale(var(--meteor-scale, 1));
  box-shadow: 
    0 0 4px 1px rgb(var(--color-primary-200)),
    0 0 12px 3px rgb(var(--color-primary-300) / 0.6),
    0 0 24px 6px rgb(var(--color-primary-400) / 0.3);
  animation: meteor-fall var(--duration, 2s) ease-in forwards;
}

/* Tail - starts thick at meteor head, gets thinner as it trails behind */
.meteor::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 1px;
  background: linear-gradient(
    to right,
    rgb(var(--color-primary-200) / 0.9) 0%,
    rgb(var(--color-primary-300) / 0.6) 15%,
    rgb(var(--color-primary-400) / 0.3) 40%,
    rgb(var(--color-primary-500) / 0.1) 70%,
    transparent 100%
  );
  transform: rotate(-45deg);
  transform-origin: left center;
}

/* Secondary glow trail */
.meteor::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 3px;
  background: linear-gradient(
    to right,
    rgb(var(--color-primary-300) / 0.4) 0%,
    rgb(var(--color-primary-400) / 0.2) 30%,
    transparent 100%
  );
  transform: rotate(-45deg) translateY(-50%);
  transform-origin: left center;
  filter: blur(1px);
}

@keyframes meteor-fall {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(var(--meteor-scale, 1));
  }
  5% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-400px, 400px) scale(var(--meteor-scale, 1));
  }
}
</style>
