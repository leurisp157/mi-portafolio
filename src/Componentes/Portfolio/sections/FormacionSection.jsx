import React from 'react';

const FormacionSection = ({ formacion }) => {
  return (
    <div className="section">
      <h2>Formación Académica</h2>
      {formacion.map((form, index) => (
        <div key={index} className="formacion-item">
          <h3>{form.titulo}</h3>
          <h4>{form.institucion} - {form.periodo}</h4>
          <h4>{form.comentario}</h4>
        </div>
      ))}
    </div>
  );
};

export default FormacionSection;