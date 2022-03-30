import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyDeletePermissions, userAccountDelete } from "../../../../../utils/api-utils"


export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    
    if( !verifyDeletePermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        
        userAccountDelete( token, prisma )
        
        res.status(200).json({ message: 'ok' })
    }
}
