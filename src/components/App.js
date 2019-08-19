import React from "react";

const App = () => {
  const ponerFilas = () => [
    <tr>
      <td>william</td>
      <td>gmail.om</td>
      <td>d.com</td>
    </tr>,
    <tr>
      <td>william</td>
      <td>gmail.om</td>
      <td>d.com</td>
    </tr>
  ];
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
        <tbody>
        {ponerFilas()}
        </tbody>
      </table>
    </div>
  );
};

export default App;
