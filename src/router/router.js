import VueRouter from 'vue-router';
import List from '../components/List'

const routes = [
  {path: "/", component: List}
];

const router = new VueRouter({
  routes
})

export default router;