import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {StockItemModel} from "../../../entities/product/types.ts";

interface SearchState {
  query: string;
  allProducts: StockItemModel[];
  products: StockItemModel[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  totalPages: number;
}

const initialState: SearchState = {
  query: '',
  allProducts: [],
  products: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  totalPages: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.products = state.allProducts.filter(product =>
        (product.title?.toLowerCase().includes(action.payload.toLowerCase())) ||
        (product.description?.toLowerCase().includes(action.payload.toLowerCase())) ||
        (product.manufacturer?.toLowerCase().includes(action.payload.toLowerCase()))
      );
      state.totalPages = Math.ceil(state.products.length / state.limit);
    },
    setAllProducts: (state, action: PayloadAction<StockItemModel[]>) => {
      state.allProducts = action.payload;
      state.products = action.payload; // Изначально отображаем все продукты
      state.totalPages = Math.ceil(action.payload.length / state.limit);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setQuery, setAllProducts, setLoading, setError, setPage } = searchSlice.actions;
export default searchSlice.reducer;