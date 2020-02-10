<template>
  <top-bar class="detail-top">
      <div slot="left" class="dLeft" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="dCenter">
          <span v-for="(item,index) in titles" 
                :key="index" 
                class="sCenter" 
                :class="{'active': curreIndex === index}" 
                @click="sClick(index)">{{item}}</span>
      </div>
  </top-bar>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'

export default {
    components: {
            TopBar,
    },
    data() {
        return {
            titles: ['商品', '店铺', '参数', '评论'],
            curreIndex: 0   
        }
    },
    methods: {
        sClick(index) {
            this.curreIndex = index
            this.$emit('dtBar',index)
        },
        backClick() {
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .dLeft {
        margin-top: 5px;
    }
    .dLeft img{
        width: 35%;
        height: 35%;
    }
    .dCenter {
        display: flex;
    }
    .sCenter {
        flex: 1;
    }
    .active {
        color: var(--color-high-text);
    }
</style>