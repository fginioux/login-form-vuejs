<script setup>
defineProps(['type', 'disabled'])
</script>

<template>
  <button :disabled="disabled" :type="type">
    <slot />
  </button>
</template>

<style lang="scss">
button {
  display: flex;
  width: 343px;
  padding: 16px 32px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 100px;
  background: var(--green-primary, #5db075);
  color: #fff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  transition: 0.4s;
}

button:disabled {
  background: var(--gray-02, #f2f2f2);
  color: var(--gray-03, #bdbdbd);
}
</style>
