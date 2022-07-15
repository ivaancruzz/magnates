import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import {getUserData} from "@utils/getSwr";
import { useForm } from "react-hook-form";

const axios = require('axios');


export default function FormEditName(){
    const {register, handleSubmit} = useForm()
    const {data, isLoading, isError, mutate } = getUserData()

    const onSubmit = async ( data ) => {
        const updateName = async(data) => await axios.put('/api/v1/users/edit/name', data)
        const options = { optimisticData: data, rollbackOnError: true }

        mutate(updateName( data ),  options)


    }

    if( isLoading ) return <>Cargando datos...</>

    
    return(
        <Form onSubmit={handleSubmit( onSubmit )}>
            <FloatingLabel
            controlId="floatingInput"
            label="Nombre y apellido"
            className="mb-3"
            >
                <Form.Control
                {...register('name')}
                defaultValue={data.name}
                type="text"
                placeholder="Nombre completo" />
            </FloatingLabel>
            <Button
            type="submit"
            variant="success text-white rounded-pill float-end">
                Guardar
            </Button>
        </Form>
    )
}