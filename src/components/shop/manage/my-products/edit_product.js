import Link from 'next/link'
import {BiEditAlt} from 'react-icons/bi'
import {FaDolly} from 'react-icons/fa'
import FormCreateProduct from '../../../forms/create_product'

import {Container, Breadcrumb} from 'react-bootstrap'
import UserPageLayout from '@components/layout_user_page'

export default  function EditProduct( {shop, product} ){

    return (
        <UserPageLayout
        title="Editar producto"
        icon={<BiEditAlt size={50}/>}>
            <Breadcrumb>
                <Breadcrumb.Item >
                    <Link href={`/gestionar/${shop}/mis-productos`}>
                        <a ><FaDolly/> Mis productos</a>
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
            </Breadcrumb>

            {/* <FormCreateProduct categories={categories} shop={shop}></FormCreateProduct> */}
        </UserPageLayout>
    )
}