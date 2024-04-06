<template>
  <div class="empty-container">
    <Icon type="empty"></Icon>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "./Icon.vue"
export default {
    components:{
        Icon, 
    },
    props:{
        text:{
            type:String,
            default:"无数据",
        },
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
    .self-center();
    color: @gray;
    text-align: center;
    p{
        margin-top: 10px;
    }
}
.icon-container{
    font-size: 70px;
    
}
</style>