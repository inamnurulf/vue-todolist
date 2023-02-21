<script>
import { useListStore } from '@/stores/list'
import { mapState, mapActions } from 'pinia'

// import component
import BaseInput from '@/components/BaseInput.vue'

const initialInput = {
  name: '',
  description: '',
  completed: false
}

export default {
  name: 'ListView',
  data: () => ({
    input: { ...initialInput }
  }),
  // declate component
  components: {
    BaseInput
  },
  computed: {
    // import all defined getters via mapState helper
    ...mapState(useListStore, ['getList'])
  },
  methods: {
    // import all defined action via mapActions helper
    ...mapActions(useListStore, ['addList', 'removeIndex']),
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
      <!-- use component using kebab-case -->
      <base-input
        v-model="input.name"
        class="input"
        placeholder="add new"
      ></base-input>
      <br />

      <!-- can be used many times -->
      <base-input
        v-model="input.description"
        class="input"
        placeholder="desccription"
      ></base-input>
      <br />

      <input v-model="input.completed" type="checkbox" /> Completed
      <br />

      <button type="submit">Add</button>
    </form>

    <ol class="list">
      <template v-for="(item, index) in getList" :key="index">
        <li>
          <button class="red" @click="($event) => removeIndex(index)">
            &times;
          </button>
          {{ item.name }}
          {{ item?.description ? `- ${item.description}` : '' }}
        </li>
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
button.red {
  color: red;
}
</style>
