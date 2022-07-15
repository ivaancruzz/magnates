import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import { PROVINCES } from "../../utils/provinces"

import {getUserData} from "@utils/getSwr";
import { useForm } from "react-hook-form";

const axios = require('axios');


export default function FormEditAddres(){
    const {register, handleSubmit} = useForm()
    const {data, isLoading, isError, mutate } = getUserData()

    const onSubmit = async ( data ) => {
        const updateAddress = async() => await axios.put('/api/v1/users/edit/address', data)
        const options = { optimisticData: data, rollbackOnError: true }

        mutate(updateAddress( data ),  options)


    }

    if( isLoading ) return <>Cargando datos...</>

    
    return(
        <Form onSubmit={ handleSubmit( onSubmit ) }>
            <FloatingLabel
            controlId="floatingInput"
            label="Calle"
            className="mb-3">
                <Form.Control
                {...register('address')}
                defaultValue={data.address}
                type="text"
                placeholder="Calle donde vives" />
            </FloatingLabel>

            <FloatingLabel
            controlId="floatingInput"
            label="Altura"
            className="mb-3">
                <Form.Control
                {...register('address_number')}
                defaultValue={data.address_number}
                type="number"
                placeholder="Sin 0 ni 15" />
            </FloatingLabel>

            <Form.Select defaultValue={data.address_province} aria-label="Default select example" {...register('address_province')}>
                {options}
            </Form.Select>

            <h6><a href={data.linkMaps}>Ver en maps</a></h6>

            <Button
            type="submit"
            variant="success text-white rounded-pill float-end">
                Guardar
            </Button>
        </Form>
    )
}

const options = PROVINCES.map( (currentValue, index) => (
    <option value={currentValue} key={`${index}`}>{currentValue}</option>
))