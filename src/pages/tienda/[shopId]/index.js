import {useRouter} from "next/router"
import {get} from "@utils/api/axios"

import ShopProfile from "@components/shop/profile/profile";

export default function CreateShop({shop}){
    const router = useRouter()
    console.log(shop);
    
    return(
        <ShopProfile shop={shop}/>
    )

   
    
    
}

export async function getStaticPaths(){
    const {data: shops} = await get.allShops()
    // Get the paths we want to pre-render based on shops
    const paths = shops.map((shop) => ([
        {params: { shopId: shop.profileId}},
        // {params: { route: [shop.profileId, "productos"]}}

    ])).flat()


    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({params}){
    const shopId = params.shopId

    //Get shop
    const {data: shop} =  await get.shopById( shopId )    

    return({
        props:{
           shop
        }
    })
}

