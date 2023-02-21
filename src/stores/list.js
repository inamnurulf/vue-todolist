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
    },
    removeIndex(index) {
      this.list = this.list.filter((val, idx) => index !== idx)
    }
  },
  getters: {
    getList: ({ list }) => list
  }
})
