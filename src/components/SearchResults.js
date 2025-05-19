import React from "react";
import Song from "./Song";
import { Link } from "react-router-dom";
import {
  ResultsSection,
  BandaWrapper,
  AddButton,
  DetailLink
} from "../stylesComponents/SearchResults.styles";

function SearchResults({ canciones, onAgregar }) {
  return (
    <ResultsSection>
      <h2>Resultados de búsqueda</h2>
      {canciones.map((banda) => (
        <BandaWrapper key={banda.idArtist}>
          <Song
            nombre={banda.strArtist}
            genero={banda.strGenre}
            pais={banda.strCountry}
            año={banda.intFormedYear}
          />
          <AddButton onClick={() => onAgregar(banda)}>
            Agregar a mi biblioteca
          </AddButton>
          <br />
          <DetailLink as={Link} to={`/song/${banda.idArtist}`}>
            Ver detalles
          </DetailLink>
        </BandaWrapper>
      ))}
    </ResultsSection>
  );
}

export default SearchResults;