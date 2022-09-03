import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//
//   https://63063fe0c0d0f2b801193d94.mockapi.io/contact
//
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63063fe0c0d0f2b801193d94.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    // useGetContactsQuery
    getContacts: build.query({
      query: () => '/contact',
      providesTags: ['Contact'],
    }),

    //useAddContactsMutation
    addContacts: build.mutation({
      query: newContact => ({
        url: '/contact',
        method: 'POST', // add
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),

    // useRemoveContactsMutation
    removeContacts: build.mutation({
      query: id => ({
        url: `/contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    // findContacts: build.query({
    //   query: name => `/contact/${name}`,
    //   providesTags: ['Contact'],
    // }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useRemoveContactsMutation,
  //   useFindContactsQuery,
} = contactsApi;
