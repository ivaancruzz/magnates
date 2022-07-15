import { getToken } from "next-auth/jwt"
import { prisma } from "../../../../../client-prisma"
import { verifyUpdatePermissions } from "../../../../../utils/api/permissions"
import validator from 'validator';

export default async function handler(req, res) {
    const token = await getToken({req})
    const method = req.method
    const {name} = req.body
    
    if( !verifyUpdatePermissions(token, method, name) )
      res.status(403).json({ message: 'Forbidden' })
    else{
      if( validator.isAlpha( name, 'es-ES', { ignore: ' ' } ) ){

        //Query update
        await prisma.User.update({
            where:{ email: token.email },
            data: {name}
        })
        res.status(201).json({ message: 'ok' })
      } else {
        res.status(400).json({ message: 'not is alpha' })
      }
    }
}
