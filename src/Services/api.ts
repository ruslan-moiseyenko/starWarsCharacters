import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '../Const/endpoints';
import { TCharacter } from './../Store/types';

export type TPeopleResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TCharacter[];
};

export const StarWarsPeopleAPI = createApi({
  reducerPath: 'StarWarsPeopleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: builder => ({
    getPeople: builder.query<TPeopleResponse, void>({
      query: () => 'people',
    }),
    getCharacterById: builder.query<TCharacter, string>({
      query: id => `people/${id}`,
    }),
  }),
});

export const { useGetPeopleQuery, useGetCharacterByIdQuery } =
  StarWarsPeopleAPI;
