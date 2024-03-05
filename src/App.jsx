// import Rotas from "./componentes/Rotas/Rotas"
import Navbar from "./componentes/Navbar/Navbar"
import { Outlet } from "react-router-dom"

import './App.css'

function App() {

  return (

      <div className="App">
        <Navbar />
        <h2>teste</h2>
        <Outlet/>

      </div>
    )
}

export default App
