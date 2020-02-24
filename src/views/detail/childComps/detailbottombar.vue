<template>
  <div class="detailbottombar">
    <div class="bar-item bar-right">
      <div class="store"><i class="el-icon-school"></i> 客服</div>
      <div class="cart" @click="addToCart">
        <i class="el-icon-shopping-cart-2"></i>加入購物車
      </div>
      <div class="buy"><i class="el-icon-sell" @click="toSell">購買</i></div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "detailbottombar",
  methods: {
    addToCart() {
      this.$emit("addcart");
    },
    toSell() {
      this.$router.push("/cart");
    }
  }
};
</script>
 
<style scoped>
.detailbottombar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 99;
}
.bar-item {
  flex: 1;
  display: flex;
}
 
.bar-item > div {
  flex: 1;
}
 
.bar-right {
  font-size: 20px;
  color: #fff;
  line-height: 58px;
  text-align: center;
}
 
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .store {
  background-color: #fff;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
</style>
