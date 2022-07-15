import LayoutShopManage from '@components/layout_shop_manage'

import {getShopConfigurations} from '@utils/getSwr'

import { BsGear} from 'react-icons/bs';

export default  function Configurations( {shop} ){
    const { configurations, isLoading, isError } = getShopConfigurations( shop )

    return(
        <LayoutShopManage
        title="Configuraciones" 
        icon={<BsGear size={50}/>}>
        {isLoading 
        ?<>Cargando...</>
        :<>{configurations.status_sales}</>
        }
        
        </LayoutShopManage>
    )
}