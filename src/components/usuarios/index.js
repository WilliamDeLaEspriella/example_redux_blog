import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import ContainerUsuario from "./ContainerUsuario";

class Usuarios extends Component {
  componentDidMount() {
    this.props.traerTodos();
  }

  //   getData = async () => {
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     this.setState({
  //       usuarios: result.data
  //     });
  //     // console.log(result);
  //   };
  render() {
    if (this.props.cargando) {
      return (
        <center>
          <Spinner />
        </center>
      );
    }
    if (this.props.error) {
      return <Fatal error={this.props.error} />;
    }
    return (
      <React.Fragment>
        <h1>Usuarios</h1>
        <ContainerUsuario />
      </React.Fragment>
    );
  }
}
const mapStateToProps = reducers => reducers.usuarioReducer;
export default connect(
  mapStateToProps,
  usuariosActions
)(Usuarios);
