<template>
  <div ref="wrapper">
        <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            scroll: null,    
        }
    },
    props: {
        probeType: {
            type: Number,
            default() {
                return 1
            }
        },
        pullUpLoad: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    // 必须得组件创建完调用
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true,
            // 用户自己传参数动态决定滚动侦测方式
            probeType: this.probeType,
            //根据用户自己传参数决定是否上拉加载更多
            pullUpLoad: this.pullUpLoad,
        })

        // 传出去处理位置信息
        this.scroll.on('scroll',position => {
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',() => {
            this.$emit('loadMore')
        })
    },
    methods: {
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        scrollTo(x, y, time) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style>

</style>