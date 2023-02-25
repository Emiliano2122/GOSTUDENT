import React from 'react'
import "../Styles/productosCarrito.css"
const Precios = ({price, cantidad, index, setState, state})=> {

const eliminar = (e)=>{
  e.preventDefault();
  setState([
    ...state.slice(0, index),
    ...state.slice(index + 1),
  ]);
}

  return (
    <div className="precios">
        <div className="precios">$ {price*cantidad}</div>
        <div className="guardar">Guardar</div>
        <div className="eliminar" onClick={(e)=>eliminar(e)}>Eliminar</div>
    </div>
  )
}

export default Precios