import {get} from "@utils/api/axios"

//Components
import Configurations from "../../../components/shop/manage/configurations/configurations"

export default function({shopId}){
    return <Configurations shop={shopId}></Configurations>
}
export async function getServerSideProps({params}){
    const {shopId} = params

    //Get shop
    const {data: shop} =  await get.shopById( shopId )

    //Return 404 not found 
    if( !shop  ) return{ notFound: true }
    
    return {props: {shopId: shop.id}}
}
