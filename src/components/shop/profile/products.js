import { getAllShopProducts } from "@utils/getSwr"

import Link from "next/link"

export default function ShopProducts({id}){

    const { products, isLoading, isError } = getAllShopProducts( id )
    
    return (
        <>
        {isLoading 
        ?<>Cargando...</>
        : products.map( product => (
            <Link href={`/tienda/${id}/${product.link_name}`}>
                <a>{product.name}</a>
            </Link>
        ))
        }
        </>
    )
}