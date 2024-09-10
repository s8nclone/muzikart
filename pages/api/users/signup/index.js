import prisma from "@/lib/db";

export default async function handle(req, res) {
    if (req.method === 'POST') {
        try {
            // Create a new user with the data from the request body
            const result = await prisma.users.create({
                data: {
                    ...req.body
                }
            });

            // Respond with the created user data and a success message
            res.status(200).json({
                message: 'Signup successful',
                user: result
            });
        } catch (error) {
            // Handle any errors that occur during the database operation
            res.status(500).json({ error: 'Error creating user' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}