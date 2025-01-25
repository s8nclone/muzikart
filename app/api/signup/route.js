import { SignupFormSchema } from "@/lib/definitions";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();

    try {
        // Improved: Added try-catch block around schema validation to ensure error responses are consistent.
        SignupFormSchema.parse(body);
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid input", details: error.errors }, 
            { status: 400 }
        );
    }

    const { email, username, password } = body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.$transaction(async (tx) => {
            const existingUser = await tx.Users.findUnique({ where: { email } });
            if (existingUser) {
                throw new Error("An account with this email already exists.");
            }

            return tx.Users.create({
                data: { 
                    email, 
                    username, 
                    password: hashedPassword 
                },
            });
        });

        const token = jwt.sign(
            { user_id: user.user_id, email: user.email, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        //use `SameSite=Strict` for enhanced cookie security.
        const isProd = process.env.NODE_ENV === "production";
        const cookieOptions = {
            "Set-Cookie": `token=${token}; HttpOnly; SameSite=Strict; ${isProd ? 'Secure;' : ''} Path=/; Max-Age=3600`,
        };

        return NextResponse.json(
            { user: { user_id: user.user_id, email: user.email, username: user.username }, token },
            { status: 201, headers: cookieOptions }
        );
    } catch (error) {
        console.error("Signup error:", error.message);
        if (error.message.includes("account")) {
            return NextResponse.json(
                { error: error.message },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}



// import { SignupFormSchema } from "@/lib/definitions";
// import bcrypt from "bcryptjs";
// import prisma from "@/lib/db";
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//     const body = await request.json();

//     //validate input
//     try {
//         SignupFormSchema.parse(body);
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Invalid input", details: error.errors },
//             { status: 400 }
//         );
//     }

//     const { email, username, password } = body;

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = await prisma.$transaction(async (tx) => {
//             const existingUser = await tx.users.findUnique(
//                 { 
//                     where: { email } 
//                 }
//             );

//             if (existingUser) {
//                 throw new Error("User already exists");
//             }

//             return tx.users.create({
//                 data: { 
//                     email, 
//                     username, 
//                     password_hash: hashedPassword 
//                 },
//             });
//         });

//         // Generate JWT
//         const token = jwt.sign(
//             { user_id: user.user_id, email: user.email, username: user.username },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         const isProd = process.env.NODE_ENV === "production";
//         const cookieOptions = {
//             "Set-Cookie": `token=${token}; HttpOnly; ${isProd ? 'Secure;' : ''} Path=/; Max-Age=3600`,
//         };

//         return NextResponse.json(
//             { user: { user_id: user.user_id, email: user.email, username: user.username }, token },
//             { status: 201, headers: cookieOptions }
//         );
//     } catch (error) {
//         if (error.message === "User already exists") {
//             return NextResponse.json(
//                 { error: "User already exists" },
//                 { status: 409 }
//             );
//         }
//         console.error("Error creating user:", error);
//         console.log("signup error:", error)
//         return NextResponse.json(
//             { error: "An unexpected error occurred" },
//             { status: 500 }
//         );
//     }
// }
