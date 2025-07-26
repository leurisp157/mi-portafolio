import React from 'react';

const ExperienciaSection = ({ experiencia }) => {
  return (
    <div className="section">
      <h2>Experiencia Laboral</h2>
      {experiencia.map((exp, index) => (
        <div key={index} className="experiencia-item">
          <h3>{exp.puesto}</h3>
          <h4>{exp.empresa} - {exp.periodo}</h4>
          <h5>Funciones:</h5>
          <ul>
            {exp.funciones.map((funcion, i) => (
              <li key={i}>{funcion}</li>
            ))}
          </ul>
          <h5>Logros:</h5>
          <ul>
            {exp.logros.map((logro, i) => (
              <li key={i}>{logro}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienciaSection;