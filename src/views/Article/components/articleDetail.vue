<template>
  <div class="blog-detail-container">
    <h1>{{ article.title }}</h1>
    <div class="aside">
      <span>日期：{{ formateDate(article.createDate) }}</span>
      <span>浏览：{{ article.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ article.commentNumber }} </a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: article.category.id,
          },
        }"
        >{{ article.category.name }}
      </RouterLink>
    </div>
    <div class="markdown-body" v-html="article.htmlContent"></div>
  </div>
</template>

<script>
import formateDate from "@/Utils/formatDate.js";
import "highlight.js/styles/github.css";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formateDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/markdown.css";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
markdown-body {
  margin: 2em 0;
}
</style>