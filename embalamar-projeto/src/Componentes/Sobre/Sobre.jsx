import React from 'react'
import './Sobre.css'
import Accordion from 'react-bootstrap/Accordion';

const Sobre = () => {
    return (
        <>
           
            <section>
                <h1 className='titulo'>Sabia mais sobre nosso propósito</h1>
                <div className='container'>
                    <div className='venda'>
                        <img src="./public/img/venda-sobre.jpg" alt="" />
                        <Accordion defaultActiveKey="0" className='w-100'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Clique para saber sobre nosso propósito</Accordion.Header>
                                <Accordion.Body className='texto'>
                                    Muitas empresas estão cada vez mais conscientes da importância da sustentabilidade
                                    e da responsabilidade ambiental. Ao vender embalagens biodegradáveis, o ecommerce
                                    demonstra um compromisso com a redução do impacto ambiental, especialmente no que
                                    diz respeito à poluição dos oceanos.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className='porque'>
                        <div className='w-100 titulo-paragrafo-porque'>
                            <h1>Porque</h1>
                            <Accordion defaultActiveKey="0" className='w-100'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Clique para saber porque investir em embalagens biodegradáveis</Accordion.Header>
                                    <Accordion.Body className='texto'>
                                        Embalagens plásticas tradicionais podem levar centenas de anos para se decompor,
                                        durante os quais podem causar danos significativos aos ecossistemas marinhos.
                                        Embalagens biodegradáveis se decompõem muito mais rapidamente e de maneira
                                        mais segura, reduzindo assim a quantidade de resíduos plásticos nos oceanos.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <img src="./public/img/porque-sobre.jpg" alt=""/>

                    </div>
                    <div className='parceria'>
                        <img src="./public/img/onu-sobre.jpg" alt="" />
                        <div className='w-100 '>
                            <h1>Parceria</h1>
                            <Accordion defaultActiveKey="0" className='w-100'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Clique para saber mais sobre nosso pareiro</Accordion.Header>
                                    <Accordion.Body className='texto'>
                                        A Rede Brasil do Pacto Global atua promovendo a implementação dos princípios
                                        do Pacto Global da ONU no contexto brasileiro, incentivando empresas a adotarem
                                        práticas sustentáveis e de responsabilidade social. Para isso, organiza eventos,
                                        seminários e workshops que visam disseminar boas práticas e discutir estratégias
                                        de implementação dos princípios do Pacto Global e dos Objetivos de Desenvolvimento
                                        Sustentável (ODS). Além disso, desenvolve projetos específicos em parceria com empresas,
                                        ONGs e instituições acadêmicas para promover a sustentabilidade e a responsabilidade social.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>

            </section>

          

        </>
    )
}

export default Sobre