import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { googleAuthProvider, firebase } from '../firebase-config';
import { Link } from "react-router-dom";
import botonGoogle from "../Imagenes/google.PNG"
import "../estilos/login.css"

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const getEmail = (e) => {
    setUserEmail(e.target.value)
  }
  const getPassword = (e) => {
    setUserPassword(e.target.value)
  }
  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(response => {
        history.push("/home")
        setUser(response.user)
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }

  const loginWithEmailAndPassword = () =>{
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail,userPassword)
      .then(async response =>{
         setUser(response.user)
         history.push("/home")
         console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="login">
      <img onClick={loginWithGoogle} src={botonGoogle}/>
      <input onChange={getEmail} type="email" placeholder="correo electrónico" />
      <input onChange={getPassword} type="password" placeholder="contraseña" />
      <button onClick={loginWithEmailAndPassword}>Ingresar</button>
      <Link to="/register">
        <button >Registrarse</button>
      </Link>
    </div>
  );
};

export default Login;
