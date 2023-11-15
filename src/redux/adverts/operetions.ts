import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Car } from './advertsSlise';

axios.defaults.baseURL = 'https://6477a11a9233e82dd53bf54e.mockapi.io';

interface LoadParams {
  page: number;
  signal: AbortSignal;
}

interface FiltrParams {
  make: string | null;
  maxMileage: string | null;
  minMileage: string | null;
  page: number;
  rentalPrice: string | null;
}

export const fetchAdverts = createAsyncThunk<
  Car[],
  LoadParams,
  { rejectValue: string }
>('adverts/fetchAdverts', async (params, thunkAPI) => {
  const { page, signal } = params;
  try {
    const response = await axios.get(`/adverts?&page=${page}&limit=8`, {
      signal,
    });
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const loadMoreAdverts = createAsyncThunk<
  Car[],
  LoadParams,
  { rejectValue: string }
>('adverts/loadMoreAdverts', async (params, thunkAPI) => {
  const { page, signal } = params;
  try {
    const response = await axios.get(`/adverts?&page=${page}&limit=8`, {
      signal,
    });
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const FiltrAdverts = createAsyncThunk<
  Car[],
  FiltrParams,
  { rejectValue: string }
>('adverts/filtrAdverts', async (params, thunkAPI) => {
  const { make, rentalPrice, minMileage, maxMileage } = params;

  try {
    let filtredArray = [];

    const response = await axios.get(`/adverts`);
    const data = response.data;

    filtredArray = data;

    if (make) {
      filtredArray = data.filter((elem: Car) => elem.make === make);
    }

    if (rentalPrice) {
      filtredArray = filtredArray.filter(
        (el: Car) => el.rentalPrice === Number(rentalPrice)
      );
    }

    if (minMileage) {
      filtredArray = filtredArray.filter(
        (el: Car) => el.mileage >= Number(minMileage)
      );
    }

    if (maxMileage) {
      filtredArray = filtredArray.filter(
        (el: Car) => el.mileage <= Number(maxMileage)
      );
    }

    return filtredArray;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchAllAdverts = createAsyncThunk<Car[], { rejectValue: string }>(
  'adverts/fetchAllAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
