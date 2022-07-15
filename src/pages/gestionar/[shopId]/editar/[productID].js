import {get} from "@utils/api/axios"

//Components
import EditProduct from "@components/shop/manage/my-products/edit_product"


export default function({shop, product}){
    return <EditProduct shop={shop} product={product}></EditProduct>
}
export async function getServerSideProps({params}){
    const {shopId, productID} = params

    //Get shop
    const {data: product} =  await get.productById( productID )

    //Return 404 not found 
    if( !product  ) return{ notFound: true }
    
    return {
        props: {
            product,
            shop: shopId
        }
    }
}
