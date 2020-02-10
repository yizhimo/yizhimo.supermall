<template>
  <div class="goodslistitem" @click="inImage">
    <img :src="this.goodsi.show.img" alt="" @load="imageLoad">
    <div class="goods-info">
        <p>{{goodsi.title}}</p>
        <span class="price">¥{{goodsi.price}}</span>
        <span class="collect">{{goodsi.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        goodsi: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imageLoad() {
            this.$bus.$emit('imageLoad')
        },
        inImage() {
            this.$router.push('/detail/'+this.goodsi.iid)
        }
    },

    // computed: {
    //   getImg() {
    //     return this.goodsi.image || this.goodsi.show.img
    //   }
    // }

}
</script>

<style scoped>
    .goodslistitem {
        position: relative;
        padding-bottom: 40px;
        width: 48%;
    }
    .goodslistitem img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
    .goods-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8px;
        font-size: 12px;
        overflow: hidden;
        text-align: center;
    }
    .goods-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .goods-info .collect {
        position: relative;
    }
    .goods-info .collect::before{
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>