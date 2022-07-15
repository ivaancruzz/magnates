import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyUpdatePermissions, validate } from "../../../../../utils/api/permissions"
import validator from 'validator';

export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method
    const {address, address_number, address_province} = req.body
    
    if( !verifyUpdatePermissions(token, method, req.body) )
      res.status(403).json({ message: 'Forbidden' })
    else{
      if( validate.updateAddress(req.body) ){

        //https://developers.google.com/maps/documentation/urls/get-started
        const replaceAddress = `${address.replaceAll(' ', '+')}`
        const linkMaps = `https://www.google.com/maps/search/?api=1&query=${replaceAddress}+${address_number}+${address_province}`
        
        //Query update
        await prisma.User.update({
            where:{ email: token.email },
            data: {
              address,
              address_number,
              address_province,
              linkMaps
            }
        })
        res.status(201).json({ message: 'ok' })
      } else {
        res.status(400).json({ message: 'not is alpha' })
      }
    }
}
