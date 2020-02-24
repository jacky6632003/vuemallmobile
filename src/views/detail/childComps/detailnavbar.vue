<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titel">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="titelitem"
          :class="{ active: currentIndex === index }"
          @click="titleclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </navbar>
  </div>
</template>
 
<script>
import navbar from "../../../components/common/navbar/navbar";
export default {
  name: "detailnavbar",
  components: {
    navbar
  },
  data() {
    return {
      title: ["商品", "參數", "評論", "推薦"],
      currentIndex: 0
    };
  },
  methods: {
    titleclick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>
 
<style scoped>
.titel {
  display: flex;
}
.titelitem {
  flex: 1;
  font-weight: 500;
}
.active {
  color: var(--color-high-text);
}
 
.active span {
  border-bottom: 3px solid var(--color-tint);
}
.back img {
  margin-top: 10px;
}
</style>
