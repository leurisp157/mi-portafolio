import React from 'react';

const InicioSection = ({ data }) => {
  return (
    <div className="section inicio">
      <div className="perfil-container">
        <img src={data.foto} alt="Foto de perfil" className="foto-perfil" />
        <div className="info-personal">
          <h1>{data.nombre}</h1>
          <p><strong>Email:</strong> {data.correo}</p>
          <p><strong>Teléfono:</strong> {data.telefono}</p>
          <div className="redes-sociales">
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {data.sitioWeb && (
              <a href={data.sitioWeb} target="_blank" rel="noopener noreferrer">Sitio Web</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioSection;