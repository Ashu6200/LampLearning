import { apiService } from "@/lib/apiService";
import { login, logout } from "./accountSlice";

export const accountService = apiService.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: ({ name, email, password }) => ({
                url: "/api/account/register",
                method: "POST",
                data: { name, email, password },
                credentials: "include",
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const { token } = result;
                    dispatch(regitser({ registerToken: token }));
                } catch (error) {
                    if (error?.status === 500) {
                        console.error("Server error, please try again later.");
                    } else {
                        console.error("Unexpected error:", error);
                    }
                }
            },
        }),
        activateAccount: builder.mutation({
            query: ({ activation_token, activation_code }) => ({
                url: "/api/account/activate_account",
                method: "POST",
                body: { activation_token, activation_code },
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                    dispatch(regitser({ regitsertoken: null }));
                } catch (error) {
                    const status = error?.error?.status;
                    switch (status) {
                        case 400:
                            console.error("Activation code is invalid, please try again.");
                            break;
                        case 409:
                            console.error("User already has an account.");
                            break;
                        case 500:
                            console.error("Server error, please try again later.");
                            break;
                        default:
                            console.error("Unexpected error:", error);
                    }
                }
            },
        }),

        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/api/account/login",
                method: "POST",
                body: { email, password },
                credentials: 'include'
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const { data } = result.data;
                    if (!data) {
                        throw new Error("Invalid response data");
                    }
                    dispatch(login(data));
                } catch (error) {
                    if (error?.status === 401) {
                        console.error("Unauthorized - Invalid credentials");
                    } else if (error?.status === 500) {
                        console.error("Server error, please try again later.");
                    } else {
                        console.error("Unexpected error:", error);
                    }
                }
            },
        }),
        logout: builder.query({
            query: () => ({
                url: "/api/account/logout",
                method: "GET",
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                    dispatch(logout());
                } catch (error) {
                    console.error("Logout failed:", error);
                }
            },
        }),
        changePassword: builder.query({
            query: ({ oldPassword, newPassword, confirmPassword }) => ({
                url: "/api/account/change-password",
                method: "POST",
                data: { oldPassword, newPassword, confirmPassword },
                credentials: "include"
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice.endpoints.logout.initiate());
                } catch (error) {
                    const status = error?.error?.status;
                    switch (status) {
                        case 400:
                            console.error("Invalid credentials, please try again.");
                            break;
                        case 404:
                            console.error("User does not have an account.");
                            break;
                        case 500:
                            console.error("Server error, please try again later.");
                            break;
                        default:
                            console.error("Unexpected error:", error);
                    }
                }
            }
        }),
        forgetPassword: builder.query({
            query: ({ email }) => ({
                url: "/api/account//forget-password",
                method: "POST",
                data: { email },
                credentials: "include"
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    const status = error?.error?.status;
                    switch (status) {
                        case 404:
                            console.error("User does not have an account.");
                            break;
                        case 500:
                            console.error("Server error, please try again later.");
                            break;
                        default:
                            console.error("Unexpected error:", error);
                    }
                }
            }
        })
    }),
});
export const { useLoginMutation, useLogoutQuery } = accountService;
