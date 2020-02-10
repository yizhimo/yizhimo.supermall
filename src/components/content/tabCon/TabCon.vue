<template>
  <div class="tab-con">
      <div class="tab-con-item" v-for="(item,index) in titles" :key="index"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)"
      >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0   
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick', index)
        }
    }
}
</script>

<style>
    .tab-con {
        display: flex;
        text-align: center;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        text-align: 40px;
        background-color: #ffffff;
        z-index: 10;
    }
    .tab-con-item {
        flex: 1;
    }
    .tab-con-item span {
        padding: 4px;
    }
    .active {
        color: var(--color-high-text);
    }
    .active span {
        border-bottom: 2px solid var(--color-high-text);
    }
</style>