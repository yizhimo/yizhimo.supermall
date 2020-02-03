<template>
  <div class="tab-bar-item" @click="btnClick">
      <!-- <img src="../../assets/img/tabbar/shouye.svg" alt="">
      <div>首页</div> -->
      <!-- 不能写死，动态获取，使用插槽 -->
      <div v-if="!isActive"><slot name="item-img"></slot></div>
      <div v-else><slot name="item-img-b"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#1296db',
        }
    },
    methods: {
        btnClick() {
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    }
}
</script>

<style>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;

        /* 往下移 */
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
        /* 一般都为49 */
        height: 49px;

        font-size: 14px;
        color: #707070;

    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 4px;
        /* 清除img标签下的预留 */
        vertical-align: middle;


    }
</style>