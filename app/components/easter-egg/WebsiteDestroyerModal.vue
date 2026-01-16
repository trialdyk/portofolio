<script setup lang="ts">
interface Props {
  visible: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  refresh: []
}>()
</script>

<template>
  <Transition name="modal">
    <div v-if="visible" class="modal-overlay">
      <div class="modal">
        <div class="modal-icon">💥</div>
        <h2 class="modal-title">Oops, you broke it!</h2>
        <p class="modal-desc">Just kidding</p>
        <button class="modal-btn" @click="emit('refresh')">
          Refresh Page
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
}

.modal {
  width: 100%;
  max-width: 320px;
  padding: 2rem 1.5rem;
  text-align: center;
  background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  box-shadow: 
    0 24px 48px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 0 80px rgba(139, 92, 246, 0.15);
}

.modal-icon {
  font-size: 3rem;
  margin-bottom: 0.75rem;
  animation: bounce 0.6s ease-out;
}

.modal-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
}

.modal-desc {
  margin: 0 0 1.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.modal-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}

.modal-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
}

.modal-btn:active {
  transform: translateY(0);
}

/* Animations */
@keyframes bounce {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.modal-enter-active {
  animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active {
  animation: modalOut 0.2s ease-out forwards;
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes modalOut {
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
