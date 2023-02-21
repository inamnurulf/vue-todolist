import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    username: ''
  }),
  actions: {
    setUsername(string) {
      this.username = string
    }
  },
  getters: {
    getUsername: ({ username }) => username,
    // determine authenticated user based on username
    isLoggedIn: ({ username }) => !!username
  }
})
