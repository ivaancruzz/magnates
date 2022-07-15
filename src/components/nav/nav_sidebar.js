
import { AiOutlineShopping } from 'react-icons/ai';
import { RiShoppingCartLine, RiHeartLine } from 'react-icons/ri';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { BsShop, BsCurrencyDollar, BsGear} from 'react-icons/bs';
import { FaDolly } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import React from 'react';
import { Drawer } from 'rsuite';
import Offcanvas from 'react-bootstrap/OffCanvas';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Link from 'next/link';


export default  function NavegationSideBar({open, setOpen}){    
    return(
        <aside>
            <Drawer size='sm' open={open} onClose={() => setOpen(false)}>
                <Drawer.Body>
                test
                </Drawer.Body>
            </Drawer>
            {/* <Offcanvas show={show} onHide={handleClose} placement='end' className="w-75 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Magnates
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Row className="h-100">
                        <Col xs={12}>
                        <Stack gap={2} className="mb-3">
                                <Link href="/carrito">
                                    <a className='active text-end border-start border-2 border-muted text-muted shadow-sm p-2 d-flex justify-content-between align-items-center'>
                                        <RiShoppingCartLine size={30}/>

                                        <span>Carrito</span>
                                    </a>
                                </Link>
                                <Link href="/favoritos">
                                    <a className='text-end border-start border-2 border-muted text-muted shadow-sm p-2 d-flex justify-content-between align-items-center'>
                                        <RiHeartLine size={30}/>

                                        <span>Favoritos</span>
                                    </a>
                                </Link>
                            </Stack>

                            <Stack gap={2} className="mb-3">
                                <div className="text-start text-secondary text-light fs-4">
                                    Cuenta
                                </div>
                                <Link href="compras">
                                    <a className='active text-end border-start border-2 border-secondary shadow-sm p-2 d-flex justify-content-between align-items-center'>
                                        <AiOutlineShopping size={30}/>

                                        <span>Mis compras</span>
                                    </a>
                                </Link>
                                <Link href="cuenta">
                                    <a className='text-end border-start border-2 border-muted text-muted shadow-sm p-2 d-flex justify-content-between align-items-center'>
                                        <MdOutlineManageAccounts size={30}/>

                                        <span>Mis datos</span>
                                    </a>
                                </Link>
                            </Stack>
                            <Stack gap={2} className="mb-3">
                                <div className="text-start text-secondary text-light fs-4">
                                    Mis tiendas
                                </div>
                                <NavAccordion/>
                            </Stack>
                        </Col>

                        <Col className="align-self-end">
                            <Link href="salir">
                                <a className='text-end border-start border-2 border-danger text-danger shadow-sm p-2 d-flex justify-content-between align-items-center'>
                                    <FiLogOut size={30}/>

                                    <span>Salir</span>
                                </a>
                            </Link>
                        </Col>
                    </Row>

                    

                    

                </Offcanvas.Body>
            </Offcanvas> */}
        </aside>
    )
}