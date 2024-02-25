<template>
  <div class="p-4 flex w-full justify-center h-full items-center">
    <div class="bg-white p-4 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-6 text-center">
        <i class="pi pi-user mx-3"></i> User Profile
      </h1>
      <div v-if="isLoggedIn" class="text-start">
        <p class="mb-4">User Information:</p>
        <ul class="list-none">
          <li><span class="font-bold">ID:</span> {{ userInfo.id }}</li>
          <li><span class="font-bold">Name:</span> {{ userInfo.name }}</li>
          <li><span class="font-bold">Role:</span> {{ userInfo.role.name }}</li>
        </ul>
      </div>
      <div v-else class="text-center">
        <p>User not logged in.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { d$auth } from '@/stores/auth'

export default {
  name: 'UserProfile',
  computed: {
    isLoggedIn() {
      return d$auth().isLoggedIn
    },
    userInfo() {
      return d$auth().g$user
    }
  }
}
</script>
