import React from "react";
import { useParams } from "react-router-dom";

function SongDetail({ canciones }) {
  const { id } = useParams();
  const cancion = canciones.find((c) => c.id.toString() === id);

  if (!cancion) {
    return <p>Canción no encontrada</p>;
  }

  return (
    <div>
      <h2>Detalles de la canción</h2>
      <h3>{cancion.titulo}</h3>
      <p><strong>Artista:</strong> {cancion.artista}</p>
      <p><strong>Duración:</strong> {cancion.duracion}</p>
    </div>
  );
}

export default SongDetail;