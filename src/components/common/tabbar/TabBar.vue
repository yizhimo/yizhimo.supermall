<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    /* z-index: 999; */

    /* 往下移 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    text-align: center;
    /* 一般都为49 */
    height: 49px;
    
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
  }

</style>