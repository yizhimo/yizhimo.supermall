<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addToCart">加入购物车</div>
            <div class="buy">立即购买</div>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        addToCart() {
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
    .bottom-bar {
        height: 49px;
        position: fixed;
        background-color: #f6f6f6;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);

        display: flex;
        text-align: center;
    }

    .bar-item {
        flex: 1;
        display: flex;
    }

    .bar-item>div {
        flex: 1;
    }

    .bar-left .text {
        font-size: 13px;
    }

    .bar-left .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 6px auto 0;
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }

    .bar-left .service {
        background-position:0 -54px;
    }

    .bar-left .shop {
        background-position:0 -98px;
    }

    .bar-right {
        font-size: 14px;
        color: #fff;
        line-height: 49px;
    }

    .bar-right .cart {
        background-color: #ff5777;
        color:  #fff;
    }

    .bar-right .buy {
        background-color: rgb(255, 66, 32)
    }
</style>