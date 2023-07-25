import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // Using Hash history so I can deploy to GH Pages
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Onboarding',
      component: () => import('../views/OnboardingView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ]
});

export default router;
