import React from 'react';

const HabilidadesSection = ({ habilidades }) => {
  return (
    <div className="section habilidades">
      <h2>Habilidades</h2>
      <div className="habilidades-grid">
        <div className="habilidad-categoria">
          <h3>Técnicas</h3>
          <ul>
            {habilidades.tecnicas.map((habilidad, index) => (
              <li key={index}>{habilidad}</li>
            ))}
          </ul>
        </div>
        <div className="habilidad-categoria">
          <h3>Blandas</h3>
          <ul>
            {habilidades.blandas.map((habilidad, index) => (
              <li key={index}>{habilidad}</li>
            ))}
          </ul>
        </div>
        <div className="habilidad-categoria">
          <h3>Idiomas</h3>
          <ul>
            {habilidades.idiomas.map((idioma, index) => (
              <li key={index}>{idioma}</li>
            ))}
          </ul>
        </div>
        <div className="habilidad-categoria">
          <h3>Herramientas</h3>
          <ul>
            {habilidades.herramientas.map((herramienta, index) => (
              <li key={index}>{herramienta}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HabilidadesSection;