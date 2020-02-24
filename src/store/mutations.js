export default {
    addCount(state, payload) {
      payload.count++;
    },
    addCart(state, payload) {
      payload.checked = true;
      state.cartList.push(payload);
    },
    changChecked(state, payload) {
      for (let item of state.cartList) {
        if (item.id === payload.id) {
          item.checked = payload.checked
        }
      }
    }
  }
  