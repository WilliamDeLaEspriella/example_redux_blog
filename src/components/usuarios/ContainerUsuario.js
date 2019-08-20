import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const ContainerUsuario = props => {
  const ponerFilas = () =>
    props.usuarios.map((usuario, key) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.username}</td>
        <td>{usuario.email}</td>
        <td>
          <Link to={`/publicaciones/${key}`}>
            <div className="eye-solid icon" />
          </Link>
        </td>
      </tr>
    ));

  return (
    <React.Fragment>
      <table className="tabla">
        <thead>
          <tr>
            <th>name</th>
            <th>usermame</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </React.Fragment>
  );
};
const mapStateToProps = reducers => reducers.usuarioReducer;
export default connect(mapStateToProps)(ContainerUsuario);
