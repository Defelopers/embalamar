

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Componentes/Header/Header'
import Slider from './Componentes/Slider/Slider';
import Categoria from './Componentes/Categoria/Categoria';
import MaisAdquiridos from './Componentes/MaisAdquiridos/MaisAdquiridos';
import Facilidades from './Componentes/Facilidades/Facilidades';
import Contato from './Componentes/Contato/Contato';
import Footer from './Componentes/Footer/Footer';

function App() {
 

  return (
    <>
     <Header/>
     <Slider/>
     <Categoria/>
     <MaisAdquiridos/>
     <Facilidades/>
     <Contato/>
     <Footer/>
    </>
  )
}

export default App
