<template>
  <div class="article-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @click="handleClick" />
  </div>
</template>

<script>
import RightList from "./rightList.vue";
import fetchData from "@/mixComponents/fetchData.js";
import { getArticleTypes } from "@/api/article.js";
export default {
  
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    limit() {
      return +this.$route.query.limit || 10;
    },
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    list() {
      //计算总数
      const totalArticleCount = this.data.reduce((a, b) => {
        return a + b.articleCount;
      }, 0);
      //加上全部的选项
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      //映射返回结果
      return result.map((it) => ({
        ...it,
        isSelected: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getArticleTypes();
    },
    handleClick(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.article-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>