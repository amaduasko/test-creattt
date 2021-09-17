import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IBeer } from '../types';

export const beerApi = createApi({
  reducerPath: 'beerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/' }),
  endpoints: (builder) => ({
    getAllBeer: builder.query<IBeer[], void>({
      query: () => `beers`,
    }),
    getBeerByPageNdFilter: builder.query<
      IBeer[],
      { page: number; abv: number; name: string }
    >({
      query: ({
        page,
        abv,
        name,
      }: {
        page: number;
        abv: number;
        name: string;
      }) =>
        `beers?page=${page}&per_page=20${abv && `&abv_gt=${abv}`}${
          name && `&beer_name=${name}`
        }`,
    }),
  }),
});

export const { useGetAllBeerQuery, useGetBeerByPageNdFilterQuery } = beerApi;
