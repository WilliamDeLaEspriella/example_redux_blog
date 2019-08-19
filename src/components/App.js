import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./menu";
import Usuarios from "./usuarios";
const tareas=() =>(<div>muchas tareas</div>);
const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component ={Usuarios}/>
      <Route exact path="/tareas" component ={tareas}/>
    </div>
  </BrowserRouter>
);

export default App;
