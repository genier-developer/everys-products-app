import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {StockItemModel} from "../../../entities/product/types.ts";

interface SearchState {
  query: string;
  products: StockItemModel[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  page: number;
  limit: number;
  totalPages: number;
}

const initialState: SearchState = {
  query: '',
  products: [],
  loading: false,
  error: null,
  currentPage: 1,
  page: 1,
  limit: 10,
  totalPages: 1
};
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setProducts: (state, action: PayloadAction<StockItemModel[]>) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  }
});

export const { setQuery, setLoading, setError, setProducts, setTotalPages, setPage } = searchSlice.actions;
export default searchSlice.reducer;
