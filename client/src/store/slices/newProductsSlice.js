import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + '/products';

const fetchNewProducts = createAsyncThunk('products/fetchNewProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/new`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const newProductsSlice = createSlice({
  name: 'newProducts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export { fetchNewProducts };
export default newProductsSlice.reducer;
