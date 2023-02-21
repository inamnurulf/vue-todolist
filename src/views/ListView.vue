<script>
import { useListStore } from '@/stores/list'
import { mapState, mapActions } from 'pinia'

const initialInput = {
  name: '',
  completed: false
}

export default {
  name: 'ListView',
  data: () => ({
    input: { ...initialInput }
  }),
  computed: {
    // import all defined getters via mapState helper
    ...mapState(useListStore, ['getList'])
  },
  methods: {
    // import all defined action via mapActions helper
    ...mapActions(useListStore, ['addList']),
    // submit form
    addForm(event) {
      console.log(event)

      // pass input to action
      this.addList({ ...this.input })

      // Reset Input with initial value
      Object.assign(this.input, initialInput)
    }
  }
}
</script>

<template>
  <div>
    <h1>List</h1>

    <form @submit.prevent="($event) => addForm($event)" method="post">
      <input
        class="input"
        v-model="input.name"
        type="text"
        placeholder="add new list"
      />
      <br />

      <input
        v-model="input.completed"
        type="checkbox"
        name="completed"
        id="completed"
      />
      Completed

      <br />

      <button type="submit">Add</button>
    </form>

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
