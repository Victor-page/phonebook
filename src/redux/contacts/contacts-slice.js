import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      token && headers.set('Authorization', 'Bearer ' + token);

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: (contact) => ({ url: '/contacts', method: 'POST', body: contact }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
