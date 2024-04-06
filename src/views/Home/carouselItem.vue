<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-imag" ref="image" :style="setStyle">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="handleLoad"
      ></ImageLoader>
    </div>
    <div class="test">
      横坐标：{{ mouseX.toFixed(2) }}
      <br />
      纵坐标：{{ mouseY.toFixed(2) }}
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader.vue";
export default {
  components: {
    ImageLoader,
  },
  props: {
    carousel: {
      type: Object,
    },
  },
  data() {
    return {
      titleWidth: 0, //标题文字宽度
      descWidth: 0, //小子的文字高度
      containerSize: null, //容器尺寸
      innerSize: null, //图片尺寸
      mouseX: 0, //鼠标的坐标（相对于container）
      mouseY: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.handleResize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    setStyle() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const exceededWidth = this.innerSize.width - this.containerSize.width;//多出来的宽度
      const exceededHeight = this.innerSize.height - this.containerSize.height;//多出来的高度
      const left = (-exceededWidth / this.containerSize.width) * this.mouseX;
      const top = (-exceededHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    handleLoad() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.style.transition = "1s";
      //强制让浏览器渲染reflow
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleResize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}

// //test
// .carousel-item-container {
//   background: @dark;
//   width: 60%;
//   height: 60%;
//   color: #fff;
//   position: relative;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   border: 3px solid red;
//   z-index: 999;
// }

.carousel-imag {
  width: 120%;
  height: 120%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 30px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
}

.title {
  top: calc(50% - 40px);
  font-size: 2em;
}

.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}

.test {
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
}
</style>