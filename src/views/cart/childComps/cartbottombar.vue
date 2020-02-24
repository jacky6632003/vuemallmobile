<template>
  <div class="bottom-menu">
    <checkbutton
      class="select-all"
      @checkBtnClick="checkBtnClick"
      v-model="isSelectAll"
    ></checkbutton>
    <span>全選</span>
    <span class="total-price">合計:{{ totalPrice }} </span>
    <span class="buy-product" @click="totalLengthClick"
      >購買({{ totalLength }})</span
    >
  </div>
</template>
 
<script>
import checkbutton from "./checkbutton";
 
export default {
  name: "BottomBar",
  components: {
    checkbutton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0);
    },
    totalLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.$store.getters.cartList.length === 0) {
        return false;
      }
      return (
        this.$store.getters.cartList.find(item => item.checked === false) ===
        undefined
      );
    }
  },
  methods: {
    checkBtnClick() {
      let isSelectAll = this.$store.getters.cartList.find(
        item => !item.checked
      );
 
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
      }
    },
    totalLengthClick() {
      if (this.totalLength == 0) {
        this.$newtoast.show("沒有商品", 1500);
      }
    }
  }
};
</script>
 
<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 48px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
 
.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
 
.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
 
.bottom-menu .buy-product {
  background-color: var(--color-tint);
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
