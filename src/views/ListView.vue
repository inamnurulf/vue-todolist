<script>
export default {
  name: 'ListView',
  data: () => ({
    input: {
      name: ''
    },
    list: [
      {
        name: 'First list'
      },
      {
        name: 'Second list'
      }
    ]
  })
}
</script>

<template>
  <div>
    <h1>List</h1>

    <input v-model="input.name" type="text" @keyup.enter="list.push({ ...input })" />

    <ol>
      <template v-for="(item, index) in list" :key="index">
        <li>{{ item.name }}</li>
      </template>
    </ol>
  </div>
</template>
