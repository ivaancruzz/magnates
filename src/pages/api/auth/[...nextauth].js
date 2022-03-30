import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { prisma } from "../../../client-prisma";

export default NextAuth({
  session: {
    strategy: "jwt",
  

    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      const u = await prisma.User.findUnique({
        where:{
          email: token.email
        }
      })

      token.user = u

      return token
    },
    async session({ session, token }) {
      session.user = token.user
    
      return session
    },
  }
})