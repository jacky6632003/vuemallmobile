<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="center">購物車({{ this.cartList }})</div>
    </navbar>
    <cartlist></cartlist>
    <cartbottombar></cartbottombar>
  </div>
</template>
 
<script>
import navbar from "../../components/common/navbar/navbar";
import cartlist from "./childComps/cartlist";
import cartbottombar from "./childComps/cartbottombar";
 
export default {
  name: "cart",
  components: {
    navbar,
    cartlist,
    cartbottombar
  },
  computed: {
    cartList() {
      return this.$store.state.cartList.length;
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
.cart {
  width: 100%;
}
</style>
