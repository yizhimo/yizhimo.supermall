<template>
  <div id="cart">
    <top-bar class="cartTop"><div slot="center">购物车({{cartCount}})</div></top-bar>
    <scroll class="content" ref="scroll">
      <cart-list class="cartL" :cart-list='cartList'></cart-list>
    </scroll>
    <cart-bottom class="cartB" :cart-list='cartList'></cart-bottom>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import cartList from './childsComps/cartList.vue'
import cartBottom from './childsComps/cartBottom.vue'

export default {
  components: {
    TopBar,
    Scroll,
    cartList,
    cartBottom
  },
  computed: {
    cartList() {
      return this.$store.state.cartList
    },
    cartCount() {
      return this.$store.state.cartList.length
    }
  },

  //添加商品后刷新重新计算滚动高度
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
  }
  .content {
    height: calc(100% - 44px - 49px - 44px);
    overflow: hidden;
  }
  .cartTop {
    position: relative;
    background-color: var(--color-tint);
    color: #fff;
  }
  .cartB {
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;

    height: 44px;
    width: 100%;
    background-color: #eee;
  }
</style>