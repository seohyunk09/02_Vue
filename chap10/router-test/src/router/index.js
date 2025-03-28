import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import Test from '@/pages/Test.vue';
import TestChild from '@/pages/TestChild.vue';

const routes = [
  {
    /* 하나의 라우트 */
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    /* 하나의 라우트 */ path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    /* 라우트 레벨에서 코드가 분리된다! = 빌드 단계에서~ */
  },

  { path: '/members', component: Members },
  { path: '/members/:id', component: MemberInfo },
  {
    path: '/test',
    component: Test,
    children: [{ path: ':num', component: TestChild, name: 'test/num' }],
  },
  { path: '/videos', component: Videos, name: 'videos' },
  /*  { path: '/videos', component: VideoPlayer, name: 'videos' }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
/*  */
