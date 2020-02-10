<template>
  <div id="listview">
    <div class="xiaoxi">
        <img src="~assets/img/profile/xiaoxi.svg" alt="">
        <span>我的消息</span>
    </div>
    <div class="xiaoxi">
        <img src="~assets/img/profile/shangcheng.svg" alt="">
        <span>积分商城</span>
    </div>
    <div class="xiaoxi">
        <img src="~assets/img/profile/huiyuan.svg" class="huiyuan" alt="">
        <span>开通会员</span>
    </div>

    <div class="set">
        <div class="setIn">
            <img src="~assets/img/profile/shezhi.svg" alt="">
            <span>设置</span>
        </div>
        <div class="setIn">
            <img src="~assets/img/profile/guanyu.svg" alt="">
            <span>关于</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #listview {
        padding: 8px 5px 0 5px;
        border-top: solid 5px #f2f2f2;
        color: #666;
    }
    #listview img{
        width: 8%;
        height: 8%;
        margin-top: 15px;
    }
    .xiaoxi {
        position: relative;
        padding: 0 5px 2px 10px;
        border-bottom: solid 2px #f2f2f2;
    }
    .xiaoxi span{
        position: absolute;
        margin: 20px 0 0 20px;
    }
    #listview .huiyuan{
        width: 9%;
        height: 9%;
        margin-right: -3px;
    }

    .set {
        margin-top: 16px;
    }
    .setIn {
        position: relative;
        padding: 0 5px 2px 10px;
        border-bottom: solid 2px #f2f2f2;
    }
    .setIn span{
        position: absolute;
        margin: 20px 0 0 20px;
    }
</style>