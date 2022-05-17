import React from "react";

export default function Login() {

    
    const login = (event) =>{
            event.preventDefault()
    }

    return (
        <div className = "bodyLogin">
            <div className = "form">
            <div className = "formContainer">
            <form onSubmit={login}>
                <input placeholder='Nombre de usuario' type="email" className="inputColor"  />
                <input placeholder='Contraseña' type="password" className="inputColor"  />
                <button className = "digiButton">Ingresar</button>
            </form>
            </div>
            </div>
        </div>
    );
  }