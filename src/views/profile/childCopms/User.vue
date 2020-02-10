<template>
  <div id="user">
            <div class="enter">
                <img src="~assets/img/profile/enter.svg" alt="">
            </div>
            <div class="phone">
                <div>登录/注册</div>
                <div class="phoneD">
                    <img src="~assets/img/profile/phone.svg" alt="">
                    <span>暂无绑定手机号</span>
                </div>    
            </div>
      <div class="right">
          <img src="~assets/img/profile/back.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #user {
        background-color: var(--color-tint);
        display: flex;
        color: #fff;
        font-size:14px; 
        padding: 5px 0 10px 0;
    }
    .enter {
        width: 80px;
        text-align: center;
    }
    .enter img{
        width: 90%;
        height: 90%;
        margin-top: 2px;
    }
    .right {
        width: 50px;
        text-align: center;
    }
    .right img{
        width: 30%;
        height: 30%;
        margin-top: 50%;
    }
    .phone {
        flex: 1;
        padding-left: 2%;
        margin-top: 18px;
    }
    .phone span{
        font-size: 12px;
    }
    .phone img{
        width: 10%;
        height: 10%;
    }
    .phoneD {
        margin: 5px 0 0 -2px;
    }
</style>