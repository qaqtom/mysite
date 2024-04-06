<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <!-- 语法糖 <DataForm v-on="{submit:handleSubmit}" />
    <DataForm v-on:submit="handleSubmit" /> -->
    <h3>
        {{title}}
        <span>{{subTitle}}</span>
    </h3>
    <DataList :list="list"> </DataList>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./dataForm.vue";
import DataList from "./dataList.vue";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    //评论列表
    title: {
      type: String,
      default: "",
    },
    //评论总数
    subTitle: {
      type: String,
      default: "",
    },
    //评论人数组
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>