import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { d$auth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/ListView.vue'),
      // protect route
      meta: { auth: true }
    },
    {
      path: '/profile',
      // nested routes
      children: [
        {
          path: '',
          name: 'Login',
          component: () => import('@/views/Profile/LoginView.vue')
        },
        {
          // optional and dynamic params
          path: 'detail/:id?',
          name: 'Authenticated',
          component: () => import('@/views/Profile/AuthenticatedView.vue'),
          // set protected route
          meta: { auth: true }
        }
      ]
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('@/views/Profile/SignUpView.vue'),
      meta: { guestRoutes: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Profile/LoginView.vue'),
      meta: { guestRoutes: true }
    },
    {
      // get all routes
      path: '/:pathMatch(.*)*',
      name: 'Match All',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // get auth state
  const loggedIn = d$auth().isLoggedIn
  // if target route requires auth & no logged in user
  // redirect to login
  if (to.meta.auth && !loggedIn) {
    next({ name: 'Login' })
  } else if (to.meta.guestRoutes && loggedIn) {
    // redirect to a different route for logged-in users trying to access guest routes
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
