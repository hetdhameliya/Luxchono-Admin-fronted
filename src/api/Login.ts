import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "./Utils";

export const LoginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        prepareHeaders: prepareHeaders,
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
        verifyEmail: builder.query({
            query: (id: any) => ({
                url: `/admin/verify-email?id=${id}`,
                method: 'get',
            }),
        }),
        ForgotPassword: builder.mutation({
            query: (body: any) => ({
                url: '/forgot-password',
                method: 'post',
                body,
            }),
        }),
        ResetPassword: builder.mutation({
            query: ({ id, newPassword }: any) => ({
                url: `/reset-password?id=${id || "-"}`,
                method: 'post',
                body: { newPassword },
            }),
        }),
        ChangePassword: builder.mutation({
            query: (body: any) => ({
                url: '/change-password',
                method: 'post',
                body,
            }),
        }),
    }),


});

export const { useLoginMutation, useRegisterMutation, useVerifyEmailQuery, useForgotPasswordMutation, useResetPasswordMutation ,useChangePasswordMutation} = LoginApi;





