import { createSlice } from '@reduxjs/toolkit';
// import { fetchData } from '../components/api/operations';

// const fetchDataFulfilled = (state, action) => {
//   state.cars = action.payload;
//   state.initialCars = action.payload;
// };

const initialState = {
  cars: [],
  initialCars: [],
  filter: {
    make: '',
    price: '',
    from: '',
    to: '',
  },
  favoriteCars: [],
};

export const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, action) {
      state.cars = [...state.cars, ...action.payload];
      state.initialCars = [...state.initialCars, ...action.payload];
    },
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
      const filteredCars = state.initialCars.filter(
        car => car.make === state.filter.make
      );
      state.cars = [...filteredCars];
    },
    clearFilter(state, _) {
      state.filter = initialState.filter;
      state.cars = [...state.initialCars];
    },
    addFavorite(state, action) {
      const selectedCar = action.payload;

      const isFavorite = state.favoriteCars.some(
        car => car.id === selectedCar.id
      );

      if (isFavorite) {
        state.favoriteCars = state.favoriteCars.filter(
          car => car.id !== selectedCar.id
        );
      } else {
        state.favoriteCars.push(selectedCar);
      }
    },
  },

  //   extraReducers: builder => {
  //     builder.addCase(fetchData(1, 12).fulfilled, fetchDataFulfilled);
  //   },
});

export const { setCars, setFilter, setFilteredCars, clearFilter, addFavorite } =
  slice.actions;
