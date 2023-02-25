import React, { useState } from 'react'
import "../Styles/productosCarrito.css"
import Contador from './Contador'
import Precios from './Precios'
const ProductoEnCarrito = ({data, index, state, setState}) => {
  console.log(index)
  const {nameProducto, descriptionProducto, priceProducto, imagenProducto, stockProducto} = data;
  const [cuenta, setCuenta] = useState(1);
  
  return (
    <>
      <div className="Carrito">
        <div className="cajaImagen">
          <img src={imagenProducto}></img>
        </div>
        <div className="descripcionProducto">
          <h1 className="titulo">{nameProducto}</h1>
          <h3 className="subtitulo">{descriptionProducto}</h3>
        </div>
        <Contador stock={stockProducto} cuenta={cuenta} setCuenta={setCuenta}/>
        <Precios price={priceProducto} cantidad={cuenta} setState={setState} state={state} index={index}/>
      </div>
    </>
  );
}

export default ProductoEnCarrito;
