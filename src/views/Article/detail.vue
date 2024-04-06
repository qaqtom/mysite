<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <ArticleDetail :article="data" v-if="data" />
        <ArticleComment v-if="!isLoading"></ArticleComment>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <ArticleToc :toc="data.toc" v-if="data"/>
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixComponents/fetchData.js";
import Layout from "@/components/Layout.vue";
import { getArticle } from "@/api/article.js";
import ArticleDetail from "./components/articleDetail.vue";
import ArticleToc from "./components/articleToc.vue";
import ArticleComment from "./components/articleComment.vue";
import titleController from "@/Utils/titleController";
export default {
  components: {
    Layout,
    ArticleToc,
    ArticleDetail,
    ArticleComment
  },
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      let resp = await getArticle(this.$route.params.id);
      if(!resp){
        this.$router.push("/404");
        return;
      }
      titleController.setRouteTitle(resp.title);
      return resp;
    },
    handleScroll(){
      //触发事件函数，事件名为maiScroll，该事件绑定到监听函数上
      // 事件的参数为mainContainer，用该参数带入到事件的全部函数执行
      this.$bus.$emit("mainScroll",this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop){
      this.$refs.mainContainer.scrollTop = scrollTop;
    }
  },
  mounted(){
    this.$bus.$on("setMainScroll",this.handleSetMainScroll);
    this.$refs.mainContainer.addEventListener("scroll",this.handleScroll);
  },
  beforeDestroy(){
    this.$bus.$emit("mainScroll");
    this.$refs.mainContainer.removeEventListener("scroll",this.handleScroll);
    this.$bus.$off("setMainScroll",this.handleSetMainScroll);
  },
  updated(){
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  }
};
</script>

<style>
.main-container{
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>