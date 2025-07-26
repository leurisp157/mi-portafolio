import React from 'react';

const ProyectosSection = ({ proyectos }) => {
  return (
    <div className="section proyectos">
      <h2>Proyectos Destacados</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto-card">
            <img src={proyecto.imagen} alt={proyecto.nombre} />
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <p><strong>Tecnologías:</strong> {proyecto.tecnologias.join(', ')}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosSection;