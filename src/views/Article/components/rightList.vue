<template>
  <ul right-list-container>
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ selected: item.isSelected }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        @click="handleClick(item)"
        class="aside"
        :class="{ selected: item.isSelected }"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @click="handleClick"></RightList>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelected) {
        this.$emit("click", item);
        // console.log(item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
ul {
  list-style: none;
  padding: 0;
  ul {
    margin-left: 20px;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .selected {
      color: @warn;
      font-weight: bold;
    }
  }
}

.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>