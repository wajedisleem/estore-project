import { configureStore } from '@reduxjs/toolkit';
import newProductsReducer from './slices/newProductsSlice';
import offerProductsReducer from './slices/offerProductsSlice';
import featuredProductsReducer from './slices/featuredProductsSlice';
import productSearchReducer from './slices/productSearchSlice';
import productDetailsReducer from './slices/productDetailsSlice';
import relatedProductsReducer from './slices/relatedProductsSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    offerProducts: offerProductsReducer,
    newProducts: newProductsReducer,
    featuredProducts: featuredProductsReducer,
    productSearch: productSearchReducer,
    productDetails: productDetailsReducer,
    relatedProducts: relatedProductsReducer,
    cart: cartReducer
  }
});

export default store;
