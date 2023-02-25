import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import ShoppingCart from "./Pages/ShoppingCart";
import Register from "./Pages/Register";

const AppRouter = () => {
    const [productosPorComprar, setProductosPorComprar] = useState([])
    console.log(productosPorComprar)
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ShoppingCart" element={<ShoppingCart state={productosPorComprar} setState={setProductosPorComprar}/>} />
            <Route path="/Products" element={<Products state={productosPorComprar} setState={setProductosPorComprar}/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </>
    )
};

export default AppRouter;