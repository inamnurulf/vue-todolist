<script>
import { useAuthStore } from '@/stores/auth'
import { mapActions, mapState } from 'pinia'

import BaseInput from '@/components/BaseInput.vue'

const initialInput = {
  username: ''
}

export default {
  data: () => ({
    input: { ...initialInput }
  }),
  components: {
    BaseInput
  },
  computed: {
    ...mapState(useAuthStore, ['getUsername'])
  },
  methods: {
    ...mapActions(useAuthStore, ['setUsername']),
    resetForm() {
      Object.assign(this.input, initialInput)
    },
    submitForm() {
      this.setUsername(this.input.username)
      this.resetForm()

      // redirect to profile after input username
      this.$router.replace({
        name: 'Authenticated',
        params: { id: this.getUsername }
      })
    }
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>

    <!-- conditional rendering using v-if directive -->
    <form
      v-if="!getUsername"
      method="post"
      @submit.prevent="() => submitForm()"
      @reset="() => resetForm()"
    >
      <base-input
        class="input"
        v-model="input.username"
        placeholder="input username"
        required
      />
    </form>

    <!-- conditional rendering using v-else directive -->
    <h3 v-else>{{ getUsername }}</h3>
  </div>
</template>
