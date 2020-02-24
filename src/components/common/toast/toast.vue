<template>
  <div class="toast" v-show="this.isshow">
    <div>{{ this.message }}</div>
  </div>
</template>
 
<script>
export default {
  name: "toast",
  data() {
    return {};
  },
  data() {
    return {
      message: "",
      isshow: false
    };
  },
  methods: {
    show(message = "", detime = 500) {
      (this.isshow = true), (this.message = message);
      setTimeout(() => {
        (this.isshow = false), (this.message = "");
      }, detime);
    }
  }
};
</script>
 
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
}
</style>
