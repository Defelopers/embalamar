import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Componentes/Home/Home';
import {Outlet} from "react-router-dom"

function App() {


  return (
    <>
      
      <Outlet/>
    </>
  )
}

export default App
