import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + '/products';

const fetchOfferProducts = createAsyncThunk('products/fetchOfferProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/offer`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const offerProductsSlice = createSlice({
  name: 'offer',
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOfferProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchOfferProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export { fetchOfferProducts };
export default offerProductsSlice.reducer;
