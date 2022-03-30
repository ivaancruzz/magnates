import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyUpdatePermissions, userDataUpdate } from "../../../../../utils/api-utils"
import validator from 'validator';


export default async function handler(req, res) {
  const token = await getToken({req})
  const method = req.method
  const {document} = req.body
  
  if( !verifyUpdatePermissions(token, method, document) )
    res.status(403).json({ message: 'Forbidden' })
  else{
    if( validator.isIdentityCard( document, 'any' ) ){
      userDataUpdate( token, prisma, {document} )
      res.status(201).json({ message: 'ok' })
    } else {
      res.status(400).json({ message: 'bad request' })
    }
  }
}

