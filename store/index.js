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