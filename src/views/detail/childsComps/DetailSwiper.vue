<template>
    <div>
        <swiper class="dtSwiper">
            <swiper-item v-for="(item,index) in topImages" 
                        :key='index' 
                        class="dSwiperItem"> 
                <img :src="item" alt="">
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
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .dtSwiper {
        height: 280px;
        overflow: hidden;
    }
</style>