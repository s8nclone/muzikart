import { SignupFormSchema } from "@/lib/definitions"
import bcrypt from "bcryptjs"
import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request) {
    const body = await request.json()

    try {
        SignupFormSchema.parse(body);
    } catch (error) {
        return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    const { email, username, password } = body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        // Check if the user already exists
        const existingUser = await prisma.users.findUnique({
            where: { email },
        });
    
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        const user = await prisma.users.create({
            data: {
                email,
                username,
                password_hash: hashedPassword,
            },
        });

        return NextResponse.json({user}, {status: 201})


    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            {
                error: "An error occurred while creating the user",
            },
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }

}