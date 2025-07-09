import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + '/products';

const fetchRelatedProducts = createAsyncThunk('products/fetchRelatedProducts', async (productId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productId}/related`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const relatedProductsSlice = createSlice({
  name: 'relatedProducts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export { fetchRelatedProducts };
export default relatedProductsSlice.reducer;
