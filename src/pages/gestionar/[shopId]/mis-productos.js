import {get} from "@utils/api/axios"


//Components
import ManageMyProducts from "@components/shop/manage/my-products/index"


export default function({shopIds}){
    return <ManageMyProducts shopIds={shopIds}></ManageMyProducts>
}
export async function getServerSideProps({params}){
    const {shopId} = params

    //Get shop
    const {data: shop} =  await get.shopById( shopId )

    //Return 404 not found 
    if( !shop  ) return{ notFound: true }
    
    return { props: 
        {shopIds: [shop.id, shop.profileId] } 
    }
}
