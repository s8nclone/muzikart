
import prisma from "@/lib/db"
import { SignupFormSchema } from "@/lib/definitions"
import bcrypt from "bcryptjs"

export async function signup(state, formData) {
    
    const validatedFields = SignupFormSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { username, email, password } = validatedFields.data

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        // Create a new user in the database
        const user = await prisma.users.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        // Return the created user or a success message
        return {
            message: "Signup successful",
            user,
        };

    } catch (error) {
        console.error("Error creating user:", error);
        return {
            message: "An error occurred while creating your account. Please try again.",
        };
    }
}