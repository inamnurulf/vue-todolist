import { defineStore } from 'pinia'

export const useListStore = defineStore({
  id: 'list',
  // state is same as data in options api
  state: () => ({
    list: [
      {
        name: 'First List'
      },
      {
        name: 'Second List'
      }
    ]
  }),
  actions: {
    addList(data) {
      this.list = [...this.list, data]
    }
  },
  getters: {
    getList: ({ list }) => list
  }
})
