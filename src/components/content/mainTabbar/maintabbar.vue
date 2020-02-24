<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首頁</div>
    </tabbaritem>
    <tabbaritem path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分類</div>
    </tabbaritem>
    <tabbaritem path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">購物車</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>
 
<style></style>
<script>
import tabbar from "../../common/tabbar/tabbar";
import tabbaritem from "../../common/tabbar/tabbaritem";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem
  },
  data() {
    return {};
  }
};
</script>
