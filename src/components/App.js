import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          nombre: "william",
          email: "expor.gmail.com",
          enlace: "fbind.com"
        },
        {
          nombre: "gaia",
          email: "gaia.gmail.com",
          enlace: "gaiabind.com"
        }
      ]
    };
  }
  ponerFilas = () =>
    this.state.usuarios.map(usuario => (
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.email}</td>
        <td>{usuario.enlace}</td>
      </tr>
    ));
  render() {
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>nombre</th>
              <th>correo</th>
              <th>enlace</th>
            </tr>
          </thead>
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
