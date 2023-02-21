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
    },
    editIndex(index, data) {
      this.list[index] = data
    }
  },
  getters: {
    getList: ({ list }) => list,
    getDetail: ({ list }) => {
      return (index) => list[index]
    }
  }
})
