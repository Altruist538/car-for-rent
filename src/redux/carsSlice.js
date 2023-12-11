import { createSlice } from '@reduxjs/toolkit';
import carsOperations from './operations';

const initialState = { items: [], showLoader: false };
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(carsOperations.fetchCars.pending, state => {
        state.showLoader = true;
      })

      .addCase(carsOperations.fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.showLoader = false;
      })

      .addCase(carsOperations.fetchCars.rejected, state => {
        state.showLoader = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
