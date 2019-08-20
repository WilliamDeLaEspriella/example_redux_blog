import React, { Component } from 'react';
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
class Publicaciones extends Component {
    componentDidMount(){
        if(!this.props.usuarioReducer.usuarios.length){
            this.props.traerTodos()
            this.props.traerPublicaciones()
        }
    }
    render() {
        console.log(this.props)
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
            <div>
                <h1>Pulicaciones de</h1>
                {this.props.match.params.key}
            </div>
        );
    }
}

const mapStateToProps = ({usuarioReducer,publicaionesReducer}) => {
    return{usuarioReducer,publicaionesReducer}};
const mapDispacherToPorps={
    ...usuariosActions,
    ...publicacionesActions
}
export default connect(
  mapStateToProps,
  mapDispacherToPorps
)(Publicaciones);