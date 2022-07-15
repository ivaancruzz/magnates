import {  BsWhatsapp } from 'react-icons/bs';
    
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import {getUserData} from "@utils/getSwr";
import { useForm } from "react-hook-form";

const axios = require('axios');


export default function FormEditPhone(){
    const {register, handleSubmit} = useForm()
    const {data, isLoading, isError, mutate } = getUserData()

    const onSubmit = async ( data ) => {
        const updatePhone = async(data) => await axios.put('/api/v1/users/edit/phone', data)
        const options = { optimisticData: data, rollbackOnError: true }

        mutate(updatePhone( data ),  options)


    }

    if( isLoading ) return <>Cargando datos...</>

    
    return(
        <Form onSubmit={ handleSubmit( onSubmit ) }>
            <div className="d-flex justify-content-between mb-3">
                <span className='text-muted'>¿ Tienes whatsapp <BsWhatsapp/> ?</span>
                <Form.Check
                {...register('whatsapp')}
                defaultChecked={data.whatsapp}
                type="switch"
                size="lg"
                />
            </div>
            <FloatingLabel
            controlId="floatingInput"
            label="Ingresa tu numero"
            className="mb-3"
            >
                <Form.Control
                {...register('phone')}
                defaultValue={data.phone}
                type="text"
                placeholder="Sin 0 ni 15" />
            </FloatingLabel>
            <Button
            type="submit"
            variant="success text-white rounded-pill float-end">
                Guardar
            </Button>
        </Form>
    )
}