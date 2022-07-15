import {useRouter} from "next/router"
import {get} from "@utils/api/axios"

import { useSWRConfig, SWRConfig, unstable_serialize } from "swr"

import { getShopById } from "@utils/getSwr"
import { FaShopify } from "react-icons/fa"

import ProductView from "@components/shop/profile/view_product"

export default function CreateShop({fallback, shopId, productId}){ 
    return(
        <SWRConfig value={{ fallback }}>
            <ProductView id={productId} shop={shopId} />
        </SWRConfig>
    )

   
    
    
}

export async function getStaticPaths(){
    const {data: shops} = await get.allShops()
    // Get the paths we want to pre-render based on shops
    
    let paths = []
    for( const shop of shops){
        const {data: products} = await get.shopProducts( shop.id )
    
        if( products.length ){
            const path = products.map( product => (
                {params: {shopId: shop.profileId, product: product.link_name}}
            ))

            paths.push( ...path )

        } 
    }

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({params}){
    const shopId = params.shopId
    const productId = params.product

    //Get shop 
    const {data: shop} =  await get.shopById( shopId )
    const {data: product} = await get.shopProduct( shop.id, productId )

    if( !shop || !product ) return { notFound: true }

    //if exist...

    //https://swr.vercel.app/es-ES/docs/with-nextjs#complex-keys
    const keyShop = ['api', 'v1', 'commerces', 'get', 'shops', shop.id]
    const keyProduct = ['api', 'v1', 'products', 'get', 'product', shop.id, product.id]
    
    return({
        props:{
           productId: product.id,
           shopId: shop.id,
           fallback:{
                [unstable_serialize(keyProduct)]: product,
           }
        }
    })
}

