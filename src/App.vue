<script setup>
// use script setup api
// import { computed } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'

import SideBar from './components/SideBar.vue'
// import auth store
import { d$auth } from '@/stores/auth'

d$auth().a$setUser()

// set username from auth store with computed property
// const username = computed(() => d$auth().g$user?.id)
</script>

<template>
  <div class="md:flex min-w-[100vw] backgroundsection">
    <SideBar />
    <div class="w-full h-screen">
      <div class="h-[100%] w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
