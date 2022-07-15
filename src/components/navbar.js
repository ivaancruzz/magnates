import variables from '../../styles/variables.module.scss'
import { MdOutlineExplore } from 'react-icons/md';
import { RiMenu4Fill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import Link from 'next/link';
import { useState } from 'react';

import SideBar from './sidebar'
import { useSession } from "next-auth/react";
import {useSWRConfig} from 'swr'

export default function Navbar(){
    const [ showCanvas, setShowCanvas ] = useState( false )
    const { data: session, status } =  useSession()
    
    if( status == 'authenticated'){
        // const {shops, isLoading, isError } = getUserShops( session.user.id)
    }
    
    return(
        <>
        <SideBar show={showCanvas} handleClose={() => setShowCanvas( false )}/>
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

                <Col xs={'auto'} onClick={() => setShowCanvas( true )}>
                    <RiMenu4Fill fill={variables.darkColor} size={35}/>
                </Col>
            </Row>
        </nav>
        </>
    )
}