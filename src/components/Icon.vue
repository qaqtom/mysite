<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-zhuye1",
  warn: "icon-jinggao",
  info:"icon-info",
  success:"icon-success",
  error:"icon-error",
  weixin: "icon-weixin",
  qq: "icon-qq",
  empty:"icon-zu797",
  github:"icon-github",
  email:"icon-youxiang",
  gitee:"icon-logo",
  about:"icon-guanyuwomen",
  project:"icon-icongongkaidaimaxiangmu",
  message:"icon-liuyanban",
  article:"icon-16",
  arrowUp:"icon-xiangshangxiangxiajiantou",
  arrowDown:"icon-xiangshangxiangxiajiantou1",
};
export default {
    props:{
        type:{
            type:String,
            required:true,
        }
    },
    computed:{
        fontClass(){
            return classMap[this.type];
        },
    },
}
</script>

<style scoped>
@import url("//at.alicdn.com/t/c/font_4455111_aww7pq49yig.css");
.iconfont{
    color: inherit;
    font-size: inherit;
}
</style>