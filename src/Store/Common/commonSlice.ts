import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  isObjectEquivalent,
  isObjectUniqueInArray,
} from '../../Helpers/helpers';
import { TCharacter } from '../types';

export type CharactersState = {
  people?: TCharacter[];
};

const initialCharactersState: CharactersState = {
  people: [],
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: initialCharactersState,
  reducers: {
    resetFavoriteCharacters: () => initialCharactersState,

    toggleUniqueFavoriteCharacter: (
      state,
      action: PayloadAction<Partial<CharactersState>>,
    ) => {
      if (action.payload.people) {
        action.payload.people.forEach(newCharacter => {
          if (state.people) {
            if (isObjectUniqueInArray(state.people, newCharacter)) {
              state.people.push(newCharacter);
            } else {
              state.people = state.people.filter(
                character => !isObjectEquivalent(character, newCharacter),
              );
            }
          }
        });
      }
      return state;
    },
  },
});

export const { resetFavoriteCharacters, toggleUniqueFavoriteCharacter } =
  commonSlice.actions;

export default commonSlice.reducer;
