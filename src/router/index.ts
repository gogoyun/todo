import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import { useUserStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddView.vue'),
    },
  ],
})

function isUserEmpty() {
  const storeUser = useUserStore();
  const userData = storeUser.$state.userData;
  return (
    !userData ||
    (typeof userData === 'object' && Object.keys(userData).length === 0)
  )
}

router.beforeEach((to, from) => {
  const storeUser = useUserStore();
  if ( isUserEmpty() && to.name !== 'signin' && to.name !== 'signup') {
    storeUser.preLoginPath = to.fullPath;
    return { name: 'signin' }
  }
})

export default router
