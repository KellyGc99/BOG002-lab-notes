import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./estilos/index.css";
import App from "./App";
import "./firebase-config"

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={"Conectando la app..."}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

