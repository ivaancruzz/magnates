import { getToken } from "next-auth/jwt"
import { prisma } from "src/client-prisma"
import { verifyGetPermissions } from "@utils/api/permissions"
import {isNumeric} from 'validator'



export default async function handler(req, res) {
    const {shopId, productId} = req.query
    let product = undefined


    if( isNumeric(productId) ){
        //Find  by id/id (get/product/60/11)
        product = await prisma.cProduct.findFirst({
            where:{
                commerceId: parseInt(shopId),
                id: parseInt(productId)
            }
        })
    } else {
        //Find  by id/string (get/product/60/product-name)
        product = await prisma.cProduct.findFirst({
            where:{
                commerceId: parseInt(shopId),
                link_name: productId
            }
        })
    }
       
    
    res.status(200).json(product)
}
