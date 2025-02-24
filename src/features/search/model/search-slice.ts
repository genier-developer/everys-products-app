import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CollectionOutputModel, StockItemModel} from "../../../entities/product/types.ts";

interface SearchState {
  query: string;
  items: StockItemModel[];
  filteredProducts: StockItemModel[];
  loading: boolean;
  error: string | null;
  currentPage: number;
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
  currentPage: 1,
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
    setAllProducts: (state, action: PayloadAction<CollectionOutputModel>) => {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.totalPages = Math.ceil(state.totalItems / state.limit);
      if (state.currentPage > state.totalPages) {
        state.currentPage = state.totalPages;
      }
      },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    filterProducts: (state) => {
      state.items = state.items.filter(item =>
        item.title?.toLowerCase().includes(state.query.toLowerCase()) ||
        item.description?.toLowerCase().includes(state.query.toLowerCase()) ||
        item.manufacturer?.toLowerCase().includes(state.query.toLowerCase())
      );
      state.totalPages = Math.ceil(state.totalItems / state.limit);
    },
  },
});

export const { setQuery, setAllProducts, setLoading, setError, setCurrentPage, filterProducts } = searchSlice.actions;
export default searchSlice.reducer;