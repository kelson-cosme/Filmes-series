// import Rotas from "./componentes/Rotas/Rotas"
import Navbar from "./componentes/Navbar/Navbar"
import { Outlet } from "react-router-dom"

import './App.css'

function App() {

  return (

      <div className="App">
        <Navbar />
       
        <Outlet/>

      </div>
    )
}

export default App
