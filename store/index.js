
import { signup } from "@/app/actions/signupAction";
import { signin } from "@/app/actions/signinAction";
import { redirect } from "next/navigation";
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { toast } from "react-toastify";

const useStore = create(
    persist((set) => ({
        user: null,
        isAuth: false,
        auth_token: null,
        products: [],

        setProducts: (product) => {set({products: product})},

        signup: async (email, username, password) => {
            try {
                const data = await signup(email, username, password);
                const token = document.cookie.split('; ').find(row => row.startsWith('token='));
                set({ user: data.user, auth_token: token ? token.split('=')[1] : null, isAuth: true });

                // set({ user: data.user, auth_token: data.token, isAuth: true });
            } catch (error) {
                console.error("Signup failed", error.message);
                set({ isAuth: false });
            }
        },
    
        login: async (username, password) => {
            try {
                const data = await signin(username, password);
                const token = document.cookie.split('; ').find(row => row.startsWith('token='));
                set({ user: data.user, auth_token: token ? token.split('=')[1] : null, isAuth: true });

                // set({ user: data.user, auth_token: data.token, isAuth: true });
            } catch (error) {
                console.error("Login failed", error.message);
                set({ isAuth: false });
            }
        },
    
        logout: () => {
            set({ token: null, isAuth: false });
            // You might also want to clear cookies or localStorage here
            toast.info("Logged out successfully", {
                position: "top-right"
            })
        }
        
        }),
        {
            name: "store",
        }

    )
)

export default useStore