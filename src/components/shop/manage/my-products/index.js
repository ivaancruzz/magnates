import { useState } from 'react'
import LayoutShopManage from '@components/layout_shop_manage'

import { getAllShopProducts } from "@utils/getSwr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";

import Link from "next/link";
import { Layout, Row, Col, Dropdown, Button } from "react-bootstrap";

import style from '@styles/ManageMyProducts.module.scss'
import { useRouter } from "next/router";

import {ModalDelete} from '@components/modals/delete'

export default function ManageMyProducts({shopIds}){
    const [statusModal, setStatusModal] = useState(false)
    const [productSelected, setProductSelected] = useState({})

    const router = useRouter()

    const [shopIdnumber, shopProfileId] = shopIds

    const { products, isLoading, isError } = getAllShopProducts( shopIdnumber )
    
    const dataModal = {
        objDelete: productSelected,
        title: productSelected.name,
        statusModal,
        setStatusModal,
    }
    
    const deleteProduct = ( product ) => {
        setProductSelected( product )
        setStatusModal( true )
    }

    return(
        <LayoutShopManage 
        title="Mis productos" 
        icon={<MdOutlineManageAccounts size={50}/>}>
            <ModalDelete data={dataModal}/>

            {isLoading 
            ?<>Cargando...</>
            : 
            <Row className="row-cols-2 g-2">
                <Col xs={ products.length > 0 ? 6:12} >
                    <Link href={`/gestionar/${shopProfileId}/nuevo-producto`} >
                        <a className={`${style.cardCreate} flex-column`}>
                            <AiFillPlusCircle size={50}/>
                            <span>Añadir</span>
                        </a>
                    </Link>
                </Col>
                {products.map( product => (
                    <Col xs={6} >
                    <div className={`${style.card} rounded position-relative`}>
                        
                        <Dropdown>
                        <Dropdown.Toggle bsPrefix={style.actionButton}id="dropdown-basic">
                        <FaEllipsisV/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => router.push(`/tienda/${shopProfileId}/${product.link_name}`)}>Ver</Dropdown.Item>
                            <Dropdown.Item onClick={() => router.push(`/gestionar/${shopProfileId}/editar/${product.id}`)}>Editar</Dropdown.Item>
                            <Dropdown.Item onClick={() => deleteProduct( product )}>Eliminar</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Compartir</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        
                        <div className={style.imageProduct}>
                            image
                        </div>

                        <div className={style.cardBody}>
                            <span className="d-inline-block text-truncate w-100 mb-auto">
                                {product.name}
                            </span>
                            <span>
                                $1230 <span className="fw-bold">$1230</span>
                            </span>
                        </div>
                    </div>
                </Col>
                
                ))}
                
                

            </Row>
            
            }

            
        </LayoutShopManage>
    )
}