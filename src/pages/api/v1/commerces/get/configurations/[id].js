import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../../client-prisma"
import { verifyGetPermissions } from "../../../../../../utils/api/permissions"
import {isNumeric} from 'validator'



export default async function handler(req, res) {
    const {id} = req.query
    //Find by ID
    const config = await prisma.cConfiguration.findUnique({
        where:{
            commerceId: parseInt(id)
            
        }
    })
    
    res.status(200).json(config)
}
