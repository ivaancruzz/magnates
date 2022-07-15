import {getShopOrders} from '../../../../utils/getSwr'
import FormCreateProduct from '../../../forms/create_product'

export default  function MyOrders( {shop} ){
    const { orders, isLoading, isError } = getShopOrders( shop )

    return(
        <>
        {isLoading 
        ?<>Cargando...</>
        :<>{orders}</>
        }
        
        </>
    )
}