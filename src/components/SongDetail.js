import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function SongDetail({ canciones }) {
  const { id } = useParams(); // Obtener el parámetro de la URL
  const navigate = useNavigate();

  // Buscar la banda basada en el idArtist
  const banda = canciones.find((b) => b.idArtist === id);

  if (!banda) {
    return <p>Banda no encontrada</p>;
  }

  return (
    <div>
      <h2>Detalles de la Banda</h2>
      <h3>{banda.strArtist}</h3>
      <p><strong>Género:</strong> {banda.strGenre || 'Desconocido'}</p>
      <p><strong>País:</strong> {banda.strCountry || 'Desconocido'}</p>
      <p><strong>Año de formación:</strong> {banda.intFormedYear || 'Desconocido'}</p>
      <p><strong>Biografía:</strong> {banda.strBiographyEN || 'Biografía no disponible'}</p>

      <button onClick={() => navigate(-1)}>Regresar</button>
    </div>
  );
}

export default SongDetail;