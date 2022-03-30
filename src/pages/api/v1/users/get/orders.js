import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyGetPermissions, userGet } from "../../../../../utils/api-utils"


export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    
    if( !verifyGetPermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        
        const user = await userGet( token, prisma, {
            orders: true
        } )
        
        res.status(200).json(user.orders)
    }
}
