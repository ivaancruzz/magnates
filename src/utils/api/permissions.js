//If true, create data in db
export const verifyCreatePermissions = ( token, method, body ) => (token  )

//If true, update data in db
export const verifyUpdatePermissions = ( token, method, body ) => (token && method === 'PUT' && body != '')

//If true, delete data in db
export const verifyDeletePermissions = ( token, method ) => (token && method === 'DELETE')

//If true, get data in db
export const verifyGetPermissions = ( token, method ) => (token && method === 'GET')


//Validate 
import {isEmpty, isNumeric, isMobilePhone, isMobilePhoneLocales} from 'validator';
export const validate = {

    createShop: ( obj ) => {
        return (
            !isEmpty( obj.shopName) &&
            !isEmpty( obj.shopStreet) &&
            !isEmpty( obj.shopProvince) &&
            isNumeric( obj.shopNumberStreet ) &&
            isMobilePhone( obj.shopPhoneNumber, isMobilePhoneLocales['es-AR'] ) 
        )
    },

    updateAddress: (obj) => {
        return(
            !isEmpty( obj.address) &&
            isNumeric( obj.address_number) &&
            !isEmpty( obj.address_province )
        )
    }
}

