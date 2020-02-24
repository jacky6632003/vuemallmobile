<template>
  <div class="cartlist">
    <el-row style="bottom:93px;">
      <el-col :span="24">
        <cartlistitem
          v-for="(item, index) in this.cartlist"
          :key="index"
          :product="item"
        ></cartlistitem>
      </el-col>
    </el-row>
  </div>
</template>
 
<script>
import cartlistitem from "./cartlistitem";
export default {
  name: "cartlist",
  components: {
    cartlistitem
  },
  computed: {
    cartlist() {
      return this.$store.state.cartList;
    }
  }
};
</script>
 
<style scoped>
.cartlist {
  top: 44px;
  height: calc(100%-93px);
  position: absolute;
 
  width: 100%;
}
</style>
