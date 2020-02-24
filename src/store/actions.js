export default {
    addCart(context, payload) {
   
      return new Promise((resolve, reject) => {
        let oldProduct = null;
        for (let item of context.state.cartList) {
          if (item.id === payload.id) {
            oldProduct = item;
          }
        }
        if (oldProduct) {
          context.commit('addCount', oldProduct);
          resolve('當前商品數量加一')
        } else {
          context.commit('addCart', payload);
          resolve('添加新的商品')
        }
      })
    }
  }
  