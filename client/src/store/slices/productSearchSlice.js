import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + '/products';

const fetchProducts = createAsyncThunk('products/fetchProducts', async (filters, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${filters.search}&category=${filters.category}&sort=${filters.sort}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState: {
    products: [],
    filters: {
      search: '',
      category: '',
      sort: ''
    },
    loading: false,
    error: null
  },
  reducers: {
    setSearchFilter: (state, action) => {
      state.filters.search = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
    },
    setSortFilter: (state, action) => {
      state.filters.sort = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        search: '',
        category: '',
        sort: ''
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export { fetchProducts };
export const { setSearchFilter, setCategoryFilter, setSortFilter, clearFilters } = productSearchSlice.actions;
export default productSearchSlice.reducer;
