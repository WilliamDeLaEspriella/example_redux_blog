import React, { Component } from "react";
import axios from "axios";
import {connect} from 'react-redux'
class Usuarios extends Component {

//   componentDidMount() {
//     this.getData();

//   }

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
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.username}</td>
        <td>{usuario.email}</td>
      </tr>
    ));
  render() {
    return (
      <React.Fragment >
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
      </React.Fragment>
    );
  }
}
const mapStateToProps = (reducers)=>(
    reducers.usuarioReducer
);
export default connect(mapStateToProps,{/*Actions*/ })(Usuarios);
