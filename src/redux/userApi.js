import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    login: builder.mutation({
      query: payload => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    // getContacts: build.query({
    //   query: () => '/contact',
    //   providesTags: ['Contact'],
    // }),

    // removeContacts: builder.mutation({
    //   query: id => ({
    //     url: `/contact/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
    //
  }),
});

export const { useLoginMutation } = userApi;
