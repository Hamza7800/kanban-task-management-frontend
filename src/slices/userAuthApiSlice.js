import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';


const userAuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${ USERS_URL }/login`,
        method: 'POST',
        body: data
      })
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${ USERS_URL }/logout`,
        method: 'POST',
      })
    }),
    createAccount: builder.mutation({
      query: (data) => ({
        url: `${ USERS_URL }`,
        method: 'POST',
        body: data
      })
    })
  })
});


export const { useLoginMutation, useLogoutMutation, useCreateAccountMutation } = userAuthApiSlice;