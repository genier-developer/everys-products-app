import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CollectionOutputModel } from '../../../entities/product/types';

type SearchState = {
  query: string;
  limit: number;
  page: number;
  totalItems: number;
  items: CollectionOutputModel['items'];
}

const initialState: SearchState = {
  query: '',
  limit: 10,
  page: 1,
  totalItems: 0,
  items: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setProducts: (state, action: PayloadAction<CollectionOutputModel>) => {
      state.totalItems = action.payload.totalItems;
      state.items = action.payload.items;
    },
  },
});

export const { setQuery, setLimit, setPage, setProducts } = searchSlice.actions;
export default searchSlice.reducer;