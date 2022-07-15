import NavManageShop from '@components/shop/manage/nav_shop'

import { Container } from 'react-bootstrap'

export default function LayoutShopManage({title, icon, children}){

    return(
        <section className="h-100 d-flex flex-column">
            <div className="position-relative">
                <div className="text-dark d-flex flex-column gap-3 justify-content-center align-items-center p-4">
                    {icon}
                    <span className="fw-bold">{title}</span>
                </div>
                <NavManageShop/>

            </div>
            <div className="pt-5 pb-5 mb-2 flex-fill bg-white rounded-bottom rounded-container ">
                <Container className="scroll-full-height py-1">
                    {children}
                </Container>
            </div>
            

        </section>
    )
}