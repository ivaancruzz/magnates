
import { Tabs, Tab } from "react-bootstrap"
import ShopProducts from "./products"

export default function ShopProfile({shop}){

    return (
        <div>
            <section>
                Portada
            </section>
            <div className="d-flex justify-content-center">
                <img src={shop.image}></img>
            </div>
            <section>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Inicio">
                    {shop.name}
                    {shop.sales}
                    {shop.stars}
                </Tab>
                <Tab eventKey="profile" title="Productos">
                    <ShopProducts id={shop.id}/>
                </Tab>
                <Tab eventKey="contact" title="Informacion" disabled>
                    asd
                </Tab>
            </Tabs>
                
            </section>
        </div>
    )
}