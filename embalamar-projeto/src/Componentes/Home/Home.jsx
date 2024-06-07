import React from 'react'
import Header from './Header/Header'
import Slider from './Slider/Slider'
import Categoria from './Categoria/Categoria'
import MaisAdquiridos from './MaisAdquiridos/MaisAdquiridos'
import Facilidades from './Facilidades/Facilidades'
import Contato from './Contato/Contato'
import Footer from './Footer/Footer'


const Home = () => {
    return (
        <>
           
            <Slider />
            <Categoria />
            <MaisAdquiridos />
            <Facilidades />
            <Contato />
            
        </>
    )
}

export default Home