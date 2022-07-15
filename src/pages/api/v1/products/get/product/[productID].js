import { getToken } from "next-auth/jwt"
import { prisma } from "src/client-prisma"
import { verifyGetPermissions } from "@utils/api/permissions"
import {isNumeric} from 'validator'



export default async function handler(req, res) {
    const {productID} = req.query

    //Find  by id/id (get/product/60/11)
    const product = await prisma.cProduct.findUnique({
        where:{
            id: parseInt(productID)
        }
    })
       
    
    res.status(200).json(product)
}
