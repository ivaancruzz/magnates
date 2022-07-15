import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useForm } from "react-hook-form";

import {useSWRConfig} from 'swr'
const axios = require('axios');

export default function FormCreateProduct( {categories, shop} ){
    const {register, handleSubmit} = useForm() 
    const { mutate } = useSWRConfig()

    //Select options
    const options = categories.map( c => <><option key={c.id}>{c.name}</option></> )
    
    const onSubmit = (data) => {
        data.commerceId = shop
        const requestCreateProduct = async () =>await axios.post('/api/v1/commerces/create/product', data).then(res => res.data)
    
        mutate('/api/v1/commerces/create/product', requestCreateProduct, false )
    }
    return(
        <Form onSubmit={ handleSubmit( onSubmit )}> 
            <label>Nombre del producto</label>
            <input placeholder="Nombre" type='text' {...register('name')}></input>
            <br/>
            <label>Descripcion</label>
            <textarea type='text' {...register('description')}></textarea>
            <br/>
            <label>Precio</label>
            <input type='number'  {...register('price')}></input>
            <br/>
            <label>Stock</label>
            <input type='number'  {...register('stock')}></input>
            <br/>
            <label>Categoria</label>
            <Form.Select aria-label="Default select example" {...register('categorie')}>
                {options}
            </Form.Select>
            <br/>
            <Button type="submit" color="primary">Registrar</Button>
        </Form>

    )
}

