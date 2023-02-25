import React, {useState} from 'react'
import "../Styles/productosCarrito.css"
const Contador = ({stock, cuenta, setCuenta}) => {
  

  const handelCountUp = ()=>{
    if (cuenta>=stock){
      setCuenta(stock);
    }else{
      setCuenta(cuenta + 1);
    }
  }

  const handelCountDown = ()=>{
    if (cuenta <= 1){
      setCuenta(1);
    }else{
      setCuenta(cuenta - 1);
    }
  }
  console.log(stock);
  return (
    <>
      <div className="Contador">
          <button onClick={()=>handelCountUp()} className="buttonRedondo">+</button>
          <div className="cuenta">{cuenta}</div>
          <button onClick={()=>handelCountDown()} className="buttonRedondo">-</button>
      </div>
    </>
  )
}

export default Contador
