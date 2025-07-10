import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + '/cart';

const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const addProductToCart = createAsyncThunk('cart/addProduct', async ({ productId, quantity }, { rejectWithValue }) => {
  try {
    const response = await axios.post(BASE_URL, { productId, quantity });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const updateProductInCart = createAsyncThunk('cart/updateProduct', async ({ productId, quantity }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${BASE_URL}/${productId}`, { quantity });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const removeProductFromCart = createAsyncThunk('cart/removeProduct', async (productId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${productId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const updateCartStats = (state) => {
  state.totalItems = state.items.reduce((count, item) => count + item.quantity, 0);
  const subTotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  state.subTotal = parseFloat(subTotal.toFixed(2));
  state.shipping = subTotal === 0 || subTotal >= 100 ? 0 : 9.99;
  state.tax = parseFloat(((subTotal + state.shipping) * 0.05).toFixed(2));
  state.totalAmount = parseFloat((subTotal + state.shipping + state.tax).toFixed(2));
};

const initialState = {
  items: [],
  loading: false,
  error: null,
  totalItems: 0,
  subTotal: 0,
  shipping: 0,
  tax: 0,
  totalAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload || [];
        updateCartStats(state);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items.push(action.payload.product);
          updateCartStats(state);
        }
      })
      .addCase(updateProductInCart.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items.filter((item) => item.product_id === action.payload.productId)[0].quantity = action.payload.quantity;
          updateCartStats(state);
        }
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        if (action.payload.success) {
          const { productId } = action.payload;
          state.items = state.items.filter((item) => item.product_id !== productId);
          updateCartStats(state);
        }
      });
  }
});

export { fetchCart, addProductToCart, updateProductInCart, removeProductFromCart };
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
