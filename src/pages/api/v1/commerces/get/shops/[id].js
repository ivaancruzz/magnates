import { getToken } from "next-auth/jwt"
import { prisma } from "src/client-prisma"
import { verifyGetPermissions } from "../../../../../../utils/api/permissions"
import {isNumeric} from 'validator'



export default async function handler(req, res) {
    const {id} = req.query

    // Query get
    let shop = undefined

    if( isNumeric(id) ){
        //Find by ID
        shop = await prisma.Commerce.findUnique({
            where:{
                id: parseInt(id)
                
            }
        })
    } else {
        //Find by profile id Ex: magnates.com/cubic
        shop = await prisma.Commerce.findUnique({
            where:{
                profileId: id
                
            }
        })
    }
    
    res.status(200).json(shop)
}
