import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyGetPermissions } from "../../../../../utils/api/permissions"


export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    if( !verifyGetPermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        
        //Query get
        const user = await prisma.User.findUnique({
            where:{ email: token.email },
            include: { commerces: true }
        })
        
        res.status(200).json(user.commerces)
    }
}
