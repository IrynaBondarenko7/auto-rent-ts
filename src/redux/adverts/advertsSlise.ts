import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FiltrAdverts,
  fetchAdverts,
  fetchAllAdverts,
  loadMoreAdverts,
} from './operetions';

export interface Car {
  accessories: string[];
  address: string;
  description: string;
  engineSize: string;
  fuelConsumption: string;
  functionalities: string[];
  id: number;
  img: string;
  make: string;
  mileage: number;
  model: string;
  rentalCompany: string;
  rentalConditions: string;
  rentalPrice: number;
  type: string;
  year: number;
}

interface InitialStateType {
  cars: Car[];
  isLoading: boolean;
  error: null | string;
  allAdvers: Car[];
}

const initialState: InitialStateType = {
  cars: [],
  isLoading: false,
  error: null,
  allAdvers: [],
};

const pendingReducer = (state: InitialStateType) => {
  state.isLoading = true;
};

const rejectedReducer = (
  state: InitialStateType,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = action.payload?.message;
};

const fetchAdvertsFulfilledReducer = (
  state: InitialStateType,
  action: PayloadAction<Car[]>
) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

const loadMoreAdvertsFulfilledReducer = (
  state: InitialStateType,
  action: PayloadAction<Car[]>
) => {
  state.isLoading = false;
  state.error = null;
  state.cars = state.cars.concat(action.payload);
};

const fetchAllAdvertsFulfilledReducer = (
  state: InitialStateType,
  action: PayloadAction<Car[]>
) => {
  state.isLoading = false;
  state.error = null;
  state.allAdvers = action.payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, pendingReducer)
      .addCase(fetchAdverts.fulfilled, fetchAdvertsFulfilledReducer)
      .addCase(fetchAdverts.rejected, rejectedReducer)
      .addCase(loadMoreAdverts.pending, pendingReducer)
      .addCase(loadMoreAdverts.fulfilled, loadMoreAdvertsFulfilledReducer)
      .addCase(loadMoreAdverts.rejected, rejectedReducer)
      .addCase(FiltrAdverts.pending, pendingReducer)
      .addCase(FiltrAdverts.fulfilled, fetchAdvertsFulfilledReducer)
      .addCase(FiltrAdverts.rejected, rejectedReducer)
      .addCase(fetchAllAdverts.pending, pendingReducer)
      .addCase(fetchAllAdverts.fulfilled, fetchAllAdvertsFulfilledReducer)
      .addCase(fetchAllAdverts.rejected, rejectedReducer);
  },
});

export const advertsReducer = advertsSlice.reducer;
