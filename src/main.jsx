import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/About.jsx';
import Inicio from './components/Inicio.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
