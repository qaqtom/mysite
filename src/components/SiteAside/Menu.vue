<template>
  <ul class="menu-container">
    <li
      v-for="item in items"
      :key="item.link"
    >
      <RouterLink :exact="item.exact" :to="{name:item.name}">
        <div class="icon">
          <Icon :type="item.icon"></Icon>
        </div>
        <span>{{ item.title }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "article",
          exact: false,
        },
        {
          name:"About",
          title: "关于",
          icon: "about",
          exact: true,
        },
        {
          name:"Project",
          title: "项目",
          icon: "project",
          exact: true,
        },
        {
          name:"Message",
          title: "留言板",
          icon: "message",
          exact: true,
        },
      ],
    };
  },
  
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  list-style: none;
  padding-top: 10px;
  margin: 0;
  li {
    @itemHeight: 30px;
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    a {
      padding-left: 40px;
      display: flex;
      align-items: center;
      font-size: 18px;
      .icon {
        font-size: 27px;
        margin-right: 10px;
      }
      &:hover {
        color: #fff;
      }
      &.router-link-active {
      background: darken(@dark,70%);
      }
    }
  }
}
</style>