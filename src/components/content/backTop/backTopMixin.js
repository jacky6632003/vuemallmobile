import BackTop from '../backTop/BackTop.vue';
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTop: false,
    }
  },
  methods: {
    topbackclick() {
      this.$refs.scroll.scrollTo(0, 0, 400);
    },
    listenshoebacktop(position) {
      this.isBackTop = -position.y > 500;
    }
  },
}
