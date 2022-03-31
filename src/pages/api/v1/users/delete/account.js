import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyDeletePermissions } from "../../../../../utils/api/permissions"



export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    
    if( !verifyDeletePermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        
        //Query delete
        await prisma.User.delete({
            where:{ email: token.email }
        })
        
        res.status(200).json({ message: 'ok' })
    }
}
