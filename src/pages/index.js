import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession()
  const [valueInput, setValueInput] = useState('')
  const [valueCheck, setValueCheck] = useState(false)

  const updateName = () => {
    
    fetch('http://localhost:3000/api/v1/users/delete/account',{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    signOut()
    
  }

  if (session) {
    return (
      <>
        {session.user.name} <br/>
        Signed in as {session.user.email} <br />
        whatsapp {session.user.whatsapp ? 'Si':'No'} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <br />
        {/* <input type='text' onChange={(e) => setValueInput( e.target.value )}></input>
        <input type='checkbox'  onClick={(e) => setValueCheck( e.target.checked )}></input> */}
        <button onClick={() => updateName()}>Delete account</button>

        
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

  // export async function getServerSideProps( ){
  //   const prisma = new PrismaClient()

  //   const user_commerce = await prisma.User.findMany({
  //     include:{
  //       commerces: true,
  //     }
  //   })
  //   return {
  //     props:  {
  //       users: JSON.parse(JSON.stringify( user_commerce ))
  //     }
  //   }
  // }