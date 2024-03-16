import React from 'react';
import habilities from './technologies';
const HabilidadesComponente = ({ habilidades }) => {
  return (
    <div className="habilidades">
      <h2>Habilidades del Desarrollador</h2>
      {habilidades.map((habilidad, index) => (
        <div key={index} className="habilidad">
          <img src={habilidad.icono} alt={habilidad.tecnologia} />
          <div className="barra">
            <div className="nivel" style={{ width: `${habilidad.porcentaje}%` }}></div>
          </div>
          <p>{habilidad.tecnologia}</p>
        </div>
      ))}
    </div>
  );
};

export default HabilidadesComponente;
