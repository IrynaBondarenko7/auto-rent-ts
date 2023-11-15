import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from './advertsSlise';

interface checkedFavoriteType {
  id: boolean;
}

interface InitialStateType {
  list: Car[];
  checkedFavorite: checkedFavoriteType | {};
}

const initialState: InitialStateType = {
  list: [],
  checkedFavorite: {},
};

interface SetCheckedFavoritePayloadType {
  advertId: number;
  isChecked: boolean;
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Car>) => {
      state.list.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Car>) => {
      const advertId = action.payload.id;
      state.list = state.list.filter(el => el.id !== advertId);
    },
    setCheckedFavorite: (
      state,
      action: PayloadAction<SetCheckedFavoritePayloadType>
    ) => {
      const { advertId, isChecked } = action.payload;
      state.checkedFavorite = {
        ...state.checkedFavorite,
        [advertId]: isChecked,
      };
    },
  },
});

export const { addToFavorites, removeFromFavorites, setCheckedFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
