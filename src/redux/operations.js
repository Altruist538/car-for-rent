import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6572101fd61ba6fcc0145108.mockapi.io/';

export const fetchData = async (page, limit) => {
  try {
    const response = await axios.get(`/adverts`, {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCars = createAsyncThunk(
  'cars/all',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const carsOperations = {
  fetchCars,
};
export default carsOperations;
