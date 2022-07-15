import { AiOutlineShopping } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import Stack from 'react-bootstrap/Stack';

import ModalBase from '../../components/bootstrap/modal'
import ItemDetail from '../../components/product/item_detail_purchase';
import UserPageLayout from '@components/layout_user_page';

import {useState} from 'react'
export default function Compras(){
    const [showModal, setShowModal] = useState(false)
    const [contentModal, setContentModal] = useState({
        title: '',
        body: <></>
    })


    return(
        <UserPageLayout
        title="Mis Compras"
        icon={<AiOutlineShopping size={50}/>}>
            <ModalBase show={showModal} handleClose={() => setShowModal( false )} contentModal={contentModal}/>
            <FiFilter className='fixed-bottom-buttons p-2 rounded-circle m-3 bg-white shadow text-info' size={45}/>

            <Stack className="pt-3 " gap={3}>
                <ItemDetail status='Finalizar compra' showModal={() => setShowModal( true )} />
                <ItemDetail status='Pagado' />
                <ItemDetail status='Entregado' />
                <ItemDetail status='Entregado' />
                <ItemDetail status='Entregado' />
                <ItemDetail status='Entregado' />
                <ItemDetail status='Entregado' />

                
            </Stack>
        </UserPageLayout>
    )
}