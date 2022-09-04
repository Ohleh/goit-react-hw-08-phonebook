import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://connections-api.herokuapp.com/users
// https://connections-api.herokuapp.com/contacts

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      headers.set('Authorization', token);
      return headers;
    },
  }),
  tagTypes: ['User', 'Contact'],
  endpoints: builder => ({
    // useRegisterMutation
    register: builder.mutation({
      query: payload => ({
        url: '/users/signup',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    // useLoginMutation
    login: builder.mutation({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    // useLogoutMutation
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    // useCurrentUserQuery
    currentUser: builder.query({
      query: () => '/users/current',
      //   providesTags: ['User'],
    }),

    // useGetContactsQuery
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    //useAddContactsMutation
    addContacts: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),

    // useRemoveContactsMutation
    removeContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

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

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useCurrentUserQuery,
  useGetContactsQuery,
  useAddContactsMutation,
  useRemoveContactsMutation,
} = userApi; // хуки
