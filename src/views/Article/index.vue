<template>
  <Layout>
    <ArticleList></ArticleList>
    <template v-slot:right>
      <ArticleCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import ArticleList from "./components/articleList.vue";
import ArticleCategory from "./components/articleCategory.vue"

export default {
  components:{
    Layout,
    ArticleList,
    ArticleCategory,
  },
  // created(){
  //   // console.log(this.$route);
  // }
}
</script>

<style>

</style>