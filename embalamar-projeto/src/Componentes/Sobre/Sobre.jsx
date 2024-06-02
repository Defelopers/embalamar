import React from 'react'
import './Sobre.css'
import Header from '../Home/Header/Header'
import Footer from '../Home/Footer/Footer'

const Sobre = () => {
    return (
        <>
            <Header />
            <section>
                <h1 className='titulo'>Sabia mais sobre nosso propósito</h1>
                <div className='container'>
                    <div className='venda'>
                        <img src="./public/img/venda-sobre.jpg" alt="" />
                        <p > Muitas empresas estão cada vez mais conscientes da importância da sustentabilidade 
                            e da responsabilidade ambiental. Ao vender embalagens biodegradáveis, o ecommerce 
                            demonstra um compromisso com a redução do impacto ambiental, especialmente no que 
                            diz respeito à poluição dos oceanos.</p>
                    </div>
                    
                    <div className='porque'>
                        <div className='titulo-paragrafo-porque'>
                            <h1>Porque</h1>
                            <p>Embalagens plásticas tradicionais podem levar centenas de anos para se decompor, 
                                durante os quais podem causar danos significativos aos ecossistemas marinhos. 
                                Embalagens biodegradáveis se decompõem muito mais rapidamente e de maneira 
                                mais segura, reduzindo assim a quantidade de resíduos plásticos nos oceanos.</p>
                        </div>
                        <img src="./public/img/porque-sobre.jpg" alt="" />
                        
                    </div>
                    <div className='parceria'>
                        <img src="./public/img/onu-sobre.jpg" alt="" />
                        <div>
                        <h1>Parceria</h1>
                        <p>A Rede Brasil do Pacto Global atua promovendo a implementação dos princípios 
                            do Pacto Global da ONU no contexto brasileiro, incentivando empresas a adotarem 
                            práticas sustentáveis e de responsabilidade social. Para isso, organiza eventos, 
                            seminários e workshops que visam disseminar boas práticas e discutir estratégias 
                            de implementação dos princípios do Pacto Global e dos Objetivos de Desenvolvimento 
                            Sustentável (ODS). Além disso, desenvolve projetos específicos em parceria com empresas, 
                            ONGs e instituições acadêmicas para promover a sustentabilidade e a responsabilidade social.</p>
                        </div>
                    </div>
                </div>

            </section>
            
            <Footer/>

        </>
    )
}

export default Sobre