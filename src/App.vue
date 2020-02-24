<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>
 
<script>
import maintabbar from "./components/content/mainTabbar/maintabbar";
export default {
  name: "app",
  components: {
    maintabbar
  },
  data() {
    return {
      isshow: true
    };
  }
  // watch: {
  //   $route: {
  //     handler: function(val, oldVal) {
  //       if (val.fullPath.search("detail") != -1) {
  //         this.isshow = false;
  //       }
  //     },
  //     // 深度观察监听
  //     deep: true
  //   }
  // }
};
</script>
<style>
@import "./assets/css/base.css";
#app {
}
</style>