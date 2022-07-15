import { AiOutlineShopping } from 'react-icons/ai';
import { RiShoppingCartLine, RiHeartLine } from 'react-icons/ri';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { BsShop, BsCurrencyDollar, BsGear} from 'react-icons/bs';
import { FaDolly } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';

import {getUserShops} from "@utils/getSwr";

import Image from 'next/image';
import Link from 'next/link';


export default function NavAccordion(){
    const {shops, isLoading, isError } = getUserShops()

    if( isLoading ) return <>Cargando Tus tiendas...</>


    const shopItem = shops.map( (shop, index) => (
        <>
        <Accordion.Item eventKey={index} className="border-0 mt-2">
            <Accordion.Header className="d-flex flex-row border">
                <Image src={shop.image} width="30" height="30" layout="intrinsic" className="rounded-circle"/>
                {shop.name}
            </Accordion.Header>
            <Accordion.Body className="p-0">
            <Stack gap={2}>
                <Link href={`/tienda/${!shop.profileId ? shop.id:shop.profileId}`}>
                    <a className='text-end border-start text-muted  border-2 border-muted shadow-sm p-2 d-flex justify-content-between align-items-center'>
                        <BsShop size={30}/>

                        <span>Perfil</span>
                    </a>
                </Link>
                <Link href={`/gestionar/${!shop.profileId ? shop.id:shop.profileId}/mis-ventas`}>
                    <a className='text-end border-start border-2 border-muted text-muted shadow-sm p-2 d-flex justify-content-between align-items-center'>
                        <BsCurrencyDollar size={30}/>

                        <span>Mis ventas</span>
                    </a>
                </Link>
                <Link href={`/gestionar/${!shop.profileId ? shop.id:shop.profileId}/mis-productos`}>
                    <a className='text-end border-start border-2 border-muted text-muted shadow-sm p-2 d-flex justify-content-between align-items-center'>
                        <FaDolly size={30}/>

                        <span>Mis productos</span>
                    </a>
                </Link>
                <Link href={`/gestionar/${!shop.profileId ? shop.id:shop.profileId}/configuraciones`}>
                    <a className='text-end border-start border-2 border-muted text-muted shadow-sm p-2 d-flex justify-content-between align-items-center'>
                        <BsGear size={30}/>

                        <span>Configuraciones</span>
                    </a>
                </Link>
            </Stack>
            </Accordion.Body>
        </Accordion.Item>
        </>
    ))
    return(
        <Accordion gap={2}>
            {shopItem}
        </Accordion>
    )
}