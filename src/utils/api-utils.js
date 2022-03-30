//If true, update data in db
export const verifyUpdatePermissions = ( token, method, body ) => (token && method === 'PUT' && body != '')

//If true, delete data in db
export const verifyDeletePermissions = ( token, method ) => (token && method === 'DELETE')

//If true, get data in db
export const verifyGetPermissions = ( token, method ) => (token && method === 'GET')

export async function userDataUpdate( token, prisma, data ){
    /*
    Token: Get data user authenticated
    Prisma: Query
    Data: New data
    */
    const user = await prisma.User.update({
        where:{ email: token.email },
        data
    })
}

export async function userAccountDelete( token, prisma){
    /*
    Token: Get data user authenticated
    Prisma: Query
    */
    const user = await prisma.User.delete({
        where:{ email: token.email }
    })
}

export async function userGet( token, prisma, include){
    /*
    Token: Get data user authenticated
    Prisma: Query
    */
    const user = await prisma.User.findUnique({
        where:{ email: token.email },
        include
    })

    return user
}


