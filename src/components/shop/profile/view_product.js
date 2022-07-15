import {getProduct} from '@utils/getSwr'
import { Button } from 'react-bootstrap'

export default  function ProductView({id,shop}){
    const { product, isLoading, isError } = getProduct( shop, id )

    return(
        <>
        {isLoading 
        ?<>Cargando...</>
        :<>
            {product.name} <br/>
            {product.description} <br/>
            <Button variant="danger">Comprar</Button>
        </>
        }
        
        </>
    )
}