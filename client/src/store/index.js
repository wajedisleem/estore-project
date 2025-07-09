import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import newProductsReducer from './slices/newProductsSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    newProducts: newProductsReducer,
    cart: cartReducer
  }
});

export default store;
