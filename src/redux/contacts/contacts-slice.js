import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61b44d0559c6ac0017300fbe.mockapi.io',
  }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
    addContact: builder.mutation({
      query: (contact) => ({ url: '/contacts', method: 'POST', body: contact }),
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
