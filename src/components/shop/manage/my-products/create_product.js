import Link from 'next/link'
import { useRouter } from "next/router"

import {BsBagPlus, BsCurrencyDollar} from 'react-icons/bs'
import {RiImageAddFill} from 'react-icons/ri'
import {BiPlus} from 'react-icons/bi'
import {FaBoxes} from 'react-icons/fa'
import {getShopCategories} from '../../../../utils/getSwr'
import FormCreateProduct from '../../../forms/create_product'

import {Row, Col, Button, FloatingLabel, Form, InputGroup, FormControl} from 'react-bootstrap'
import LayoutShopManage from '@components/layout_shop_manage'

export default  function CreateProduct( {shop} ){
    const {shopId} = useRouter().query
    const { categories, isLoading, isError } = getShopCategories( shop )



    const renderCategories = categories.map( categorie => (
        <option
        key={categorie.id}
        value={categorie.id}
        >{categorie.name}</option>
    ))

    if( isLoading )
        return <> Cargando...</>
    if( !categories.length )
        return <>Debes crear una categoria</>
    
    return (
        <LayoutShopManage
        title="Nuevo producto"
        icon={<BsBagPlus size={50}/>}>
            <div className='h-100 w-100 d-flex flex-column pb-1 gap-5 '>
                <div>
                    <Row className="mb-3">
                        <Col xs={12} >
                            <h6 className="border-start border-primary  border-4 ps-2">Sube fotos</h6>
                        </Col>
                        <Col xs={4}>
                            <label role="button" for="file-input" className="border-dashed p-4 border-muted border-3 rounded text-muted d-flex justify-content-center">
                                <RiImageAddFill size={30}/>
                                <input id="file-input" type="file" className="d-none" />   
                            </label>
                        </Col>
                        <Col xs={4}>
                            <label role="button" for="file-input" className="border-dashed p-4 border-muted border-3 rounded text-muted d-flex justify-content-center">
                                <RiImageAddFill size={30}/>
                                <input id="file-input" type="file" className="d-none" />   
                            </label>
                        </Col>
                        <Col xs={4}>
                            <label role="button" for="file-input" className="border-dashed p-4 border-muted border-3 rounded text-muted d-flex justify-content-center">
                                <RiImageAddFill size={30}/>
                                <input id="file-input" type="file" className="d-none" />   
                            </label>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={4}>
                            <label role="button" for="file-input" className="border-dashed p-4 border-muted border-3 rounded text-muted d-flex justify-content-center">
                                <RiImageAddFill size={30}/>
                                <input id="file-input" type="file" className="d-none" />   
                            </label>
                        </Col>
                        <Col xs={4}>
                            <label role="button" for="file-input" className="border-dashed p-4 border-muted border-3 rounded text-muted d-flex justify-content-center">
                                <RiImageAddFill size={30}/>
                                <input id="file-input" type="file" className="d-none" />   
                            </label>
                        </Col>
                        <Col xs={4}>
                            <label role="button" for="file-input" className="border-dashed p-4 border-muted border-3 rounded text-muted d-flex justify-content-center">
                                <RiImageAddFill size={30}/>
                                <input id="file-input" type="file" className="d-none" />   
                            </label>
                        </Col>
                    </Row>
                </div>
                <Row gap={2}>
                    <Col xs={12} >
                        <h6 className="border-start border-primary  border-4 ps-2">Añade un titulo</h6>
                    </Col >

                    <Col cs={12}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre del producto">
                            <Form.Control type="text" placeholder="Nombre del producto" />
                        </FloatingLabel>
                    </Col>

                </Row>
                <Row gap={2}>
                    <Col xs={12} >
                        <h6 className="border-start border-primary  border-4 ps-2">Añade una descripción</h6>
                    </Col >

                    <Col xs={12}>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row gap={2}>
                    <Col xs={12} >
                        <h6 className="border-start border-primary  border-4 ps-2">Ponle un precio</h6>
                    </Col >

                    <Col xs={12}>
                        <InputGroup  size='lg'>
                            <InputGroup.Text id="basic-addon1" className="bg-white border-0 p-0 pe-2">
                                <BsCurrencyDollar size={20}/>
                            </InputGroup.Text>
                            <FormControl
                            className="border-0"
                            placeholder="1500"
                            aria-label="Ej: $1500"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    
                </Row>
                
                <Row gap={2}>
                    <Col xs={8} >
                        <h6 className="border-start border-primary  border-4 ps-2">Elige la categoria</h6>
                    </Col >
                    <Col xs={4} className="text-end">
                        <Link href={`/gestionar/${shopId}/mis-categorias`}>
                            <a className="">Crear</a>
                        </Link>
                    </Col >

                    <Col xs={12}>
                    <Form.Select size="lg">
                        {renderCategories}
                    </Form.Select>
                    </Col>
                </Row>
                <Row gap={2}>
                    <Col xs={12} className="text-center text-secondary">
                        <a role="button"><BiPlus/> Ver mas configuraciones</a>
                    </Col >

                </Row>

                <Row gap={2}>
                    <Col xs={12} >
                        <h6 className="border-start border-primary  border-4 ps-2">Configuraciones adicionales</h6>
                    </Col >

                    <Col xs={12} className="mb-2">
                        <div className="d-flex mb-2">
                            <span className="flex-fill">¿Quieres ponerlo en descuento?</span>
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                            />
                        </div>
                        <InputGroup  size='lg'>
                            <InputGroup.Text id="basic-addon1" className="bg-white border-0 p-0 pe-2">
                                <BsCurrencyDollar size={20}/>
                            </InputGroup.Text>
                            <FormControl
                            className="border-0"
                            placeholder="1500"
                            aria-label="Ej: $1500"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <hr></hr>
                    <Col xs={12}>
                        <div className="d-flex mb-2">
                            <span className="flex-fill">¿Este producto es ilimitado?</span>
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                            />
                        </div>
                        <InputGroup  size='lg'>
                            <InputGroup.Text id="basic-addon1" className="bg-white border-0 p-0 pe-2">
                                <FaBoxes size={20}/>
                            </InputGroup.Text>
                            <FormControl
                            className="border-0"
                            placeholder="Cantidad de stock"
                            aria-label="Ej: $1500"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>


                
                
                
                
                
                <div className="flex-fill d-flex align-items-end">
                    <Button variant="outline-primary" className="w-100"  >
                        siguiente
                    </Button>
                </div>
                
            </div>
        </LayoutShopManage>
    )
}