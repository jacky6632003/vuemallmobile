import {
    debounce
  } from '../common/utils'
  export const itemimgload = {
    data() {
      return {
        refreshimg: null
      }
    },
    mounted() {
      const refresh = debounce(this.scrollrefresh, 500);
      this.refreshimg = () => {
        refresh();
      };
      this.$bus.$on("itemimgload", this.refreshimg);
    }
  }
  