import React from 'react'
import './MaisAdquiridos.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const MaisAdquiridos = () => {
  return (
    <>
      <h1 className='text-center pt-5'>Produtos mais adquiridos :</h1>
      <div className='m-5 p-5 '>
        <Row xs={1} md={2} lg={3} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <>
              <Col key={idx}>
                <Card className='w-100 h-100'>
                  <Card.Img variant="top"  src="./public/img/algodao.jpg" />
                  <Card.Body>
                    <Card.Title>Sacolas reutilizáveis:</Card.Title>
                    <Card.Text className='d-flex flex-column'>
                    Substituem as sacolas plásticas para compras a granel e são frequentemente usadas por supermercados e mercados de alimentos. São fabricadas a partir do cultivo de algodão.
                      <Button variant="outline-primary" className='w-50 mt-3'>Ver mais</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col key={idx}>
                <Card className='w-100 h-100'>
                  <Card.Img variant="top" src="./public/img/amido-milho.jpg" />
                  <Card.Body>
                    <Card.Title>Filmes e sacos plásticos</Card.Title>
                    <Card.Text className='d-flex flex-column'>
                    Comumente usados para produtos a granel e frescos. 
                    Estes podem ser compostáveis e biodegradáveis, 
                    substituindo os plásticos derivados do petróleo. São fabricados a partir do amido de milho
                      <Button variant="outline-primary" className='w-50 mt-3'>Ver mais</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={idx}>
                <Card className='w-100 h-100'>
                  <Card.Img variant="top" src="./public/img/bambu.jpg" />
                  <Card.Body>
                    <Card.Title>Talheres</Card.Title>
                    <Card.Text className='d-flex flex-column'>
                    Alternativas ecológicas para substituir os plásticos descartáveis usados em serviços de alimentos e bebidas. São fabricados a partir do bambu.
                      <Button variant="outline-primary" className='w-50 mt-3'>Ver mais</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={idx}>
                <Card className='w-100 h-100'>
                  <Card.Img variant="top" className='' src="./public/img/cana.jpg" />
                  <Card.Body>
                    <Card.Title>Pratos, tigelas e bandejas</Card.Title>
                    <Card.Text className='d-flex flex-column'>
                    Usados para refeições prontas, take-away e entrega de comida. Estes recipientes são uma alternativa direta às caixas de plástico e isopor. 
                    São fabricadas a partir do cultivo de cana de açucar 
                      <Button variant="outline-primary" className='w-50 mt-3'>Ver mais</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={idx}>
                <Card className='w-100 h-100'>
                  <Card.Img variant="top" src="./public/img/celulose.jpg" />
                  <Card.Body>
                    <Card.Title>Envoltórios para alimentos:</Card.Title>
                    <Card.Text className='d-flex flex-column'>
                    Utilizados para embalar queijos, carnes e produtos de panificação. Estes filmes são biodegradáveis e compostáveis, substituindo os plásticos convencionais. São feitos de celulose.
                      <Button variant="outline-primary" className='w-50 mt-3'>Ver mais</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={idx}>
                <Card className='w-100 h-100'>
                  <Card.Img variant="top" src="./public/img/papelão.jpg" />
                  <Card.Body>
                    <Card.Title>Embalagens de fast food</Card.Title>
                    <Card.Text className='d-flex flex-column'>
                    Incluindo caixas de hambúrgueres e embalagens para batatas fritas, que são revestidas para resistir a gorduras e umidade.
                    O papelão é revestido com bioplásticos.
                      <Button variant="outline-primary" className='w-50 mt-3'>Ver mais</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  )
}

export default MaisAdquiridos