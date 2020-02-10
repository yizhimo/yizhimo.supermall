<template>
  <div>
    <tab-bar>
      <!-- tab-bar-item可以传入activeColor(颜色)参数决定颜色 -->
      <tab-bar-item path="/home">
        <img slot="item-img" src="~assets/img/tabbar/shouye.svg" alt="">
        <img slot="item-img-b" src="~assets/img/tabbar/shouye-b.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-img" src="~assets/img/tabbar/fenlei.svg" alt="">
        <img slot="item-img-b" src="~assets/img/tabbar/fenlei-b.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <img slot="item-img" src="~assets/img/tabbar/gouwuche.svg" alt="">
        <img slot="item-img-b" src="~assets/img/tabbar/gouwuche-b.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="item-img" src="~assets/img/tabbar/wode.svg" alt="">
        <img slot="item-img-b" src="~assets/img/tabbar/wode-b.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style>
  
</style>
