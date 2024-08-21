import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
function Navbar() {
  return (
    <header>
      <h2>Tu chiste diario</h2>
        <nav>
            <Link to="/inicio">Inicio</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
  )
}

export default Navbar