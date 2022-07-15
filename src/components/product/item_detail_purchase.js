import { HiHashtag } from 'react-icons/hi';

import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'next/image'
export default function Item({status, showModal}){
    let color_status = undefined
    switch( status ){
        case 'Finalizar compra': color_status = 'warning'; break;
        case 'Pagado': color_status = 'success'; break;
        case 'Entregado': color_status = 'info'; break;
    }
    return(
        <article className="bg-white rounded">
            <Container>
                <Row>
                    <Col xs={'auto'} className="d-flex align-items-center">
                        <Image src="/images/image_product.webp" layout='intrinsic' width={100} height={100} ></Image>
                    </Col>

                    <Col onClick={showModal} className="text-truncate px-1 py-2 ">
                        <Stack className="d-flex justify-items-center">
                            <h6 className="text-truncate text-muted">Conversor a SmarTV</h6>
                            <span className={`fs-6 text-${color_status}`}>{status}</span>
                            <span className="fs-6 text-muted d-flex align-items-center"><HiHashtag/>4137</span>
                        </Stack>
                    </Col>

                </Row>
            </Container>

        </article>
    )
}