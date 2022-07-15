import {get} from "@utils/api/axios"

//Components
import CreateProduct from "@components/shop/manage/my-products/create_product"


export default function({shopId}){
    return <CreateProduct shop={shopId}></CreateProduct>
}
export async function getServerSideProps({params}){
    const {shopId} = params

    //Get shop
    const {data: shop} =  await get.shopById( shopId )

    //Return 404 not found 
    if( !shop  ) return{ notFound: true }
    
    return {props: {shopId: shop.id}}
}
