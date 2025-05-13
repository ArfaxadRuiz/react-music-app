import React from "react";

function Song({ nombre, genero, pais, año }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p><strong>Género:</strong> {genero || "Desconocido"}</p>
      <p><strong>País:</strong> {pais || "Desconocido"}</p>
      <p><strong>Año de formación:</strong> {año || "Desconocido"}</p>
    </div>
  );
}

export default Song;