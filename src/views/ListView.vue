<script>
export default {
  name: 'ListView',
  data: () => ({
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

    <ol>
      <template v-for="(item, index) in list" :key="index">
        <li>{{ item.name }}</li>
      </template>
    </ol>
  </div>
</template>
