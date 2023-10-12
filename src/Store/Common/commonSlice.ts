import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TCharacter } from '../types';

export type CharactersState = {
  people?: TCharacter[];
};

const initialCharactersState: CharactersState = {
  people: undefined,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: initialCharactersState,
  reducers: {
    addFavoriteCharacter: (
      state,
      action: PayloadAction<Partial<CharactersState>>,
    ) => ({
      ...state,
      ...action.payload,
    }),
    resetFavoriteCharacters: () => initialCharactersState,
  },
});

export const { addFavoriteCharacter, resetFavoriteCharacters } =
  commonSlice.actions;

export default commonSlice.reducer;
