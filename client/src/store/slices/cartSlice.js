import { createSlice } from '@reduxjs/toolkit';

const updateCartStats = (state) => {
  state.totalItems = state.items.reduce((count, item) => count + item.quantity, 0);
  const subTotal = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
  state.subTotal = parseFloat(subTotal.toFixed(2));
  state.shipping = subTotal === 0 || subTotal >= 100 ? 0 : 9.99;
  state.tax = parseFloat(((subTotal + state.shipping) * 0.05).toFixed(2));
  state.totalPrice = parseFloat((subTotal + state.shipping + state.tax).toFixed(2));
};

const initialState = {
  items: [],
  totalItems: 0,
  subTotal: 0,
  shipping: 0,
  tax: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const item = state.items.filter((item) => item._id === 100)[0];

      if (item) {
        item.quantity += quantity;
        item.totalPrice = parseFloat((item.price * item.quantity).toFixed(2));
      } else {
        let totalPrice = parseFloat((product.price * quantity).toFixed(2));
        state.items.push({ ...product, quantity, totalPrice });
      }

      updateCartStats(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      updateCartStats(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.filter((item) => item._id === id)[0];
      if (item) {
        item.quantity = quantity;
        item.totalPrice = parseFloat((item.price * quantity).toFixed(2));

        updateCartStats(state);
      }
    },
    clearCart: () => {
      return initialState;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
