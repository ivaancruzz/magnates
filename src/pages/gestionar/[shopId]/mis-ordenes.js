import {get} from "@utils/api/axios"

//Components
import MyOrders from "@components/shop/manage/my-orders/my_orders"


export default function({shopId}){
    return <MyOrders shop={shopId}></MyOrders>
}
export async function getServerSideProps({params}){
    const {shopId} = params

    //Get shop
    const {data: shop} =  await get.shopById( shopId )

    //Return 404 not found 
    if( !shop  ) return{ notFound: true }
    
    return {props: {shopId: shop.id}}
}
