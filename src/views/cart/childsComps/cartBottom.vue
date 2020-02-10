<template>
    <div class="bottom-menu">
        <div class="select-all">
            <check-button class="eddcheck" 
                          :is-checked='checkClick' @click.native="allClick"></check-button>
            <span>全选</span>
        </div>
        <span class="total-price">合计: ¥{{totalPrice}}</span>
        <span class="buy-product">去计算({{endCount}})</span>
    </div>
</template>

<script>
import checkButton from 'components/content/cartCheck/cartCheckBar.vue'

export default {
    components: {
        checkButton
    },
    props: {
        cartList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        totalPrice() {
            return this.cartList.filter(item => {
                return item.check
            }).reduce((preValue, item) => {
                return preValue + item.count * item.newPrice
            }, 0).toFixed(2)
        },
        endCount() {
            return this.cartList.reduce((preValue, item) => {
                return preValue + item.count
            },0)
        },
        checkClick() {
            //如果有未选中的,返回false给isChecked
            if(this.cartList.length === 0) return false
            return !(this.cartList.find(item => !item.check))
        }
    },
    methods: {
        allClick() {
            if(this.cartList.find(item => !item.check)) {
                //遍历未选中的,并修改其值
                this.cartList.forEach(item => item.check = true)
            }
        }
    }
}
</script>

<style scoped>
    .bottom-menu {
        font-size: 14px;
        color: #888;
        line-height: 44px;
        display: flex;
    }

    .bottom-menu .select-all {
        /* position: fixed; */
        line-height: 0;
        width: 80px;
    }

    .eddcheck {
        position: relative;
        top:30%;
        left: 30%;
    }

    .select-all span {
        position: relative;
        left: 55%;
        top: 5px;
    }

    .bottom-menu .total-price {
        margin-left: 15px;
        flex: 1;
        font-size: 16px;
        color: #666;
    }

    .bottom-menu .buy-product {
        background-color: orangered;
        color: #fff;
        width: 100px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        float: right;
    }
</style>