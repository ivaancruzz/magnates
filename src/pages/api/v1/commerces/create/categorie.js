import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyCreatePermissions } from "../../../../../utils/api/permissions"



export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    const {commerceId, name} = req.body

    
    if( !verifyCreatePermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        const categorie = await prisma.cCategorie.create({
            data:{
                commerceId,
                name
            }
        })
        
        res.status(200).json(categorie)
    }
}
