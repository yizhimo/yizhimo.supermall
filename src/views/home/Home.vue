<template>
  <div id="home">
      <top-bar class="homeTop"><div slot="center">MoMall</div></top-bar>
      <tab-con v-show="isTabFixed"
              ref="con1"
              :titles="['流行','新款','其他']" 
              @tabClick="tabClick"
              class="con1"></tab-con>
      <scroll class="sContent" ref="scroll" 
              :probe-type="3"
              :pull-up-load="true" 
              @scroll="pScroll" 
              @loadMore="loadMore">
        <div>
          <home-swiper :banners="banners" @imageLoad="imageLoad"/>
          <home-recommend-view :recommends="recommends"/>
          <home-feature/>
          <tab-con :titles="['流行','新款','其他']" 
                    @tabClick="tabClick" 
                    ref="con2"></tab-con>
          <goods-list :goodsList="goodsList[currentType].list"></goods-list>
        </div>
      </scroll>
      <back-top @click.native="topClick" v-show="showBack">
        <img src="~assets/img/common/top.png" alt="">
      </back-top>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'

  import TopBar from 'components/common/topbar/TopBar.vue'
  import TabCon from 'components/content/tabCon/TabCon.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import BackTop from 'components/content/backTop/BackTop.vue'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeature from './childComps/HomeFeatureView'

  import {getHomeMultidata, getHomeData} from 'network/home'
  import {debounce} from 'common/utils'

  export default {
    components: {
      Scroll,

      TopBar,
      TabCon,
      GoodsList,
      BackTop,

      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goodsList: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        showBack: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      //保存当前位置
      this.saveY = this.$refs.scroll.getScrollY()
    },
    // 组件加载完，创建生命周期函数created请求数据
    created() {
        this.getHomeUp()
        
        this.getGoods('pop')
        this.getGoods('new')
        this.getGoods('sell')
    },
    mounted() {
      // 防抖请求
      const pullLoadMore = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('imageLoad',() => {
        pullLoadMore()
      })
    },
    methods: {
      /*
      ** 网路请求的方法
      */
      getHomeUp() {
        // 拿到的数据为数组类型
        getHomeMultidata().then(res => {
          console.log(res)
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getGoods(type) {
        const page = this.goodsList[type].page + 1
        getHomeData(type, page).then(res => {
          this.goodsList[type].list.push(...res.data.list)
          this.goodsList[type].page += 1
          // 完成上拉加载
          this.$refs.scroll.finishUp()
        })
      },

      /*
      ** 事件监听的方法
      */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        // 同步con1和con2的index
        this.$refs.con1.currentIndex = index;
        this.$refs.con2.currentIndex = index;
      },
      pScroll(position) {
        // 决定回顶箭头是否显示
        this.showBack = -position.y > 1000
        // 决定con1是否显示
        this.isTabFixed = -position.y > this.tabOffsetTop
      },
      topClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      loadMore() {
        this.getGoods(this.currentType)
      },
      imageLoad() {
        this.tabOffsetTop = this.$refs.con2.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  #home {
    /* 100%视口高度 */
    height: 100vh;
    position: relative;
  }

  .sContent {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
  }

  .homeTop {
    background-color: var(--color-tint);
    color: #fff;

    box-shadow: 0 2px 1px rgba(100, 100, 100, .05);
  }

  .con1 {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
</style>