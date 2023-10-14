import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TCharacter, TPlanet } from '@/Store/types';

export type TPeopleResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TCharacter[];
};

export type TPlanetsResponse = {};

export const StarWarsPeopleAPI = createApi({
  reducerPath: 'StarWarsPeopleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: builder => ({
    getPeople: builder.query<TPeopleResponse, string>({
      query: url => url,
    }),

    getPlanet: builder.query<TPlanet, string>({
      query: url => url,
    }),
  }),
});

export const { useGetPeopleQuery, useGetPlanetQuery } = StarWarsPeopleAPI;
