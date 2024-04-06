import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import showMessage from './Utils/showMessage.js';
// import "./mock/index";
import "./eventBus";
Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive('loading', vLoading);
Vue.directive("lazy", vLazy);

import store from "./store";
store.dispatch("setting/fetchSetting");

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

//测试
// import * as articleApi from "./api/article";
// articleApi.getArticles(2, 20, 3).then(r => {
//   console.log("博客内容", r);
// });

// articleApi.getArticleTypes().then(r => {
//   console.log("博客分类", r);
// })

// import { getArticle } from "./api/article";
// getArticle("asdfasdf").then((r) => {
//   console.log(r);
// });

// import { postComment } from "./api/article";
// postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogId: "123",
// }).then((r) => {
//   console.log(r);
// });

// import { getComments } from "./api/article";
// getComments("123123").then((r) => {
//   console.log(r);
// });
