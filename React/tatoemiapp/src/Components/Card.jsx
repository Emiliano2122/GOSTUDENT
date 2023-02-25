import React, {useState} from 'react'
import "..//styles.css"
const Card = ({id, name, imagen, price, description, logo, stock, state, setState}) => {
  const [visible, setvisible] = useState();
  const handleBuy = (event, id, name, imagen, price, description, stock)=>{
    event.preventDefault();
    setState([...state,{
      idProducto:id,
      nameProducto: name,
      imagenProducto: imagen,
      priceProducto: price,
      descriptionProducto: stock
    }])
  };
  return (
    <>
    {stock !=0 ? 
      <div className="card">
        <img 
          className="card-profile-img" 
          src={imagen}
          alt=""
          />
        <div className="card-description-bk"></div>
        <div className="card-logo">
          <img src={logo}/>
        </div>
        <div className="card-description">
          <p>{name}</p>
          <p>
            {description}
          </p>
        </div>
        <div className="card-price">
          <p>Precio: $ {price} MXN </p>
        </div>
        <div className="card-stock">
          <p>Disponible: {stock}</p>
        </div>
        <button onClick={(event)=>handleBuy(event, id, name, imagen, price, description, stock)} className="card-button-buy">
          Comprar
        </button>
      </div>
    :<div></div>}
    </>
  )
}

export default Card


