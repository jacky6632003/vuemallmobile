<template>
  <ul id="tab-bar">
    <slot></slot>
  </ul>
</template>
 
<script>
export default {
  name: "tabbar",
  data() {
    return {};
  }
};
</script>
 
<style scoped>
#tab-bar {
  width: 100%;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  background-color: #f6f6f6;
  bottom: 0;
  position: fixed;
  height: 49px;
}
</style>
