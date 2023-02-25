import React from 'react'
import "../Styles/login.css"
import {auth} from '../Firebase'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    try{
      signInWithEmailAndPassword(auth, email, password).then((response)=>{
        console.log(response);
        navigate("/")
      });
    }catch (error){
      console.log(error);
    }
  };
    
  return (
    <>
    <div className='fondo'>
        <form className='formulario' onSubmit={(e)=>handleSignIn(e)}>
            <h3>Inicia sesión</h3>
            <label>Nombre de usuario</label>
            <input onBlur={(event)=>setEmail(event.target.value)}/>
            <label>Contraseña</label>
            <input onBlur={(event)=>setPassword(event.target.value)}/>
            <button>Iniciar sesión</button>
        </form>
    </div>
    </>
  )
}

export default Login;