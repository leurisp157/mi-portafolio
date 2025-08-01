import React from 'react';

const ReferenciasSection = ({ referencias }) => {
  return (
    <div className="section">
      <h2>Referencias Profesionales</h2>
      {referencias.map((ref, index) => (
        <div key={index} className="referencia-item">
          <h3>{ref.nombre}</h3>
          <h4>{ref.titulo}</h4>
          <h4>{ref.puesto}</h4>
          <p>Contacto: {ref.contacto}</p>
        </div>
      ))}
    </div>
  );
};

export default ReferenciasSection;