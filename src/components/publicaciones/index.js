import React, { Component } from 'react';
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
class Publicaciones extends Component {
    componentDidMount(){
        if(!this.props.usuarios.length){
            this.props.traerTodos()
        }
    }
    render() {
        console.log(this.props.usuarios)
        return (
            <div>
                <h1>Pulicaciones de</h1>
                {this.props.match.params.key}
            </div>
        );
    }
}

const mapStateToProps = reducers => reducers.usuarioReducer;
export default connect(
  mapStateToProps,
  usuariosActions
)(Publicaciones);