<template>
  <div>
     <Page @pageChange="handlePageChange($event)" :current="current" :total="total"></Page>
  </div>
</template>

<script>
import Page from "./index.vue";
export default {
  components: {
    Page,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("加载当前页数据");
    },
  },
};
</script>

<style scoped></style>
