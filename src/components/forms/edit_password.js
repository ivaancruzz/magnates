import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function FormEditPassword({value}){
    const[isLoading, setLoading] = useState(false)   
    

    useEffect(() => {
        if( isLoading ){
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading])

    const handleClick = () => setLoading( true )

    
    return(
        <Form>
            <Form.Text muted>
                Para contiunar ingrese su clave.
            </Form.Text>
            <FloatingLabel
            controlId="floatingInput"
            label="Clave"
            className="my-3"
            >
                <Form.Control
                disabled={isLoading}
                type="password"
                placeholder="Clave" />
            </FloatingLabel>
            
            <Button
            disabled={isLoading}
            onClick={!isLoading ? handleClick: null}
            variant="success text-white rounded-pill float-end ">
                {isLoading?
                    <Spinner animation="border" variant="light" size="sm"/>
                    : 'Aceptar' }
            </Button>
        </Form>
    )
}