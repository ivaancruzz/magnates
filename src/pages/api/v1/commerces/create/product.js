import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyCreatePermissions } from "@utils/api/permissions"
import {generateLinkName} from '@utils/generate_link_name'


export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method

    const {
        commerceId,
        name,
        description,
        price,
        stock
    } = req.body

    
    if( !verifyCreatePermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{        
        const product = await prisma.cProduct.create({
            data:{
                commerceId,
                name,
                link_name: generateLinkName(name),
                description,
                price: parseFloat( price ),   
                stock: parseInt( stock ),
            }

        })
        
        res.status(200).json(product)
    }
}
