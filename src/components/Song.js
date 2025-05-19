import React from "react";
import { SongContainer, SongTitle, SongInfo } from "../stylesComponents/Song.styles";

function Song({ nombre, genero, pais, año, selected }) {
  return (
    <SongContainer selected={selected}>
      <SongTitle>{nombre}</SongTitle>
      <SongInfo><strong>Género:</strong> {genero || "Desconocido"}</SongInfo>
      <SongInfo><strong>País:</strong> {pais || "Desconocido"}</SongInfo>
      <SongInfo><strong>Año de formación:</strong> {año || "Desconocido"}</SongInfo>
    </SongContainer>
  );
}

export default Song;