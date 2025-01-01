"use server"

import { authApi } from "@/pages/useAxios"

export const signin = async (username, password) => {
    try {
        const res = await authApi.post("/api/signin", {
            username,
            password,
        });

        return res.data

    } catch (error) {
        console.error("Signin failed", error.response.data.error || error.message);
        throw new Error(error.response.data.error || "Signin failed");
        // Handle error case (e.g., display a message to the user)
    }
}