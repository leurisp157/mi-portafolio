import React from 'react';

const ResumenSection = ({ resumen, objetivo }) => {
  return (
    <div className="section">
      <h2>Resumen Profesional</h2>
      <p>{resumen}</p>
      <h3>Objetivo Profesional</h3>
      <p>{objetivo}</p>
    </div>
  );
};

export default ResumenSection;