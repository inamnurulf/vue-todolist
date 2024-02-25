import { defineStore } from 'pinia'

import * as s$todo from '@/services/todo'

export const useListStore = defineStore({
  id: 'list',
  // state is same as data in options api
  state: () => ({
    list: []
  }),
  actions: {
    async a$list() {
      try {
        // object destructure
        const { data } = await s$todo.list()
        this.list = data
      } catch ({ message, error }) {
        throw message ?? error
      }
    },
    async a$add(data) {
      try {
        await s$todo.add(data)
        await this.a$list()
      } catch ({ message, error }) {
        throw message ?? error
      }
    },
    async removeIndex(id, index) {
      try {
        await s$todo.remove(id)
        this.list = this.list.filter((val, idx) => index !== idx)
      } catch (err) {
        console.error(err)
      }
    },
    async editIndex(id, index, data) {
      try {
        console.log(data)
        await s$todo.edit(id, data)
        this.list[index] = data
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    getList: ({ list }) => list,
    getDetail: ({ list }) => {
      return (index) => list[index]
    }
  }
})
