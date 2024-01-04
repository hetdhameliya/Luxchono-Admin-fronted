import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./utils";


export const LoginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder: any) => ({
        login: builder.mutation({
            query: (body: any) => ({
                url: '/admin/login',
                method: 'post',
                body,
            }),
        }),
        register: builder.mutation({
            query: (body: any) => ({
                url: '/admin/register',
                method: 'post',
                body,
            }),
        }),
        verifyEmail : builder.query({
            query: (id: any) => ({
                url: `/admin/verify-email?id=${id}`,
                method: 'get',
            }),
        }),
    }),
    

});

export const { useLoginMutation,useRegisterMutation,useVerifyEmailQuery } = LoginApi;





