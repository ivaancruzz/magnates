//If true, create data in db
export const verifyCreatePermissions = ( token, method, body ) => (token  )

//If true, update data in db
export const verifyUpdatePermissions = ( token, method, body ) => (token && method === 'PUT' && body != '')

//If true, delete data in db
export const verifyDeletePermissions = ( token, method ) => (token && method === 'DELETE')

//If true, get data in db
export const verifyGetPermissions = ( token, method ) => (token && method === 'GET')


