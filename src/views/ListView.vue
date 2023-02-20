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

    <input v-model="input.name" type="text" @keyup.enter="addList({ ...input }); input.name = ''" />

    <ol>
      <template v-for="(item, index) in getList" :key="index">
        <li>{{ item.name }}</li>
      </template>
    </ol>
  </div>
</template>
