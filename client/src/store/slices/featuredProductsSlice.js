import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + '/products';

const fetchFeaturedProducts = createAsyncThunk('products/fetchFeaturedProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/featured`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const featuredProductsSlice = createSlice({
  name: 'featured',
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export { fetchFeaturedProducts };
export default featuredProductsSlice.reducer;
