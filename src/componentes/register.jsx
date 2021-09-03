import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { firebase } from '../firebase-config'
import "../estilos/register.css"

const Register = () => {
  const history = useHistory ();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const getEmail = (e) => {
    setUserEmail(e.target.value)
  }
  const getPassword = (e) => {
    setUserPassword(e.target.value)
  }
  const createUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail,userPassword)
      .then(response => {
        console.log(response)
        history.push("/home")
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="register">
      <input type="email" onChange={getEmail} placeholder="correo electrónico" />
      <input type="password" onChange={getPassword} placeholder="contraseña" />
      <input type="text" placeholder="nombre" />
      <button>Ingresar</button>
      <button onClick={createUser}>Registrarse</button>
    </div>
  );
};
export default Register;
