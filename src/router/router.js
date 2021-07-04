import Main from '@/pages/Main';
import Posts from '@/pages/v-post-page';
import PostInfo from '@/pages/v-post-info';
import PostsStore from '@/pages/v-post-page-store';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
     path: "/", component: Main
  },
  {
     path: "/posts", component: Posts
  },
  {
     path: "/posts/:id", component: PostInfo
  },
  {
     path: "/store", component: PostsStore
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router