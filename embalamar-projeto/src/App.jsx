import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {Outlet} from "react-router-dom"
import Header from './Componentes/Home/Header/Header';
import Footer from './Componentes/Home/Footer/Footer';

function App() {


  return (
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App
