import { RootState } from '../store';

export const getFavoriteManCount = (state: RootState) =>
  state.rootReducer.common.people?.reduce(
    (accum, current) => (current.gender === 'male' ? accum + 1 : accum),
    0,
  ) ?? 0;

export const getFavoriteFemaleCount = (state: RootState) =>
  state.rootReducer.common.people?.reduce(
    (accum, current) => (current.gender === 'female' ? accum + 1 : accum),
    0,
  ) ?? 0;
export const getFavoriteOthersCount = (state: RootState) =>
  state.rootReducer.common.people?.reduce(
    (accum, current) =>
      current.gender !== 'female' && current.gender !== 'male'
        ? accum + 1
        : accum,
    0,
  ) ?? 0;

export const getAllFavorites = (state: RootState) =>
  state.rootReducer.common.people;
