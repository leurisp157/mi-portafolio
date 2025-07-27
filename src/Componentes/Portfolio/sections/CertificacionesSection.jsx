import React from 'react';

const CertificacionesSection = ({ certificaciones }) => {
  return (
    <div className="section">
      <h2>Certificaciones y Cursos</h2>
      {certificaciones.map((cert, index) => (
        <div key={index} className="certificacion-item">
          <h3>{cert.nombre}</h3>
          <h4>{cert.entidad} - {cert.fecha}</h4>
          <a href={cert.enlace}>Ver certificado</a>
        </div>
      ))}
    </div>
  );
};

export default CertificacionesSection;