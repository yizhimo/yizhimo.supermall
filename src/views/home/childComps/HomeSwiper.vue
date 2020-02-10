<template>
  <div>
      <swiper>
          <swiper-item v-for="(item,index) in banners" :key="index">
              <a :href="item.link">
                  <img :src="item.image" alt="" @load="imageLoad">
              </a>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
    components: {
        Swiper,
        SwiperItem,
    },

    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            isLoad: false,    
        }
    },
    methods: {
        imageLoad() {
            //不让HomeSwiper多次发出事件
            if(!this.isLoad) {
                this.$emit('imageLoad')
                this.isLoad = true
            }
        }
    }
}
</script>

<style>

</style>