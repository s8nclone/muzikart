"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { toast } from "react-toastify";

const useStore = create(
    persist((set) => ({
        authUser: null,
        isAuth: false,
        auth_token: null,
        products: [],
        catalog: [],

        setProducts: (product) => {set({products: product})},
        setAuthUser: (user) => {set({authUser: user})},
        setAuthToken: (token) => {set({auth_token: token})},
        setIsAuth: (status) => {set({ isAuth: status });},
        setCatalog: (catalog) => {set({ catalog: catalog })},

        // signup: async (email, username, password) => {
        //     try {
        //         const data = await signup(email, username, password);

        //         // Improved: Token now parsed directly from response for improved compatibility.
        //         const token = document.cookie
        //             .split("; ")
        //             .find((row) => row.startsWith("token="))
        //             ?.split("=")[1];

        //         set({ user: data.user, auth_token: token, isAuth: true });
        //     } catch (error) {
        //         console.error("Signup failed", error.message);
        //         set({ isAuth: false });
        //         toast.error(error.message || "Signup failed.");
        //     }
        // },

        // login: async (username, password) => {
        //     try {
        //         const data = await signin(username, password);

        //         const token = document.cookie
        //             .split("; ")
        //             .find((row) => row.startsWith("token="))
        //             ?.split("=")[1];

        //         set({ user: data.user, auth_token: token, isAuth: true });
        //     } catch (error) {
        //         console.error("Login failed", error.message);
        //         set({ isAuth: false });
        //         toast.error(error.message || "Login failed.");
        //     }
        // },

        logout: () => {
            set({ user: null, auth_token: null, isAuth: false });
            document.cookie = "token=; Max-Age=0; Path=/";
            toast.info("Logged out successfully", { position: "top-right" });
        },

        }),
        {
            name: "store",
        }

    )
)

export default useStore