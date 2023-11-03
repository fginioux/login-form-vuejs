<script setup>
import { ref, watchEffect, defineProps } from 'vue'
import Alert from '@/components/Alert.vue'
import Button from '@/components/Button.vue'

defineProps(['errorMsg'])
const $emit = defineEmits(['submit'])

const username = ref('')
const password = ref('')
const invalid = ref(true)

watchEffect(() => {
  invalid.value = !username.value || !password.value
})

function submit() {
  if (invalid.value) {
    return
  }

  $emit('submit', {
    username: username.value,
    password: password.value
  })
}

function forgotPassword() {
  window.alert('Not implemented yet')
}
</script>

<template>
  <div class="login__wrapper">
    <form
      class="login__form"
      :class="{ 'login__form--invalid': errorMsg }"
      @submit.prevent="submit"
    >
      <header>
        <h1>Sign In</h1>
      </header>

      <Alert v-if="errorMsg" type="error">
        {{ errorMsg }}
      </Alert>

      <fieldset>
        <input
          class="input"
          :class="{ 'input--invalid': errorMsg, 'input--dirty': username }"
          v-model="username"
          type="text"
          placeholder="Username"
        />
        <input
          class="input"
          :class="{ 'input--invalid': errorMsg, 'input--dirty': password }"
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </fieldset>

      <Button :disabled="invalid" type="submit"> Login </Button>

      <footer>
        <a href="#" @click.prevent="forgotPassword">Forgot Password?</a>
      </footer>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login {
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--invalid {
      .alert {
        margin-top: 2rem;
      }
    }

    footer {
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #bdbdbd;
    }

    fieldset {
      border: none;
      padding: 1rem 0;
      margin: 0;
    }

    .input {
      width: 343px;
      height: 50px;
      border-radius: 5px;

      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 1rem;
      flex-shrink: 0;
      border: 1px solid #e8e8e8;
      background-color: #f6f6f6;
      box-sizing: border-box;
      padding: 1rem;
      padding-right: 1rem;
      color: #bdbdbd;

      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      transition: 0.4s;

      &--invalid {
        border-color: #dc3545;
        color: #dc3545;
        background-color: #f5c6cb50;
      }

      &--dirty {
        color: #000;
      }

      &:focus {
        background-color: #fff;
        &::placeholder {
          color: #000;
        }
      }
    }
  }
}
</style>
