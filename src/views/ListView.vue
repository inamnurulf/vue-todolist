<script>
import { useListStore } from '@/stores/list'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'ListView',
  data: () => ({
    input: {
      name: ''
    }
  }),
  computed: {
    ...mapState(useListStore, ['getList'])
  },
  methods: {
    ...mapActions(useListStore, ['addList'])
  }
}
</script>

<template>
  <div>
    <h1>List</h1>

    <input
      class="input"
      v-model="input.name"
      type="text"
      @keyup.enter="
        ($event) => {
          addList({ ...input })
          input.name = ''
        }
      "
      placeholder="add new list"
    />

    <ol class="list">
      <template v-for="(item, index) in getList" :key="index">
        <li>{{ item.name }}</li>
      </template>
    </ol>
  </div>
</template>

<style scoped>
.input {
  padding: 0.5rem;
  font-size: 1rem;
}
.list {
  margin-block: 0.5rem;
}
</style>
