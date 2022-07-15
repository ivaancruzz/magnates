import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PROVINCES } from "@utils/provinces"

import { useForm } from "react-hook-form";
//Toast
import { toast } from 'react-toastify';

//React Query
import {useMutation,useQueryClient} from 'react-query'


//Cloudinary
import { post } from '@utils/api/axios';

export default function FormCreateShop(){
        // const queryClient = useQueryClient()
    const {register, handleSubmit} = useForm() 

    //Upload Logo
    // const mutationImage = useMutation( file => post.uploadLogoShop(file), {
    //     onMutate: () => {
    //         console.log('Subiendo image..');
    //     },
    //     onSuccess: () => {
    //         console.log("boom baby!")
    //     },
    //     onError: (error, variables, context) => {
    //         console.log(context)
    //     },
    // })

    const mutationShop = useMutation( dataShop => post.createShop( dataShop ),{
        onMutate: () => {
            console.log('Guardando datos..');
        },
        onSuccess: () => {
            console.log("boom baby creaste una tienda!")
        },
        onError: (error, variables, context) => {
            console.log(error)
        },
    })
    
    //Event submit
    const onSubmit = async data => {
        // const fileImage = data.shopLogo[0]
        // let urlImage = undefined 
        
        // if( fileImage ){
        //     //Upload logo
        //     try {
        //         //Response
        //         const {data: {secure_url: url}} = await mutationImage.mutateAsync( fileImage )
        //         urlImage = url
        //     } catch (error) {
        //         console.error(error)
        //     } 
        // } else
        //     //Upload logo default
        //     urlImage = 'logo default'

        
        // /** Create shop... */
        // data.shopLogo = urlImage //Replace value for save in data base

        try {
            //Response
            const res = await mutationShop.mutateAsync( data )
            console.log(res);
        } catch (error) {
            console.error(error)
        } 
        
    }
    
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre de tu tienda</label>
            <input placeholder="Nombre" type='text' {...register('shopName')}></input>
            <br/>
            <label>Calle</label>
            <input type='text' {...register('shopStreet')}></input>
            <br/>
            <label>Altura</label>
            <input type='number'  {...register('shopNumberStreet')}></input>
            <br/>
            <label>Provincia</label>
            <Form.Select aria-label="Default select example" {...register('shopProvince')}>
                {options}
            </Form.Select>
            <br/>
            <label>Celular</label>
            <input type='number' placeholder="Cod" {...register('shopPhoneCharacteristic')}></input>
            <input type='number'  placeholder="Numero" {...register('shopPhoneNumber')}></input>
            <br/>
            <Button type="submit" color="primary">Registrar</Button>
        </Form>

    )
}

const options = PROVINCES.map( (currentValue, index) => (
    <option value={currentValue} key={`${index}`}>{currentValue}</option>
))