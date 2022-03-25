import { useSession, signIn, signOut } from "next-auth/react"

import { PrismaClient } from "@prisma/client"



export default function Home({users}) {

  console.log( users[0].name );

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>

        <ul>
          {users.map( u => (
           <li key={u.id}>{u.name}</li>
          ))}
        </ul>

      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('google')}>Sign in</button>
    </>
  )
}

export async function getServerSideProps( ){
  const prisma = new PrismaClient()

  const users = await prisma.User.findMany()

  return {
    props:  {users}
  }
}