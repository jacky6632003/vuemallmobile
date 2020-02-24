<template>
<div id="profile">

 <navbar class="nav-bar ">
      <div slot="center">我的家</div>
    </navbar>
     <UserInfo></UserInfo>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的餘額</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>個
        </div>
        <div class="account-info">我的優惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的積分</div>
      </div>
    </section>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
    
</div>

</template>

<script>
import navbar from '../../components/common/navbar/navbar'
import ListView from './childComps/ListView'
import UserInfo from './childComps/UserInfo'
export default {
  name:'profile',
  components:{
   UserInfo,ListView, navbar
  },
  data(){
    return {
       orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的相惜'},
          {icon: '#point', iconColor: '#fc7b53', info: '積分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '會員卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的購物車'},
          {icon: '#download', iconColor: '#ff8198', info: '下載APP'},
        ]
    }
  }
 
}
</script>

<style scoped>

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
.account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }
</style>