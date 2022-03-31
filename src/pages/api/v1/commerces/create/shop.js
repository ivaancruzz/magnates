import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyCreatePermissions } from "../../../../../utils/api/permissions"


export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    
    if( !verifyCreatePermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        
        const shop = await prisma.commerce.create({
            data:{
                userId: token.user.id,
                name:'Gcyni',
                image:'',
                expiration_date: new Date()
            }
         })
        
        res.status(200).json(shop)
    }
}
