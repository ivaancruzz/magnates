import LayoutShopManage from '@components/layout_shop_manage'
import {getShopCategories} from '@utils/getSwr'
import FormCreateCategorie from '@components/forms/create_categorie'
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import Link from "next/link";
import {  Row, Col, Dropdown } from "react-bootstrap";
import { useRouter } from 'next/router';
import style from '@styles/ManageMyCategories.module.scss'


export default  function MyCategories( {shop} ){
    const {shopId} = useRouter().query
    const { categories, isLoading, isError } = getShopCategories( shop )


    return(
        <LayoutShopManage
        title="Mis categorias">
        {isLoading 
        ?<>Cargando...</>
        :<>
            <FormCreateCategorie shop={shop}></FormCreateCategorie>
            { categories.length ? 
            <Row className="row-cols-2 g-2">
                <Col xs={ categories.length > 0 ? 6:12} >
                    <Link href={`/gestionar/${shopId}/nuevo-producto`} >
                        <a className={`${style.cardCreate} flex-column`}>
                            <AiFillPlusCircle size={50}/>
                            <span>Añadir</span>
                        </a>
                    </Link>
                </Col>
                {categories.map( product => (
                    <Col xs={6} >
                    <div className={`${style.card} rounded position-relative`}>
                        
                        <Dropdown>
                        <Dropdown.Toggle bsPrefix={style.actionButton}id="dropdown-basic">
                        <FaEllipsisV/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Eliminar</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Compartir</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
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
            : 'Sin categorias'
            }
        </>
        }
        
        </LayoutShopManage>
    )
}