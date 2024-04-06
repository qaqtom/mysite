<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <!-- 轮播图 -->
    <ul
      class="carousel-container"
      :style="{ marginTop: marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <!-- 轮播图 -->
        <CarouselItem :carousel="item"></CarouselItem>
      </li>
    </ul>
    <!-- 向上箭头 -->
    <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index > 0">
      <Icon type="arrowUp"></Icon>
    </div>
    <!-- 向下箭头 -->
    <div
      class="icon icon-down"
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
    >
      <Icon type="arrowDown"></Icon>
    </div>
    <!-- 侧边跳转小点 -->
    <div class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: index === i }"
        @click="switchTo(i)"
      ></li>
    </div>
    <!-- <Loading v-if="isLoading"></Loading> -->
  </div>
</template>

<script>
import CarouselItem from "./carouselItem.vue";
import Icon from "@/components/Icon.vue";
// import { test } from "@/api/test.js";
import { mapState } from "vuex";
// import fetchData from "@/mixComponents/fetchData.js";
// import Loading from "@/components/Loading.vue";
export default {
  // mixins:[fetchData([])],
  components: {
    CarouselItem,
    Icon,
    // Loading,
  },
  data() {
    return {
      // items: [],
      index: 0,
      containerHeight: 0,
      switching: false,
      // isLoading: true,
    };
  },
  // async created() {
  //   this.items = await test();
  //   this.isLoading = false;
  // },
  created(){
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner",["loading","data"]),
  },
  methods: {
    // async fetchData(){
    //   return await test(); 
    // },
    switchTo(i) {
      this.index = i;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    //处理滚轮事件
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      //往下滚动
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        console.log("qaq");
        this.switching = true;
        this.index++;
      }
      //网上滚动
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      }
    },
    //处理动画结束事件
    handleTransitionEnd() {
      this.switching = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  // background: lightblue;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .icon {
    font-size: 30px;
    position: absolute;
    cursor: pointer;
    @jumpDistance: 20px; //弹跳高度
    @gap: 25px; //箭头距离边框的高度
    &.icon-up {
      left: 50%;
      top: @gap;
      transform: translateX(-50%);
      animation: jumpDown 2s infinite;
    }
    &.icon-down {
      left: 50%;
      bottom: @gap;
      transform: translateX(-50%);
      animation: jumpUp 2s infinite;
    }
    @keyframes jumpDown {
      0% {
        transform: translateY(@jumpDistance);
      }
      50% {
        transform: translateY(-@jumpDistance);
      }
      100% {
        transform: translateY(@jumpDistance);
      }
    }
    @keyframes jumpUp {
      0% {
        transform: translateY(-@jumpDistance);
      }
      50% {
        transform: translateY(@jumpDistance);
      }
      100% {
        transform: translateY(-@jumpDistance);
      }
    }
  }
  .indicator {
    list-style: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    li {
      width: 7px;
      height: 7px;
      margin-bottom: 10px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
</style>