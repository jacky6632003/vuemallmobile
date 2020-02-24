<template>
  <el-col :span="12" :gutter="100">
    <div @click="cardclick">
      <el-card
        :body-style="{ padding: '0px' }"
        style="margin:8px"
        shadow="always"
      >
        <img :src="item.image" class="image" @load="imgload" />
        <div style="padding: 14px;">
          <div style="width:100%">
            <P class="goods-span">{{ item.title }}</P>
          </div>
 
          <div class="bottom clearfix">
            <time class="time">{{
              (item.price + " " + item.unit) | priceFormat | commaFormat
            }}</time>
          </div>
        </div>
      </el-card>
    </div>
  </el-col>
</template>
 
<script>
export default {
  naem: "goodslistitem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgload() {
      this.$bus.$emit("itemimgload");
    },
    cardclick() {
      this.$router.push("/detail/" + this.item.category + "/" + this.item.id);
    }
  },
 
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 7) {
        return value.slice(0, 7) + "...";
      }
      return value;
    },
    priceFormat: function(value) {
      // 加上 $ 字號
      return "$" + value;
    },
    commaFormat: function(value) {
      // 加上千分位符號
      return value
        .toString()
        .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function(
          all,
          pre,
          groupOf3Digital
        ) {
          return pre + groupOf3Digital.replace(/\d{3}/g, ",$&");
        });
    }
  }
};
</script>
 
<style scoped>
.goods-span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
 
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
