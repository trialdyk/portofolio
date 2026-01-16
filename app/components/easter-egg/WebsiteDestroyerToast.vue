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
      <div class="toast-inner">
        <span class="toast-emoji">🤫</span>
        <div class="toast-text">
          <p class="toast-msg">Press <kbd>B</kbd> if you dare</p>
        </div>
        <button class="toast-close" @click="emit('dismiss')" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 9999;
}

.toast-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: rgba(15, 15, 20, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 12px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.toast-emoji {
  font-size: 1.25rem;
}

.toast-text {
  flex: 1;
}

.toast-msg {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: -0.01em;
}

.toast-msg kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.375rem;
  padding: 0 0.375rem;
  margin: 0 0.125rem;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.8), rgba(139, 92, 246, 0.6));
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.toast-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.15s ease;
}

.toast-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

/* Light mode */
:root:not(.dark) .toast-inner {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(139, 92, 246, 0.15);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

:root:not(.dark) .toast-msg {
  color: #1a1a2e;
}

:root:not(.dark) .toast-close {
  color: rgba(0, 0, 0, 0.3);
}

:root:not(.dark) .toast-close:hover {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.6);
}

/* Transition */
.toast-enter-active {
  animation: toastIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-leave-active {
  animation: toastOut 0.25s ease-out forwards;
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes toastOut {
  to {
    opacity: 0;
    transform: translateX(50%) scale(0.95);
  }
}
</style>
