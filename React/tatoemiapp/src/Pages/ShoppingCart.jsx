import { useState } from "react";
import ProductoEnCarrito from "../Components/ProductoEnCarrito";
import "../Styles/ShoppingCart.css"
const ShoppingCart = ({state, setState}) => {
    const RemoverProducto = (index) =>{
        setState([]);
    }
    return(
        <>
        <div className="contenedorPrincipal">
            <div className="cabezeraPrincipal">
                <h2 className="tituloPrincipal">Carrito de Compra</h2>
                <button onClick={RemoverProducto} className="buttonRemoverTodo">Remover todo</button>
            </div>
            <div>
                {state.map((item,index)=>{
                    return(
                        <ProductoEnCarrito data={item} key={index} stat={state} setState={setState} index={index}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default ShoppingCart;