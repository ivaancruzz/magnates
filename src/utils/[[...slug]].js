import {useRouter} from "next/router"
import {get} from "@utils/api/axios"
export default function CreateShop({data}){
    const router = useRouter()
    console.log(data);
    
    return(
        <>
        Productos
        </>
    )

   
    
    
}

export async function getStaticPaths(){
    const {data: {data: shops}} = await get.allShops()
    // Get the paths we want to pre-render based on shops
    const paths = shops.map((shop) => ([
        {params: { slug: [shop.profileId]}},
        {params: { slug: [shop.profileId, 'productos']}},
        // {params: { route: [shop.profileId, "productos"]}}

    ])).flat()


    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({params}){
    const [shopId, route] = params.slug
    let routesAccepted = [
        'productos', 
        'nuevo-producto', 
        'mis-ventas', 
        'mis-ordenes', 
        'mis-categorias', 
        'configuraciones']

    //Get shop
    const {data: {data:shop}} =  await get.shopById( shopId )
    const {data} =  await get.shopProducts( shop.id )

    
    data.map( p => {
        routesAccepted.push( p.name )
    })

   console.log(routesAccepted);

    //Return 404 not found 
    if( !shop || !routesAccepted.includes( currentRoute ) )
        return{ notFound: true }
    return({
        props:{
           data
        }
    })
}

