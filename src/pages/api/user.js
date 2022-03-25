// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const new_user =  await prisma.User.create({
    data:{
      name: 'ivan'
    }
  })


  res.status(200).json( {'asd':'asd'} )
}
