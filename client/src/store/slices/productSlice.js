import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE = import.meta.env.VITE_API_URL + '/products';

const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(BASE);

    // Simulate loading time of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const applyFilters = (state) => {
  let filtered = state.items;
  //let filtered = state.items.filter((product) => product.stock > 0);

  if (state.filters.search) {
    let searchLower = state.filters.search.toLowerCase();
    filtered = filtered.filter((product) => product.en_name.toLowerCase().includes(searchLower) || product.ar_name.toLowerCase().includes(searchLower));
  }

  if (state.filters.category) {
    filtered = filtered.filter((product) => product.en_category.toLowerCase() === state.filters.category.toLowerCase());
  }

  switch (state.filters.sort) {
    case 'alphabetically':
      filtered.sort((a, b) => a.en_name.localeCompare(b.en_name));
      break;
    case 'price-low-high':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      filtered.sort((a, b) => b.price - a.price);
      break;
    default:
      filtered.sort(() => Math.random() - 0.5);
      break;
  }

  state.filteredItems = filtered;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    filters: {
      search: '',
      category: '',
      sort: ''
    },
    loading: false
  },
  reducers: {
    searchProducts: (state, action) => {
      state.filters.search = action.payload;
      applyFilters(state);
    },
    filterByCategory: (state, action) => {
      state.filters.category = action.payload;
      applyFilters(state);
    },
    sortProducts: (state, action) => {
      state.filters.sort = action.payload;
      applyFilters(state);
    },
    clearFilters: (state) => {
      state.filters = {
        search: '',
        category: '',
        sort: ''
      };
      applyFilters(state);
    },
    updateProductsStock: (state, action) => {
      const cart = action.payload;
      for (let cartItem of cart) {
        const product = state.items.filter((item) => item.id === cartItem.id)[0];
        if (product) {
          product.stock -= cartItem.quantity;
        }
      }
      applyFilters(state);
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
        state.items = action.payload;
        applyFilters(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export { fetchProducts };
export const { searchProducts, filterByCategory, sortProducts, clearFilters, updateProductsStock } = productsSlice.actions;
export default productsSlice.reducer;
