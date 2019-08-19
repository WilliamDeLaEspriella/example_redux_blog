import React, { Component } from "react";
import axios from "axios";
import { async } from "q";
class App extends Component {
  state = {
    usuarios: []
  };

  componentDidMount() {
    this.getData();

  }

  getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({
      usuarios: result.data
    });
    // console.log(result);
  };
  ponerFilas = () =>
    this.state.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.username}</td>
        <td>{usuario.email}</td>
      </tr>
    ));
  render() {
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>name</th>
              <th>usermame</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
