import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  DetailContainer,
  Title,
  Subtitle,
  InfoText,
  AlbumsTitle,
  AlbumsList,
  AlbumItem,
  BackButton
} from "../stylesComponents/SongDetail.styles";

function SongDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const canciones = useSelector((state) => state.search.results);
  const banda = canciones.find((b) => b.idArtist === id);

  const [albums, setAlbums] = useState([]);
  const [loadingAlbums, setLoadingAlbums] = useState(true);
  const [errorAlbums, setErrorAlbums] = useState(null);

  useEffect(() => {
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
    <DetailContainer>
      <Title>Detalles de la Banda</Title>
      <Subtitle>{banda.strArtist}</Subtitle>
      <InfoText><strong>Género:</strong> {banda.strGenre || 'Desconocido'}</InfoText>
      <InfoText><strong>País:</strong> {banda.strCountry || 'Desconocido'}</InfoText>
      <InfoText><strong>Año de formación:</strong> {banda.intFormedYear || 'Desconocido'}</InfoText>
      <InfoText><strong>Biografía:</strong> {banda.strBiographyEN || 'Biografía no disponible'}</InfoText>

      <AlbumsTitle>Álbumes</AlbumsTitle>
      {loadingAlbums ? (
        <p>Cargando álbumes...</p>
      ) : errorAlbums ? (
        <p>{errorAlbums}</p>
      ) : (
        <AlbumsList>
          {albums.map((album, index) => (
            <AlbumItem key={index}>
              <strong>{album.strAlbum}</strong> ({album.intYearReleased})
            </AlbumItem>
          ))}
        </AlbumsList>
      )}

      <BackButton onClick={() => navigate(-1)}>Regresar</BackButton>
    </DetailContainer>
  );
}

export default SongDetail;
