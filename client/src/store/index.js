import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import newProductsReducer from './slices/newProductsSlice';
import offerProductsReducer from './slices/offerProductsSlice';
import featuredProductsReducer from './slices/featuredProductsSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    offerProducts: offerProductsReducer,
    newProducts: newProductsReducer,
    featuredProducts: featuredProductsReducer,
    cart: cartReducer
  }
});

export default store;
