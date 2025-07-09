import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + '/products';

const fetchProductDetails = createAsyncThunk('products/fetchProductDetails', async (productId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    product: null,
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export { fetchProductDetails };
export default productDetailsSlice.reducer;
