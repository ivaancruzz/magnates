import { useState } from 'react'
import ModalBase from '@components/bootstrap/modal'

import { Button } from "react-bootstrap";


export function ModalDelete( {data} ){
    const {
        title, 
        objDelete, 
        statusModal, 
        setStatusModal,
    } = data

    const bodyModal = (
        <>Esta seguro que desea eliminar este producto?</>
    )
    const footerModal = (
        <div class="d-flex">
            <Button variant="danger">Si, eliminar</Button>
            <Button variant="white" onClick={() => setStatusModal( false ) }>Cancelar</Button>
        </div>
    )

    const propsModal = {    
        title,
        body: bodyModal,
        footer: footerModal
    }

    return (
        <ModalBase
            statusModal={statusModal}
            setStatusModal={setStatusModal}
            contentModal={propsModal}
        />
    )
}