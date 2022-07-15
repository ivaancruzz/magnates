import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../../client-prisma"
import { verifyGetPermissions } from "../../../../../../utils/api/permissions"

export default async function handler(req, res) {
    //Filter by profile ID
    const shops = await prisma.Commerce.findMany({
        where:{
            profileId: {
                not: ''
            }
        }
    })
    
    res.status(200).json(shops)
}
