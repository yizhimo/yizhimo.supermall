<template>
  <div class="recommends">
      <div v-for="(item,index) in recommends" :key="index" class="re-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommends {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 10px 0;
        border-bottom: 6px solid #eee
    }

    .re-item {
        flex: 1;
    }

    .re-item img {
        width: 60px;
        height: 60px;
        margin-bottom: 8px;
    }
</style>