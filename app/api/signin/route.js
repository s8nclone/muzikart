import { SigninFormSchema } from "@/lib/definitions";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
    const body = await request.json();

    try {
        SigninFormSchema.parse(body);
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid input", details: error.errors }, 
            { status: 400 }
        );
    }

    const { username, password } = body;

    try {
        const user = await prisma.users.findUnique({
            where: { username },
        });

        // Improved: Unified invalid credentials response to prevent leaking info about existing users.
        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            return NextResponse.json(
                { error: "Invalid username or password" }, 
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { user_id: user.user_id, email: user.email, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return NextResponse.json(
            { 
                user: { user_id: user.user_id, email: user.email, username: user.username }, 
                token 
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Signin error:", error.message);
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}



// import { SigninFormSchema } from "@/lib/definitions";
// import bcrypt from "bcryptjs";
// import prisma from "@/lib/db";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export async function POST(request) {
//     const body = await request.json();

//     // Validate input
//     try {
//         SigninFormSchema.parse(body);
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Invalid input", details: error.errors },
//             { status: 400 }
//         );
//     }

//     const { username, password } = body;

//     try {
//         //get user from the database
//         const user = await prisma.users.findUnique({
//             where: { username },
//         });

//         //if user not found or password does not match
//         if (!user || !bcrypt.compareSync(password, user.password_hash)) {
//             return NextResponse.json(
//                 { error: "Invalid credentials" },
//                 { status: 401 }
//             );
//         }

//         //generate token
//         const token = jwt.sign(
//             { user_id: user.user_id, email: user.email, username: user.username },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         //return user details and the token
//         return NextResponse.json(
//             {
//                 user: {
//                     user_id: user.user_id,
//                     email: user.email,
//                     username: user.username,
//                 },
//                 token,
//             },
//             { status: 200 }
//         );
        
//     } catch (error) {
//         console.error("Error during login:", error);
//         return NextResponse.json(
//         { error: "An error occurred during login" },
//         { status: 500 }
//         );
//     }
// }
