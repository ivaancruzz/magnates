import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyCreatePermissions } from "../../../../../utils/api/permissions"



export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    
    if( !verifyCreatePermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        const commerceId = 1
        
        const email = await prisma.cEmail.create({
            data:{
                commerceId,
                email:'ivannicolascruz01@gmail.com'  
            }
        })
        
        res.status(200).json(email)
    }
}
