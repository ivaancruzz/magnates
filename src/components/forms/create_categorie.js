import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useForm } from "react-hook-form";

import {useSWRConfig} from 'swr'
const axios = require('axios');



export default function FormCreateCategorie( {shop} ){
    const {register, handleSubmit} = useForm() 
    const { mutate } = useSWRConfig()

    const onSubmit = (data) => {
        data.commerceId = shop
        const createCategorie = async () =>await axios.post('/api/v1/commerces/create/categorie', data).then(res => res.data)
    
        mutate('/api/v1/commerces/create/categorie', createCategorie, false )

    }
    return(
        <Form onClick={handleSubmit( onSubmit )}>
            <label>Nombre de la categoria</label>
            <input placeholder="Nombre" type='text' {...register('name')}></input>
            <br/>
            <Button type="submit" color="primary">Registrar</Button>
        </Form>

    )
}

