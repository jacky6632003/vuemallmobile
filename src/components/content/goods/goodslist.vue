<template>
  <el-row>
    <div class="goods">
      <goodslistitem
        v-for="(item, index) in goods"
        :key="index"
        :item="item"
      ></goodslistitem>
    </div>
  </el-row>
</template>
 
<script>
import goodslistitem from "./goodslistitem";
export default {
  name: "goodslist",
  components: {
    goodslistitem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
 
<style scoped>
.time {
  font-size: 13px;
  color: #999;
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
