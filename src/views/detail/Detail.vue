<template>
    <div id="detail">
        <detail-top-bar class="topHome" 
                        @dtBar="dtBarClick" ref="dTop"></detail-top-bar>
        <scroll class="wrapper" 
                ref="scroll"
                :probe-type = 3 
                @scroll="pScroll">
            <div>
                <detail-swiper :top-images='topImages' ref="swiper"></detail-swiper>
                <detail-goods :goods='goods'></detail-goods>
                <detail-shop :shop='shop' ref="shop"></detail-shop>
                <detail-info :detail-info='detailInfo' @imageLoad="imageLoad"></detail-info>
                <detail-param :param-info='paramInfo' ref="param"></detail-param>
                <detail-comment :comment-info='commentInfo' ref="comment"></detail-comment>
                <!-- <goods-list :goods-list='recommends'></goods-list> -->
            </div>
        </scroll>
        <back-top @click.native="topClick" v-show="showBack">
            <img src="~assets/img/common/top.png" alt="">
        </back-top>
        <detail-button @addCart='addCart'></detail-button>
    </div>
</template>

<script>
    import Scroll from 'components/common/scroll/Scroll.vue'
    import {debounce} from 'common/utils'

    import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'

    import DetailTopBar from 'views/detail/childsComps/DetailTopBar.vue'
    import DetailSwiper from 'views/detail/childsComps/DetailSwiper.vue'
    import DetailGoods from 'views/detail/childsComps/DetailGoods.vue'
    import DetailShop from 'views/detail/childsComps/DetailShop.vue'
    import DetailInfo from 'views/detail/childsComps/DetailInfo.vue'
    import DetailParam from 'views/detail/childsComps/DetailParam.vue'
    import DetailComment from 'views/detail/childsComps/DetailComment.vue'
    import DetailButton from 'views/detail/childsComps/DetailButton.vue'
    // import GoodsList from 'components/content/goods/GoodsList.vue'
    import BackTop from 'components/content/backTop/BackTop.vue'

    export default {
        /*
        **详情页不要使用keep-alive，需要每次创建(created)
        **去<router-view/>那exclude
        */
        name: "Detail",
        components: {
            Scroll,

            DetailTopBar,
            DetailSwiper,
            DetailGoods,
            DetailShop,
            DetailInfo,
            DetailParam,
            DetailComment,
            DetailButton,
            // GoodsList,
            BackTop
        },
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                // recommends: [],
                themeTopYs: [],
                getThemeTopY: null,
                curreyIndex: 0,
                showBack: false,
            }
        },
        created() {
            // 保存传入的iid
            this.iid = this.$route.params.iid
            getDetail(this.iid).then(res => {
                const data = res.result;
                //获取顶部轮播
                this.topImages = data.itemInfo.topImages;
                //获取商品基本信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                //获取店铺信息
                this.shop = new Shop(data.shopInfo);
                //获取商品详情信息
                this.detailInfo = data.detailInfo; 
                //获取参数信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
                //保存评论(如果有)
                if(data.rate.list) {
                    this.commentInfo = data.rate.list[0];
                }
            })
            this.getThemeTopY = debounce(() => {
                this.themeTopYs = []
                this.themeTopYs.push(0)
                this.themeTopYs.push(this.$refs.shop.$el.offsetTop)
                this.themeTopYs.push(this.$refs.param.$el.offsetTop)
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                this.themeTopYs.push(Number.MAX_VALUE)
            },100)

            //请求详情页数据
            // getRecommend().then((res, err) => {
            //     if(err) return
            //     this.recommends = res.data.list
            // })

        },
        
        methods: {
            imageLoad() {
                this.$refs.scroll.refresh()
                this.getThemeTopY()
            },
            dtBarClick(index) {
                this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],200)
            },
            topClick() {
                this.$refs.scroll.scrollTo(0, 0, 500)
            },
            pScroll(position) {
                this.showBack = -position.y > 1000
                for(let i=0; i<this.themeTopYs.length-1; i++){
                    if(this.curreyIndex !== i && (-position.y>=this.themeTopYs[i] && -position.y<this.themeTopYs[i+1])){
                        this.curreyIndex = i
                        this.$refs.dTop.curreIndex = this.curreyIndex
                    }
                }
            },
            addCart() {
                // 1.创建对象
                const obj = {}
                // 2.对象信息
                obj.iid = this.iid;
                obj.imgURL = this.topImages[0]
                obj.title = this.goods.title
                obj.desc = this.goods.desc;
                obj.newPrice = this.goods.nowPrice;
                // 3.添加到Store中
                this.$store.dispatch('addCart', obj).then(res => {
                    //调用自己封装的toast组件方法
                    this.$toast.show(res, 2000)
                })    
            }
        }
    }
</script>

<style scoped>
    #detail {
        position: relative;
        height: 100vh;
        background-color: #fff;
        z-index: 999;
    }
    .topHome {
        position: relative;
        background-color: #fff;
    }
    .wrapper {
        height: calc(100% - 44px - 49px);
        /* position: absolute;
        overflow: hidden;
        top: 44px;
        bottom: 49px; */
    }
</style>