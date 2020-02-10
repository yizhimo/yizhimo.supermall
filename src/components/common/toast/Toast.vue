<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            isShow: false    
        }
    },
    methods: {
        show(message, time) {
            this.isShow = true
            this.message = message

            setTimeout(() => {
                this.isShow = false
                this.message = ''
            },time)
        }
    }
}
</script>

<style>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        padding: 8px 10px;
        z-index: 999;

        color: #fff;
        background-color: rgba(0,0,0,.7);
    }
</style>