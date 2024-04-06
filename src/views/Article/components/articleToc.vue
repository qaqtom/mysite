<template>
  <div class="article-toc-container">
    <h2>目录</h2>
    <RightList :list="toWithSelected" @click="handleClick"></RightList>
  </div>
</template>

<script>
import RightList from "./rightList.vue";
import debounce from "@/Utils/debounce";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  methods: {
    handleClick(item) {
      // console.log(item);
      location.hash = item.anchor;
    },
    //为activeAnchor设置正确的值
    setSelect(scrollDom) {
      if(!scrollDom){
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          return;
        }
        //得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          //在规定范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          //在规定范围下方
          return;
        } else {
          //在规定范围上方
          //相当于从上到下每个渲染一遍，直到遇到规定范围内的,或者上一次规定范围内的
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  data() {
    return {
      //要渲染（点中）的数组
      activeAnchor: "",
    };
  },
  computed: {
    //将toc加上isSelected属性
    toWithSelected() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelected: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    //从toc上的数组获取articleDetail中对应的dom元素
    doms() {
      const doms = [];
      //写一个递归函数
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      //运行该函数
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    //这里用this的原因是因为在destroyed的时候也要用到
    this.setSelectDebounce = debounce(this.setSelect,50);
    //为mainScroll事件添加防抖函数setSelect，使得每次滚轮变延迟调用这个防抖函数
    this.$bus.$on("mainScroll",this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll",this.setSelectDebounce);
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>