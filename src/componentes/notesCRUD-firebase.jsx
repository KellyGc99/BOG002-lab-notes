import React, {useState} from "react";
import {db} from "../firebase-config"
import "../estilos/crud.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Notes = () => {
  const history= useHistory();
  const [nota, setNota] = useState(null);
  const crudSubmit = e => {
    e.preventDefault();
    db.collection("notas")
    .doc()
    .set({
      "nuevaNota": nota,
      "Fecha": Date.now()
    })
    console.log(nota);
    setNota(null);
    history.push("/home")
    console.log(nota);
  }
console.log(nota);

  return (<form>
    <Link to = "/home">
      <button>Mis Notas</button>
    </Link>
    <hr></hr>
    <textarea onChange={(e)=>{setNota(e.target.value)}} className="textarea" placeholder="nueva nota"/>
    <hr></hr>
    <button className="buttonNotas"onClick={crudSubmit}>Guardar</button>
  </form>
  )
}

export default Notes ;
