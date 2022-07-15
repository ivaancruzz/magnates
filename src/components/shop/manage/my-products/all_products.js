import {getAllShopProducts} from '@utils/getSwr'

import Link from 'next/link'

export default  function MyProducts({shopIds}){

    //ShopIdNumber for filter products by unique id
    //shopProfileId for generate link viewuser

    const [shopIdnumber, shopProfileId] = shopIds

    const { products, isLoading, isError } = getAllShopProducts( shopIdnumber )

    return(
        <>
        {isLoading 
        ?<>Cargando...</>
        : products.map( product => (
            <Link href={`/tienda/${shopProfileId}/${product.link_name}`}>
                <a>{product.name}</a>
            </Link>
        ))
        }
        
        </>
    )
}