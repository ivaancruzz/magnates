import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {getUserData} from "@utils/getSwr";
import { useForm } from "react-hook-form";

const axios = require('axios');


export default function FormEditDocument(){
    const {register, handleSubmit} = useForm()
    const {data, isLoading, isError, mutate } = getUserData()

    const onSubmit = async ( data ) => {
        const updateDocument = async() => await axios.put('/api/v1/users/edit/document', data)
        const options = { optimisticData: data, rollbackOnError: true }

        mutate(updateDocument( data ),  options)


    }

    if( isLoading ) return <>Cargando datos...</>
    
    return(
        <Form onSubmit={handleSubmit( onSubmit )}>
            <Form.Text muted>
                Usted debe agregar un numero de documento para poder retirar su compra. De esta forma el vendedor sabrá a quien corresponde el pedido.
            </Form.Text>
            <FloatingLabel
            controlId="floatingInput"
            label="Numero de DNI"
            className="my-3"
            >
                <Form.Control
                {...register('document')}
                
                defaultValue={data.document}
                type="text"
                placeholder="Numero de DNI" />
            </FloatingLabel>
            
            <Button
            type='submit'
            variant="success text-white rounded-pill float-end ">
                Guardar
            </Button>
        </Form>
    )
}