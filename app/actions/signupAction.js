"use server"

import authApi from "@/pages/useAxios";

export const signup = async (email, username, password) => {
    try {
        const res = await authApi.post("/api/signup", {
            email,
            username,
            password,
        });

        return res.data

    } catch (error) {
        console.error("Signup failed", error.response.data.error || error.message);
        throw new Error(error.response.data.error || "Signup failed");
        // Handle error case (e.g., display a message to the user)
    }
}