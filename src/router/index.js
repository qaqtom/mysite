import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.js'
import titleController from '../Utils/titleController';

if (!window.VueRouter) {
  Vue.use(VueRouter);
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  mode: 'hash',
  routes,
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;