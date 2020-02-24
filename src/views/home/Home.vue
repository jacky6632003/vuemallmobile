<template>
  <div id="Home">
    <navbar class="home-nav">
      <div slot="center">購物街</div>
    </navbar>
    <tabcontrol
      :titles="this.titles"
      class="home-tabcontrol"
      @tabclick="tabclick"
      ref="tabcontrol2"
      v-show="this.isflex"
    ></tabcontrol>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="scrollposition"
      :pull-up-load="true"
      @pullingup="scrollup"
    >
      <homeswiper
        :banners="banners"
        @homeswiperimgload="homeswiperimgload"
      ></homeswiper>
      <recommendview :recommends="recommends"></recommendview>
      <featureview></featureview>
      <tabcontrol
        :titles="this.titles"
        class="home-tab"
        @tabclick="tabclick"
        ref="tabcontrol"
      ></tabcontrol>
      <goodslist :goods="this.goods[this.goodsTypeName].list"></goodslist>
    </scroll>
    <BackTop @click.native="topbackclick" v-show="this.isBackTop"></BackTop>
  </div>
</template>
 
<script>
import navbar from "../../components/common/navbar/navbar";
import scroll from "../../components/common/scroll/scroll";
 
import tabcontrol from "../../components/content/tabControl/tabcontrol";
import goodslist from "../../components/content/goods/goodslist";
 
import homeswiper from "./childComps/homeswiper";
import recommendview from "./childComps/recommendview";
import featureview from "./childComps/featureview";
 
import {
  getHomeMultidata,
  getHomefeature,
  getHomeGoods
} from "../../network/home.js";
 
import { debounce } from "../../common/utils.js";
import { itemimgload } from "../../common/mixin.js";
import { backTopMixin } from "../../components/content/backTop/backTopMixin.js";
 
export default {
  name: "Home",
  components: {
    navbar,
    scroll,
    tabcontrol,
    goodslist,
    homeswiper,
    recommendview,
    featureview
  },
  mixins: [itemimgload, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新品", "精選"],
      goods: {
        new: { page: 0, list: [] },
        pop: { page: 0, list: [] },
        fea: { page: 0, list: [] }
      },
      goodsTypeName: "new",
 
      taboffsettop: 0,
      isflex: false,
      saveY: 0
    };
  },
  created() {
    this.getHomeMultidataList();
    this.getHomefeatureList();
    this.getHomeGoodsNew("new");
    this.getHomeGoodsNew("pop");
    this.getHomeGoodsNew("fea");
  },
  mounted() {},
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getscrollY();
    this.$bus.$off("itemimgload", this.refreshimg);
  },
  methods: {
    tabclick(index) {
      this.goodsTypeName = ["new", "pop", "fea"][index];
      this.$refs.tabcontrol.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    getHomeMultidataList() {
      getHomeMultidata().then(res => {
        this.banners = res.products;
      });
    },
    getHomeGoodsNew(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, { page: page }).then(res => {
        this.goods[type].list.push(...res.products);
        this.goods[type].page = page;
        this.$refs.scroll.finishPullUp();
      });
    },
    getHomefeatureList() {
      getHomefeature().then(res => {
        this.recommends = res.products;
      });
    },
    scrollposition(position) {
      this.listenshoebacktop(position);
      this.isflex = -position.y > this.taboffsettop;
    },
    scrollup() {
      this.getHomeGoodsNew(this.goodsTypeName);
    },
    scrollrefresh() {
      this.$refs.scroll.refresh();
    },
    homeswiperimgload() {
      this.taboffsettop = this.$refs.tabcontrol.$el.offsetTop + 44;
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsTypeName].list;
    }
  }
};
</script>
<style scoped>
#Home {
  /*padding-top: 43px;*/
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-tab {
  position: sticky;
}
.home-tabcontrol {
  position: fixed;
  width: 100%;
  right: 0;
  top: 43px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: flex;
  top: 0;
  left: 0;
  right: 0;
}
</style>
