import prisma from "@/lib/db";

export default async function handle(req, res) {
    const result = await prisma.users.create({
        data: {
            ...req.body
        }
    })

    res.json(result)
}