import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import newProductsReducer from './slices/newProductsSlice';
import offerProductsReducer from './slices/offerProductsSlice';
import featuredProductsReducer from './slices/featuredProductsSlice';
import productDetailsReducer from './slices/productDetailsSlice';
import relatedProductsReducer from './slices/relatedProductsSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    offerProducts: offerProductsReducer,
    newProducts: newProductsReducer,
    featuredProducts: featuredProductsReducer,
    productDetails: productDetailsReducer,
    relatedProducts: relatedProductsReducer,
    cart: cartReducer
  }
});

export default store;
