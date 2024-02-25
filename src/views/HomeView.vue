<template>
  <Typed :options="options">
    <h1 class="typing text-3xl font-bold text-white drop-shadow-lg"></h1>
  </Typed>
</template>

<script setup lang="ts">
import { Typed } from '@duskmoon/vue3-typed-js'
const options = {
  strings: ['Inam Nurul Fuady', 'Software Engineer', 'Tugas 1 Front-End with VUE.js'],
  loop: true,
  typeSpeed: 90,
  showCursor:false
}
</script>
