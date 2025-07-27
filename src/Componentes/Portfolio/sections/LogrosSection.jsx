import React from 'react';

const LogrosSection = ({ logros }) => {
  return (
    <div className="section">
      <h2>Logros y Reconocimientos</h2>
      {logros.map((categoria, index) => (
        <div key={index}>
          <h3>{categoria.titulo}</h3>
          <ul>
            <li>{categoria.primerLogro}</li>
            <li>{categoria.segundoLogro}</li>
            <li>{categoria.tercerLogro}</li>
            <li>{categoria.cuartoLogro}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LogrosSection;