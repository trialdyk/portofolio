<script setup lang="ts">
interface Props {
  visible: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  dismiss: []
}>()
</script>

<template>
  <Transition name="toast">
    <div v-if="visible" class="toast">
      <div class="toast-inner terminal-border">
        <div class="toast-text">
          <p class="toast-msg">
            <span class="text-red-500 font-bold mr-2">[WARN]</span>
            Init Chaos Protocol? 
            <span class="blink ml-1">_</span>
          </p>
          <div class="mt-2 text-xs text-slate-400">
            Press <kbd class="hacker-kbd">B</kbd> to execute.
          </div>
        </div>
        <button class="toast-close" @click="emit('dismiss')" aria-label="Abort">
          <Icon name="lucide:x" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
}

.toast-inner {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(5, 5, 5, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 42, 42, 0.3);
  box-shadow: 
    0 10px 40px -10px rgba(255, 0, 0, 0.3),
    0 0 20px rgba(255, 42, 42, 0.1) inset;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
}

.terminal-border::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff2a2a, transparent);
  animation: scanline 2s linear infinite;
}

@keyframes scanline {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.toast-text {
  flex: 1;
}

.toast-msg {
  margin: 0;
  font-size: 0.9rem;
  color: #a0a0a0;
  letter-spacing: 0.05em;
}

.blink {
  animation: blink 1s step-end infinite;
  color: #ff2a2a;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hacker-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  padding: 0.1rem 0.4rem;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: bold;
  color: #050505;
  background: #ff2a2a;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 42, 42, 0.6);
}

.toast-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background: transparent;
  border: 1px solid transparent;
  color: rgba(255, 42, 42, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
}

.toast-close:hover {
  border-color: rgba(255, 42, 42, 0.4);
  color: #ff2a2a;
  background: rgba(255, 42, 42, 0.1);
}

/* Transition */
.toast-enter-active {
  animation: toastIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-leave-active {
  animation: toastOut 0.3s ease-out forwards;
}

@keyframes toastIn {
  0% {
    opacity: 0;
    transform: translateX(100%) skewX(-10deg);
    filter: blur(4px);
  }
  70% {
    transform: translateX(-5%) skewX(5deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) skewX(0);
    filter: blur(0);
  }
}

@keyframes toastOut {
  to {
    opacity: 0;
    transform: translateX(20%) scale(0.95);
    filter: blur(2px);
  }
}
</style>
