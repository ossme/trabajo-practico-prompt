import React from 'react';
import './inicio.css'
import { JokesFetchReducer } from '../store/reducer/PetsReducer'
import { ACTIONS } from "../store/actions/JokesActions";

function Inicio() {
    const {data, dispatch} = JokesFetchReducer();
  return (
    <>
    <main className="joke-content">
      {data.setup && <p className="joke-setup">{data.setup}</p>}
      <div className="divider"></div>
      {data.delivery && <p className="joke-delivery">{data.delivery}</p>} 
    </main>
    </>
  )
}

export default Inicio;