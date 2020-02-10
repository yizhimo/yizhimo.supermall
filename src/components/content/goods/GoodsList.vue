<template>
  <div class="goodslist">
      <goods-list-item 
        v-for="(item,index) in goodsList" 
        :key="index" 
        :goodsi="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    components: {
        GoodsListItem,
    },

    props: {
        goodsList: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .goodslist {
        display: flex;
        /* 包裹，根据子组件宽度决定 */
        flex-wrap: wrap;
        /* 均等分 */
        justify-content: space-around;
        /* 微调大盒子padding来调整均等分 */
        padding: 2px;
    }
</style>