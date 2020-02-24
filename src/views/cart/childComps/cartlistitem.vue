<template>
  <div class="cartlistitem">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="product.image" class="image" />
      <div style="padding: 14px;">
        <span>{{ product.title }}</span>
        <div class="bottom clearfix">
          <time class="time">價格:{{ product.price }}</time>
          <time class="time time2">數量:{{ product.count }}</time>
          <checkbutton
            style="margin:10px;"
            @checkBtnClick="checkedChange"
            v-model="product.checked"
          ></checkbutton>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
<script>
import checkbutton from "./checkbutton";
export default {
  name: "cartlistitem",
  components: {
    checkbutton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkedChange() {
      this.product.checked = !this.product.checked;
      this.$store.commit("changChecked", this.product);
    }
  }
};
</script>
 
<style scoped>
.cartlistitem {
  width: 100%;
}
.time {
  font-size: 22px;
  color: #999;
  margin-left: 10px;
}
.time2 {
  float: right;
}
 
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
 
.button {
  padding: 0;
  float: right;
}
 
.image {
  width: 100%;
  display: block;
}
 
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
 
.clearfix:after {
  clear: both;
}
</style>
