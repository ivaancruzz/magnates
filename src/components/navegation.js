import variables from '../styles/variables.module.scss'
import { MdOutlineExplore } from 'react-icons/md';
import { RiMenu4Fill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';


import {Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import Link from 'next/link';
import { useState } from 'react';

import NavegationSideBar from '../components/bootstrap/nav_sidebar'
// import NavegationSideBar from './nav/nav_sidebar'

export default function Navegation(){
    const [isOpen, setIsOpen] = useState(false);
    const [ showCanvas, setShowCanvas ] = useState( false )
    
    return(
        <header className="bg-white sticky-top">
            <Container >
                <NavegationSideBar show={isOpen} handleClose={setIsOpen}/>
                {/* <NavegationSideBar open={isOpen} setOpen={setIsOpen}/> */}
                <nav>
                    <Row className="p-2 justify-content-between">
                        <Col xs={'auto'} className="border-end">
                            <Link href="/">
                                <a><MdOutlineExplore fill={variables.primaryColor} size={35}/></a>
                            </Link>
                        </Col>

                        <Col >
                            <InputGroup>
                                <FormControl
                                className="rounded-end rounded-pill"
                                placeholder="¿Que quieres buscar?"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                type="search"
                                />
                                <Button variant="outline-muted" id="button-addon2" className="rounded-start rounded-pill d-flex items-content-center">
                                    <BsSearch fill={variables.primaryColor} size={20} />
                                </Button>
                            </InputGroup>
                        </Col>

                        <Col xs={'auto'} onClick={() => setIsOpen( true )}>
                            <RiMenu4Fill fill={variables.darkColor} size={35}/>
                        </Col>
                    </Row>
                </nav>
            </Container>
        </header>
    )
}