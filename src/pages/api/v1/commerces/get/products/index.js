import { getToken } from "next-auth/jwt"
import { prisma } from "src/client-prisma"
import { verifyGetPermissions } from "@utils/api/permissions"

export default async function handler(req, res) {
    //Filter by profile ID
    const products = await prisma.cProduct.findMany()
    
    res.status(200).json(products)
}
