import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './adverts/advertsSlise';
import { favoritesSlice } from './adverts/favoritesSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};

const advertsPersistConfig = {
  key: 'adverts',
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritePersistConfig, favoritesSlice.reducer),
    adverts: persistReducer(advertsPersistConfig, advertsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
