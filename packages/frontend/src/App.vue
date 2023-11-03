<script setup>
import { ref } from 'vue'
import Login from '@/components/Login.vue'
import { login } from '@/http'

const errorMsg = ref('')

async function onSubmit({ username, password }) {
  const { error } = await login(username, password)
  if (error) {
    errorMsg.value = error
    return
  }

  errorMsg.value = ''
  window.alert(`You're logged in!`)
}
</script>

<template>
  <div class="page__wrapper">
    <Login @submit="onSubmit" :error-msg="errorMsg" />
  </div>
</template>

<style scoped lang="scss">
.page {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }
}
</style>
