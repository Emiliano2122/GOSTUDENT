import React, { useState } from 'react'
import {auth } from "../Firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleCreatUser = (e) =>{
    e.preventDefault();
    console.log("Etamos creando el usuario");
  }
  return(
    <div>
      <h1>Ingresa tu informacion de usuario</h1>
      <from onSubmit={()=>handleCreatUser()}>
        <div>
          <div>
            <label>Nombre</label>
            <input/>            
          </div>
          <div>
            <label>Apellidos</label>
            <input/>
          </div>
          <div>
            <label>Email</label>
            <input/>
          </div>
          <div>
            <label>Contraseña</label>
            <input/>
          </div>
          <div>
            <button>Crear usuario</button>
          </div>
        </div>
      </from>
    </div>
  );
}

export default Register