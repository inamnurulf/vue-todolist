<script>
import { useListStore } from '@/stores/list'
import { mapState, mapActions } from 'pinia'

// import component
import BaseInput from '@/components/BaseInput.vue'

const initialInput = {
  title: '',
  description: '',
  category: '',
  completed: false
}

export default {
  name: 'ListView',
  data: () => ({
    input: { ...initialInput },
    editing: false
  }),
  // declate component
  components: {
    BaseInput
  },
  computed: {
    // import all defined getters via mapState helper
    ...mapState(useListStore, ['getList', 'getDetail'])
  },
  async mounted() {
    await this.a$list()
  },
  methods: {
    // import all defined action via mapActions helper
    ...mapActions(useListStore, [
      'a$list',
      'a$add',
      'editIndex',
      'removeIndex'
    ]),
    // reset form
    resetForm() {
      // Reset Input with initial value
      Object.assign(this.input, initialInput)

      // reset editing state
      this.editing = false
    },
    // submit form
    addForm(event) {
      console.log(event)

      // pass input to action
      // determine
      if (this.editing === false) {
        this.a$add({ ...this.input })
      } else {
        this.editIndex(this.editing, { ...this.input })
      }

      // call reset form
      this.resetForm()
    },
    detailList(index) {
      // set editing to true from index params
      this.editing = index
      // set input value from getters by index params
      this.input = { ...this.getDetail(index) }
    },
    // toggle completed
    toggleCompleted(id, index) {
      const detail = this.getDetail(index)
      this.editIndex(id, index, {
        ...detail,
        completed: !detail.completed
      })
    },

    // handle event
    handleLogEvent(row) {
      console.log(row)
    }
  }
}
</script>

<template>
  <div class="p-4">
    <div class="bg-white p-4 rounded-lg">
      <h1 class="text-2xl font-bold mb-4">Add New Data</h1>
      <form
        @submit.prevent="($event) => addForm($event)"
        method="post"
        @reset="() => resetForm()"
        class="mb-4"
      >
        <div class="flex flex-col p-4">
          <base-input
            v-model="input.title"
            class="input mb-2 border rounded-lg p-2"
            placeholder="add new"
            required
          ></base-input>

          <textarea
            v-model="input.description"
            class="input mb-2 border rounded-lg p-2 min-h-[10vh]"
            placeholder="description"
            required
          ></textarea>

          <div>
            <input
              v-model="input.completed"
              type="checkbox"
              class="mr-2"
              id="completed"
            />
            <label for="completed">Completed</label>
          </div>
        </div>

        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg"
        >
          {{ editing !== false ? 'Edit' : 'Add' }}
        </button>

        <button
          type="reset"
          class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </form>
    </div>
    <div class="bg-white rounded-lg mt-4 p-4">
      <h1 class="text-2xl font-bold mb-4">List</h1>

      <ol class="list overflow-y-auto max-h-[45vh]">
        <template v-for="(item, index) in getList" :key="index">
          <hr class="my-2" />
          <li @dblclick="() => toggleCompleted(item?.id, index)" class="mb-2">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <div class="text-lg font-bold">
                  {{ item.title }}
                  <i
                    v-if="item.completed"
                    class="pi pi-check text-lg text-green-500"
                  ></i>
                </div>
                <div class="text-base">
                  {{ item?.description ? `${item.description}` : '' }}
                </div>
              </div>
              <div class="flex items-center">
                <button
                  class="pointer hover:bg-red-500 text-red-500 hover:text-white p-1 rounded-lg mx-2"
                  @click="() => removeIndex(item.id, index)"
                  :disabled="editing !== false"
                >
                  <i class="pi pi-trash text-lg"></i>
                </button>

                <button
                  class="hover:bg-blue-500 text-blue-500 hover:text-white p-1 rounded-lg mx-2"
                  @click="() => detailList(index)"
                  :disabled="editing !== false"
                >
                  <i class="pi pi-file-edit text-lg"></i>
                </button>
              </div>
            </div>
          </li>
        </template>
      </ol>

      <hr class="my-2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  margin-block: 0.5rem;
}
.strike {
  text-decoration: line-through;
}
button {
  &.red {
    color: red;
  }
  &.orange {
    color: black;
  }
}
</style>
