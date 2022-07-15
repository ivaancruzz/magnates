import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyCreatePermissions, validate } from "../../../../../utils/api/permissions"
import { months } from "../../../../../utils/expiration_date"



import cloudinary from 'cloudinary';
import { formidable } from 'formidable'
import { PassThrough } from 'node:stream';


export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method


    if( !verifyCreatePermissions(token, method) )
      res.status(403).json({ message: 'Forbidden' })
    else{
        if( validate.createShop( req.body ) ){
        //Create shop

        const {
          shopName,
          shopStreet,
          shopNumberStreet,
          shopPhoneNumber,
          shopProvince
        } = req.body
        
        const shop = await prisma.commerce.create({
            data:{
                userId: token.sub,
                name: shopName,
                expiration_date: months(1),

                address:{
                  create: [{
                    street: shopStreet,
                    number_street: parseInt(shopNumberStreet),
                    province: shopProvince
                  }]
                },
                phones:{
                  create:[{
                    phone: shopPhoneNumber,
                    whatsapp: true
                  }]
                }
            }
         })

        //Create shop configuration
        await prisma.cConfiguration.create({
          data:{
            commerceId: shop.id
          }
        })

          res.status(200).json({shop: req.body})

        } else 
          res.status(400).json({message:'Bad request'})

        
        
       
    }
}
