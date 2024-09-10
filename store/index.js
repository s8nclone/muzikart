
import { signup } from "@/app/actions/signupAction";
import { redirect } from "next/navigation";
import { create } from "zustand"
import { persist } from "zustand/middleware"

const useStore = create(
    persist((set) => ({
        user: null,
        isAuth: false,
        auth_token: null,

        signup: async (email, username, password) => {
            try {
                const data = await signup(email, username, password);
                set({ user: data.user, auth_token: data.token, isAuth: true });
            } catch (error) {
                console.error("Signup failed", error.message);
                set({ isAuth: false });
            }
        },
    
        login: async (email, password) => {
            try {
                const data = await login(email, password);
                set({ user: data.user, auth_token: data.token, isAuth: true });
            } catch (error) {
                console.error("Login failed", error.message);
                set({ isAuth: false });
            }
        },
    
        logout: () => {
            set({ user: null, token: null, isAuth: false });
            // You might also want to clear cookies or localStorage here
        }
        
        }),
        {
            name: "store",
        }

    )
)

export default useStore