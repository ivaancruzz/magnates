import Container from 'react-bootstrap/Container';
import Navegation from './navegation';

import ItemDetail from '@components/product/item_detail_purchase'


export default function Layout({children}){
    return(
        <main className="vh-100 overflow-hidden">
            <Navegation/>
            {children}
        </main>
    )
}