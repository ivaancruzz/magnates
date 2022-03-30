import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyUpdatePermissions, userDataUpdate } from "../../../../../utils/api-utils"
import validator from 'validator';


export default async function handler(req, res) {
  const token = await getToken({req})
  const method = req.method
  const {phone, whatsapp} = req.body

  if( !verifyUpdatePermissions(token, method, phone) )
    res.status(403).json({ message: 'Forbidden' })
  else{
    if( validator.isMobilePhone( phone, validator.isMobilePhoneLocales['es-AR']) && validator.isBoolean( whatsapp.toString() ) ){
      userDataUpdate( token, prisma, {phone, whatsapp} )
      res.status(201).json({ message: 'ok' })
    } else {
      res.status(400).json({ message: 'bad request' })
    }
  }
}

