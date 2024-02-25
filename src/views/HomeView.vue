<template>
  <div class="flex flex-col w-full relative top-[50vh]">
    <h1 class="text-4xl font-bold text-white mx-auto drop-shadow-lg">
      In'am Nurul Fuady
    </h1>
    <div class="flex flex-row mx-auto">
      <Typed :options="options">
        <h1 class="typing text-3xl font-bold text-white drop-shadow-lg"></h1>
      </Typed>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Typed } from '@duskmoon/vue3-typed-js'
const options = {
  strings: ['Front-End', 'Back-End', 'Full-Stack'],
  loop: true,
  typeSpeed: 90,
  showCursor: false
}
</script>
