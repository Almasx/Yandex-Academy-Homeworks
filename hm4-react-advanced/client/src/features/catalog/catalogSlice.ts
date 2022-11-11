import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Statuses } from '../../common/constants/statuses';
import catalogService from './catalogService';

const initialState = {
  catalog: [] as IBook[],
  status: Statuses.idle,
};

// Get filtered catalog
export const getCatalog = createAsyncThunk<IBook[] | undefined, undefined | string, { rejectValue: string }>(
  'catalog/get',
  async (filter, thunkAPI) => {
    try {
      return await catalogService.getCatalog(filter);
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || error.toString();
      thunkAPI.rejectWithValue(message);
    }
  },
);

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    reset: (state) => {
      state.status = Statuses.idle;
      state.catalog = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, (state) => {
        state.status = Statuses.loading;
        state.catalog = [];
      })
      .addCase(getCatalog.fulfilled, (state, action: PayloadAction<IBook[] | undefined>) => {
        state.status = Statuses.success;
        state.catalog = action.payload!;
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.status = Statuses.rejected;
        state.catalog = [];
      });
  },
});

export const { reset } = catalogSlice.actions;
export default catalogSlice.reducer;
