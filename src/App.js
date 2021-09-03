import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./componentes/home";
import Login from "./componentes/login";
import Notes from "./componentes/notesCRUD-firebase";
import Register from "./componentes/register";
import "./estilos/app.css";
import logo from "./Imagenes/logo maki.PNG"

function App() {
  return (
    <BrowserRouter>
      <div className="menuLogo">
          <img src={logo}/>
        <Link to="/login"></Link>
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/notes" exact>
              <Notes />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
