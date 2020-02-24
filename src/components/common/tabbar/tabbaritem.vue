<template>
  <li id="tabbaritem" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{ active: isActive }" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </li>
</template>
 
<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      //isActive:true
    };
  },
  computed: {
    isActive() {
      return this.$route.path === this.path ? true : false;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>
 
<style scoped>
#tabbaritem {
  width: 100%;
}
#tabbaritem div {
  text-align: center;
}
#tabbaritem li {
  width: 100%;
  text-align: center;
  box-shadow: 0px -3px -1px rgba(100, 100, 100, 1);
}
#tabbaritem img {
  display: block;
  margin: auto;
  margin-top: 5px;
  height: 24px;
  width: 24px;
}
.active {
  color: red;
}
</style>
