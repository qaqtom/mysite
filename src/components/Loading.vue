<template>
  <img :src="loadingUrl" class="loading-container">
</template>

<script>
import loadingUrl from "@/assets/loading.svg"
export default {
    data(){
        return{
            loadingUrl,
        };
    },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.loading-container{
    .self-center();
}

</style>