
import { z } from "zod"

export const SignupFormSchema = z.object({
    email: z.string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
    username: z.string().min(1, "username is required"),
    password: z.string()
    .min(1, "password is required")
    .min(6, "password must be more than 6 characters")
    .max(24, "password cannot be more than 24 characters")
})