<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar"></Avatar>
      <h1>{{ data.siteTitle }}</h1>
    </template>
    <Menu></Menu>
    <Contact v-if="data"></Contact>
    <p v-if="data" class="footer">{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "../Avatar.vue";
import Menu from "./Menu.vue";
import Contact from "./Contact.vue";
import txUrl from "@/assets/tx.jpg";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {
      txUrl,
    };
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  h1 {
    text-align: center;
    color: @lightWords;
    font-size: 1.2em;
    margin-top: 10px;
  }
  .avatar-container {
    margin: 0 auto;
  }
  .footer {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    color: @lightWords;
  }
}
</style>