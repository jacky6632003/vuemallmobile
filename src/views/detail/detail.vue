<template>
  <div id="detail">
    <detailnavbar class="navbar"></detailnavbar>
    <scroll class="content" ref="scroll">
      <img :src="this.product.image" class="productimg" />
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="span-title">{{ this.product.title }}</span>
        </div>
        <div class="text item">
          <span> 原價:{{ this.product.origin_price }}</span>
          <span class="time">
            特價{{ this.product.price + this.product.unit }}</span
          >
        </div>
      </el-card>
      <div style="text-align: center;margin-top:10px">
        <span>推薦</span>
      </div>
 
      <el-divider></el-divider>
      <goodslist :goods="this.list"></goodslist>
    </scroll>
    <detailbottombar @addcart="addCart"></detailbottombar>
  </div>
</template>
 
<script>
import scroll from "../../components/common/scroll/scroll";
import goodslist from "../../components/content/goods/goodslist";
 
import detailnavbar from "./childComps/detailnavbar";
import detailbottombar from "./childComps/detailbottombar";
 
import { getDetailID, getHomeGoods } from "../../network/detail.js";
import { itemimgload } from "../../common/mixin";
import { backTopMixin } from "../../components/content/backTop/backTopMixin.js";
export default {
  name: "detail",
  components: {
    scroll,
    goodslist,
    detailnavbar,
    detailbottombar
  },
  mixin: [itemimgload, backTopMixin],
  data() {
    return {
      id: null,
      category: null,
      product: {},
      list: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.category = this.$route.params.category;
    this.getDetailID();
    this.getHomeGoods();
  },
  mounted() {},
  methods: {
    getDetailID() {
      getDetailID(this.category, this.id).then(res => {
        this.product = res.product;
      });
    },
    getHomeGoods() {
      getHomeGoods(this.category, null).then(res => {
        this.list = res.products;
      });
    },
    addCart() {
      const productCar = {};
      productCar.image = this.product.image;
      productCar.title = this.product.title;
      productCar.price = this.product.price;
      productCar.id = this.id;
      productCar.count = 1;
      //   this.$store.commit("addCart", productCar);
      this.$store.dispatch("addCart", productCar).then(res => {
        this.$newtoast.show(res, 1500);
        console.log(this.$newtoast);
      });
    }
  }
};
</script>
 
<style>
#detail {
  height: 100vh;
}
.navbar {
  background-color: #fff;
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  z-index: 9;
}
 
.productimg {
  padding: 10px;
  width: 100%;
}
.text {
  font-size: 14px;
}
 
.item {
  margin-bottom: 18px;
}
 
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
 
.box-card {
  margin-top: 10px;
  width: 100%-10px;
}
.span-title {
  font-weight: 900;
}
.time {
  font-size: 25px;
  color: rgb(255, 0, 0);
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
