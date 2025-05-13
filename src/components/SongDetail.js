import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SongDetail({ canciones }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [loadingAlbums, setLoadingAlbums] = useState(true);
  const [errorAlbums, setErrorAlbums] = useState(null);

  const banda = canciones.find((b) => b.idArtist === id);

  useEffect(() => {
    // Solo intentar cargar si hay una banda válida
    const fetchAlbums = async () => {
      if (!banda || !banda.strArtist) {
        setLoadingAlbums(false);
        return;
      }

      setLoadingAlbums(true);
      setErrorAlbums(null);
      try {
        const response = await fetch(
          `https://www.theaudiodb.com/api/v1/json/2/album.php?i=${banda.idArtist}`
        );
        const data = await response.json();
        if (data.album) {
          setAlbums(data.album);
        } else {
          setErrorAlbums("No se encontraron álbumes.");
        }
      } catch (error) {
        setErrorAlbums("Error al cargar los álbumes.");
      } finally {
        setLoadingAlbums(false);
      }
    };

    fetchAlbums();
  }, [banda]);

  if (!banda) {
    return <p>Banda no encontrada</p>;
  }

  return (
    <div className="detail-container">
      <h2>Detalles de la Banda</h2>
      <h3>{banda.strArtist}</h3>
      <p><strong>Género:</strong> {banda.strGenre || 'Desconocido'}</p>
      <p><strong>País:</strong> {banda.strCountry || 'Desconocido'}</p>
      <p><strong>Año de formación:</strong> {banda.intFormedYear || 'Desconocido'}</p>
      <p><strong>Biografía:</strong> {banda.strBiographyEN || 'Biografía no disponible'}</p>

      <h4>Álbumes</h4>
      {loadingAlbums ? (
        <p>Cargando álbumes...</p>
      ) : errorAlbums ? (
        <p>{errorAlbums}</p>
      ) : (
        <ul>
          {albums.map((album, index) => (
            <li key={index}>
              <strong>{album.strAlbum}</strong> ({album.intYearReleased})
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => navigate(-1)}>Regresar</button>
    </div>
  );
}

export default SongDetail;