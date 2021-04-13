const stateDefault = {
  cartStore: localStorage.getItem("cartStore")
    ? JSON.parse(localStorage.getItem("cartStore"))
    : [],

  shipping: 10,
  coupon: 0,
};

export const cartReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_CART": {
      let cartStoreUpdate = [...state.cartStore];
      let index = cartStoreUpdate.findIndex(
        (item) => item.code === action.item.code
      );
      if (index !== -1) {
        cartStoreUpdate[index].quantity += 1;
      } else {
        cartStoreUpdate.push(action.item);
      }
      state.cartStore = cartStoreUpdate;
      localStorage.setItem("cartStore", JSON.stringify(state.cartStore));

      return { ...state };
    }

    case "QUANTITY_CHANGE": {
      let cartStoreUpdate = [...state.cartStore];
      let index = cartStoreUpdate.findIndex(
        (item) => item.code === action.code
      );

      if (action.quantity) {
        cartStoreUpdate[index].quantity++;
      } else if (cartStoreUpdate[index].quantity > 1) {
        cartStoreUpdate[index].quantity--;
      }
      console.log(action.increase);

      return { ...state };
    }

    case "DELETE_PRODUCT": {
      let cartStoreUpdate = [...state.cartStore];
      let index = cartStoreUpdate.findIndex(
        (item) => item.code === action.code
      );

      if (index !== -1) {
        cartStoreUpdate.splice(index, 1);
      }

      state.cartStore = cartStoreUpdate;
      localStorage.setItem("cartStore", JSON.stringify(state.cartStore));

      return { ...state };
    }

    default:
      return { ...state };
  }
};
