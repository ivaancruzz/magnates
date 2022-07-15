import {get} from "@utils/api/axios"

//Components
import MyCategories from "@components/shop/manage/my-categories/my_categories"

export default function({shopId}){
    return <MyCategories shop={shopId}></MyCategories>
}
export async function getServerSideProps({params}){
    const {shopId} = params

    //Get shop
    const {data: shop} =  await get.shopById( shopId )

    //Return 404 not found 
    if( !shop  ) return{ notFound: true }
    
    return {props: {shopId: shop.id}}
}
