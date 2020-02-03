<template>
  <div id="home">
      <top-bar class="homeTop"><div slot="center">MoMall</div></top-bar>
      <home-swiper :banners="banners" class="home-s"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature/>
      <tab-con class="tab-con" :titles="['流行','新款','其他']" @click="tabClick"></tab-con>


      <ul>
        <li>1</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
      </ul>
  </div>
</template>

<script>
  import TopBar from 'components/common/topbar/TopBar.vue'
  import TabCon from 'components/content/tabCon/TabCon.vue'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeature from './childComps/HomeFeatureView'


  import {getHomeMultidata} from 'network/home'

  export default {
    components: {
      TopBar,
      TabCon,

      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    // 组件加载完，创建生命周期函数created请求数据
    created() {
      getHomeMultidata().then(res => {
        // 拿到的数据为数组类型
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style>
  .homeTop {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    box-shadow: 0 2px 1px rgba(100, 100, 100, .05);
  }

  .home-s {
    margin-top: 44px;
  }

  .tab-con {
    position: sticky;
    top: 44px;
  }
</style>