<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <RouterView></RouterView>
      <!-- <template v-slot:right>
        <div class="aside">
          <RightList :list="list" @click="handleClick"></RightList>
        </div>
      </template> -->
      
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import SiteAside from "./components/SiteAside/SiteAside.vue";
import ToTop from "./components/ToTop.vue";
export default {
  // name: "qaq",
  components: {
    SiteAside,
    Layout,
    ToTop,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>