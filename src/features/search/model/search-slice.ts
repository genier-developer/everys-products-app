import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {StockItemModel} from "../../../entities/product/types.ts";

interface SearchState {
  query: string;
  items: StockItemModel[];
  filteredProducts: StockItemModel[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}

const initialState: SearchState = {
  query: '',
  items: [],
  filteredProducts: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  totalPages: 1,
  totalItems: 0,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setAllProducts: (state, action: PayloadAction<StockItemModel[]>) => {
      state.items = action.payload;
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
    filterProducts: (state) => {
      state.items = state.items.filter(item =>
        item.title?.toLowerCase().includes(state.query.toLowerCase()) ||
        item.description?.toLowerCase().includes(state.query.toLowerCase()) ||
        item.manufacturer?.toLowerCase().includes(state.query.toLowerCase())
      );
      state.totalPages = Math.ceil(state.items.length / state.limit);
    },
  },
});

export const { setQuery, setAllProducts, setLoading, setError, setPage, filterProducts } = searchSlice.actions;
export default searchSlice.reducer;