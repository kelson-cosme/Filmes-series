import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './componentes/Pages/Home/Home.jsx'
import Filmes from './componentes/Pages/Filmes/Filme.jsx'
import Procurar from './componentes/Pages/Procurar/Procurar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
    
          <Route path="/" element={<Home />} />
          <Route path="filme/:id" element={<Filmes />} />
          <Route path="procurar" element={<Procurar />} />

        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
