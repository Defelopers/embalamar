import './Contato.css'
import React from 'react'
import Form from 'react-bootstrap/Form';

const Contato = () => {
    return (
        <>
       
            <Form className='d-flex flex-column align-items-center border border-terciary rounded-4 m-5 p-4' id="contato">
            <h1 className='text-center mb-3'>Entrar em contato</h1>
                <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                    <Form.Label>Endereço de email</Form.Label>
                    <Form.Control className='input-contato' type="email" placeholder="nome@exemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Digite sua mensagem</Form.Label>
                    <Form.Control className='input-contato'  as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </>

    )
}

export default Contato