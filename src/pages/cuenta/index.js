import variables from '../../styles/variables.module.scss'

import { MdOutlineManageAccounts, MdOutlineModeEditOutline } from 'react-icons/md';
import { FaIdCard, FaMapMarkerAlt, FaStar, FaTrashAlt, FaUserEdit, FaMobileAlt, FaAt, FaAsterisk } from 'react-icons/fa';


import Stack from 'react-bootstrap/Stack';

import ModalBase from '@components/bootstrap/modal'
import FormEditName from '@components/forms/edit_name'
import FormEditPhone from '@components/forms/edit_phone'
import FormEditAddress from '@components/forms/edit_address'
import FormEditDni from '@components/forms/edit_dni'
import FormEditEmail from '@components/forms/edit_email'
import FormEditPassword from '@components/forms/edit_password'

import {useState} from 'react'
import UserPageLayout from '@components/layout_user_page';

export default function Datos(){
    const [showModal, setShowModal] = useState(false)
    const [contentModal, setContentModal] = useState({
        title: '',
        body: <></>
    })

    const openModal = ( item )=>{
        setShowModal( true )

        switch( item ){
            case 'edit_name':{
                setContentModal( {
                    title:'Editar', 
                    body:<FormEditName/>
                } )
                break;
            }

            case 'edit_phone':{
                setContentModal( {
                    title: 'Editar',
                    body: <FormEditPhone/>
                })
                break;
            }

            case 'edit_address':{
                setContentModal( {
                    title: 'Editar',
                    body: <FormEditAddress/>
                })
                break;
            }

            case 'edit_dni':{
                setContentModal({
                    title: 'Editar',
                    body: <FormEditDni/>
                })
                break;
            }

            case 'edit_email':{
                setContentModal({
                    title: 'Editar',
                    body: <FormEditEmail value="{user.email}"/>
                })
                break;
            }

            case 'edit_password':{
                setContentModal({
                    title: 'Editar',
                    body:  <FormEditPassword value="{user.email}"/>
                })
                break;
            }
        }
    }
    
    return(
        <UserPageLayout
        title="Mi cuenta"
        icon={<MdOutlineManageAccounts size={50}/>}>
            <ModalBase show={showModal} handleClose={() => setShowModal( false )} contentModal={contentModal}/>
            
            <Stack gap={3} className="pt-5">
                    <Stack direction="horizontal" gap={3}>
                        <div onClick={() => openModal('edit_name')} className='w-100 font-light  bg-white rounded shadow-sm p-3 text-muted d-flex justify-content-between align-items-center'>
                            <span>Nombre</span>
                            <FaUserEdit fill={variables.primaryColor} size={30} />
                        </div>
                        <div onClick={() => openModal('edit_phone')} className='w-100 font-light  bg-white rounded shadow-sm p-3 text-muted d-flex justify-content-between align-items-center'>
                            <span>Celular</span>
                            <FaMobileAlt fill={variables.primaryColor} size={30} />
                        </div>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                        <div onClick={() => openModal('edit_address')} className='w-100 font-light  bg-white rounded shadow-sm p-3 text-muted d-flex justify-content-between align-items-center'>
                            <span>Domicilio</span>
                            <FaMapMarkerAlt fill={variables.primaryColor} size={30} />
                        </div>
                        <div onClick={() => openModal('edit_dni')} className='w-100 font-light  bg-white rounded shadow-sm p-3 text-muted d-flex justify-content-between align-items-center'>
                            <span>DNI</span>
                            <FaIdCard fill={variables.primaryColor} size={30} />
                        </div>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                        <div  onClick={() => openModal('edit_email')} className='w-100 font-light  bg-white rounded shadow-sm p-3 text-muted d-flex justify-content-between align-items-center'>
                            <span>Correo</span>
                            <FaAt fill={variables.primaryColor} size={30} />
                        </div>
                        <div  onClick={() => openModal('edit_password')} className='w-100 font-light  bg-white rounded shadow-sm p-3 text-muted d-flex justify-content-between align-items-center'>
                            <span>Clave</span>
                            <FaAsterisk fill={variables.primaryColor} size={30} />
                        </div>
                    </Stack>
                    <div className='w-100 font-light  bg-white rounded shadow-sm p-3 text-secondary d-flex justify-content-between align-items-center'>
                        <span>Quiero vender</span>
                        <FaStar fill={variables.primaryColor} size={30} />
                    </div>
                    <div className='w-100 font-light  bg-white rounded shadow-sm p-3 text-danger d-flex justify-content-between align-items-center'>
                        <span>Eliminar cuenta</span>
                        <FaTrashAlt fill={variables.dangerColor} size={30} />
                    </div>
                    
            </Stack>
            
        </UserPageLayout>
    )
}