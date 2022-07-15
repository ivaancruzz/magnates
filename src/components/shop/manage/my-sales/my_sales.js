import LayoutShopManage from '@components/layout_shop_manage'
import {getShopSales} from '../../../../utils/getSwr'
import FormCreateProduct from '../../../forms/create_product'

import Item from '@components/product/item_detail_purchase'

import {BsCurrencyDollar} from 'react-icons/bs'
import { Stack } from 'react-bootstrap'

export default  function MySales( {shop} ){
    const { sales, isLoading, isError } = getShopSales( shop )

    return(
        <LayoutShopManage 
        title="Mis ventas"
        icon={<BsCurrencyDollar size={50}/>}>
        {isLoading 
        ?<>Cargando...</>
        :
        <Stack gap={3}>
                <Item status='Finalizar compra' showModal={() => setShowModal( true )} />
                <Item status='Pagado' />
                <Item status='Entregado' />
                <Item status='Entregado' />
                <Item status='Entregado' />
                <Item status='Entregado' />
                <Item status='Entregado' />
                <Item status='Entregado' />
        </Stack>
        }
        
        </LayoutShopManage>
    )
}