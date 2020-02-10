<template>
  <div class="bt">
      <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .bt {
        position: fixed; 
        right: 24px;
        bottom: 66px;
    }
    .bt img{
        width: 43px;
        height: 43px;
        z-index: 999;
    }
</style>