<template>
  <div id="homeswiper">
    <swiper :options="swiperOption" v-if="banners.length">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img
            :src="item.image"
            style="width:100%"
            alt=""
            @load="homeswiperimgload"
          />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
// require styles
import "swiper/dist/css/swiper.css";
 
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "homeswiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true
      },
      imgload: false
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    homeswiperimgload() {
      if (!this.imgload) {
        this.$emit("homeswiperimgload");
        this.imgload = true;
      }
    }
  }
};
</script>
