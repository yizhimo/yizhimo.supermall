<template>
  <div id="profile">
    <top-bar class="profileTop"><div slot="center">个人中心</div></top-bar>
    <user></user>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view></list-view>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'
import User from './childCopms/User.vue'
import ListView from './childCopms/ListView.vue'

export default {
  components: {
    TopBar,
    User,
    ListView
  }
}
</script>

<style scoped>
  .profileTop {
    background-color: var(--color-tint);
    color: #fff;

    box-shadow: 0 2px 1px rgba(100, 100, 100, .05);
  }

  .account {
    display: flex;
    padding: 8px 0 4px 0;
  }

  .account :last-child{
    border-right: solid 1px #fff;
  }

  .account-item{
    width: 100%;
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    padding: 20px;
    border-right: solid 1px #f2f2f2;
    color: #666;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }
</style>