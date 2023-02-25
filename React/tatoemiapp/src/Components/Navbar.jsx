import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ShoppingCart">Carrito</Link>
                    </li>
                    <li>
                        <Link to="/products">Productos</Link>
                    </li>
                    <li>
                        <Link to="/Login">Inicia secion</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;