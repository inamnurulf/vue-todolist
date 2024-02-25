<template>
  <div
    class="md:left-0 md:block md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden relative shadow-xl bg-white flex flex-wrap items-center justify-between md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6', 'hidden')"
        v-bind:class="collapseHide"
      >
        <i class="pi pi-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        to="/"
        v-bind:class="collapseHide"
      >
        Stechoq
      </router-link>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                Stechoq
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                x
              </button>
            </div>
          </div>
        </div>

        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Menu
        </h6>
        <!-- divigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <RouterLink
              to="/"
              class="text-xs uppercase py-3 font-bold block flex items-center"
            >
              <i class="pi pi-home text-black mx-3 text-lg"></i>
              Home
            </RouterLink>
          </li>

          <li class="items-center">
            <RouterLink
              v-if="isLoggedIn"
              to="/list"
              class="text-xs uppercase py-3 font-bold block flex items-center"
            >
              <i class="pi pi-list text-black mx-3 text-lg"></i>
              List
            </RouterLink>
            <RouterLink
              v-else
              to="/login"
              class="text-xs uppercase py-3 font-bold block flex items-center"
            >
              <i class="pi pi-sign-in text-black mx-3 text-lg"></i>
              Sign In
            </RouterLink>
          </li>

          <li class="items-center">
            <RouterLink
              v-if="isLoggedIn"
              :to="{ name: 'Authenticated', params: { id: username ?? '' } }"
              class="text-xs uppercase py-3 font-bold block flex items-center"
            >
              <i class="pi pi-user text-black mx-3 text-lg"></i>
              Profile
            </RouterLink>
            <RouterLink
              v-else
              to="/signUp"
              class="text-xs uppercase py-3 font-bold block flex items-center"
            >
              <i class="pi pi-user-plus text-black mx-3 text-lg"></i>
              Sign Up
            </RouterLink>
          </li>

          <li class="items-center">
            <RouterLink
              to="/about"
              class="text-xs uppercase py-3 font-bold block flex items-center"
            >
              <i class="pi pi-question text-black mx-3 text-lg"></i>
              About
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { d$auth } from '@/stores/auth'

export default {
  data() {
    return {
      collapseShow: 'hidden',
      collapseHide: ''
    }
  },
  methods: {
    toggleCollapseShow: function (classesShow, classesHide) {
      this.collapseShow = classesShow
      this.collapseHide = classesHide
    }
  },
  computed: {
    isLoggedIn() {
      return d$auth().isLoggedIn
    }
  }
}
</script>
