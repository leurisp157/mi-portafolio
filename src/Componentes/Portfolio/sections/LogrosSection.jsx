import React from 'react';

const LogrosSection = ({ logros }) => {
  return (
    <div className="section">
      <h2>Logros y Reconocimientos</h2>
      <ul>
        {logros.map((logro, index) => (
          <li key={index}>{logro}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogrosSection;