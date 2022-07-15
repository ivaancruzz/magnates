import Link from 'next/link';
import { useRouter } from "next/router"

import {Nav} from 'react-bootstrap';

import { BsShop, BsCurrencyDollar, BsGear, BsTags} from 'react-icons/bs';
import { FaDolly } from 'react-icons/fa';

export default function NavManageShop(){
    const {shopId} = useRouter().query
    return(
        <Nav
        className="z-1 position-absolute start-50  w-100 justify-content-center z-dropdown top-100 translate-middle"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Link href={`/tienda/${shopId}`}>
                    <a className="nav-link bg-white rounded-circle shadow-sm"><BsShop/></a>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href={`/gestionar/${shopId}/mis-productos`}>
                    <a className="nav-link bg-white rounded-circle shadow-sm"><FaDolly/></a>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href={`/gestionar/${shopId}/mis-categorias`}>
                    <a className="nav-link bg-white rounded-circle shadow-sm"><BsTags/></a>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href={`/gestionar/${shopId}/mis-ventas`}>
                    <a className="nav-link bg-white rounded-circle shadow-sm"><BsCurrencyDollar/></a>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href={`/gestionar/${shopId}/configuraciones`}>
                    <a className="nav-link bg-white rounded-circle shadow-sm"><BsGear/></a>
                </Link>
            </Nav.Item>
        </Nav>
    )
}