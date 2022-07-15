import {get} from "@utils/api/axios"

//Components
import UserPageLayout from '@components/layout_user_page'
import MySales from "@components/shop/manage/my-sales/my_sales"

import {BsCurrencyDollar} from 'react-icons/bs'

export default function({shopId}){
    return (
        <MySales shop={shopId} />
    )
}
export async function getServerSideProps({params}){
    const {shopId} = params

    //Get shop
    const {data: shop} =  await get.shopById( shopId )

    //Return 404 not found 
    if( !shop  ) return{ notFound: true }
    
    return {props: {shopId: shop.id}}
}
