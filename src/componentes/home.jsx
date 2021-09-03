import React, {useState, useEffect} from "react";
import "../estilos/home.css";
import { Link } from "react-router-dom";
import {db} from "../firebase-config";

const Home = () => {
  const [notas, setNotas] = useState([]);
  useEffect(()=>{
    db.collection("notas")
      .orderBy("Fecha")
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ ...doc.data() })
        })
        setNotas(data)
      })
  },[]);
  
  console.log(notas);
  
  return (
    <div className="infoMaki">
      <Link to="/notes">
        <button>Nueva Nota</button>
      </Link>
      <h1>Aqui están tus notas</h1>
      {notas.map((nota)=>(
        <div>
          <article>{nota.nuevaNota}</article>
        </div>
      ))}
    </div>
  );
};
export default Home;
