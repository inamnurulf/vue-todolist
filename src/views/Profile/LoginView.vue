<script>
import { d$auth } from '@/stores/auth'
import { mapActions, mapState } from 'pinia'

import BaseInput from '@/components/BaseInput.vue'

const initialInput = {
  username: '',
  password: ''
}

export default {
  data: () => ({
    input: { ...initialInput }
  }),
  components: {
    BaseInput
  },
  computed: {
    ...mapState(d$auth, ['g$user', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(d$auth, ['a$login', 'a$setUser']),
    resetForm() {
      Object.assign(this.input, initialInput)
    },
    async submitForm() {
      try {
        await this.a$login(this.input)

        // set user based on cookie
        this.a$setUser()

        this.resetForm()

        // redirect to profile after input username
        this.$router.replace({
          name: 'Authenticated',
          params: { id: this.g$user.id }
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center items-center mt-10">
    <!-- conditional rendering using v-if directive -->
    <form
      v-if="!isLoggedIn"
      class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col"
      method="post"
      @submit.prevent="() => submitForm()"
      @reset="() => resetForm()"
    >
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <base-input
        class="mb-4 border rounded-lg p-3"
        v-model="input.username"
        placeholder="Input username"
        required
      />
      <base-input
        class="mb-4 border rounded-lg p-3"
        v-model="input.password"
        placeholder="Input password"
        type="password"
        required
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Login
      </button>
    </form>

    <!-- conditional rendering using v-else directive -->
    <h3 v-else class="text-xl font-semibold">{{ g$user?.id }}</h3>
  </div>
</template>
