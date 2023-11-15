import { RootState } from 'redux/store';

export const selectAdverts = (state: RootState) => state.adverts.cars;
export const selectAllAdverts = (state: RootState) => state.adverts.allAdvers;
export const selectIsLoading = (state: RootState) => state.adverts.isLoading;
export const selectError = (state: RootState) => state.adverts.error;

export const selectFavorites = (state: RootState) => state.favorites.list;
