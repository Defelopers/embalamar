import React from 'react'
import './Categoria.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Categoria = () => {
    return (
        <>
            <h1 className='text-center mt-5 '>Escolha por categoria :</h1>
                <hr className='mt-5' />
            <div className='d-flex flex-columns gap-3  m-4 p-5'>
                 
                <div>
                   
                    <h2 className='text-center'>Restaurante</h2>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" className='img-fluid img-categoria' src="./public/img/canudinho-restaurante.jpeg" />
                            
                            <Button variant="primary rounded-0">Canudinhos</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className='img-fluid img-categoria' src="./public/img/copos-restaurante.jpeg" />
                            
                            <Button variant="primary rounded-0">Copos</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className='img-fluid img-categoria' src="./public/img/comida-restaurante.jpg" />
                            
                            <Button variant="primary rounded-0">Para entregas</Button>
                        </Card>
                    </CardGroup>
                </div>

                <div>
                   
                    <h2 className='text-center'>Industrial</h2>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" className='img-fluid img-categoria' src="./public/img/comida-industrial.jpg" />
                           
                            <Button variant="primary rounded-0">Ultraprocessados</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className='img-fluid img-categoria' src="./public/img/suco-industrial.jpg" />
                            
                            <Button variant="primary rounded-0">Sucos</Button>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className='img-fluid img-categoria' src="./public/img/outros-industrial.jpg" />
                            
                            <Button variant="primary rounded-0">Grãos</Button>
                        </Card>
                    </CardGroup>

                </div>
            </div>
            <hr className='mt-5'/>
        </>
    )
}

export default Categoria