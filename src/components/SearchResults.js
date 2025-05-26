import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addSong } from "../redux/slices/librarySlice";

import Song from "./Song";

import {
  ResultsSection,
  BandaWrapper,
  AddButton,
  DetailLink
} from "../stylesComponents/SearchResults.styles";

function SearchResults() {
  const dispatch = useDispatch();
  const resultados = useSelector((state) => state.search.results);

  const handleAgregar = (cancion) => {
    dispatch(addSong(cancion));
  };

  return (
    <ResultsSection>
      <h2>Resultados de búsqueda</h2>
      {resultados.length === 0 ? (
        <p>No hay resultados para mostrar.</p>
      ) : (
        resultados.map((banda) => (
          <BandaWrapper key={banda.idArtist}>
            <Song
              nombre={banda.strArtist}
              genero={banda.strGenre}
              pais={banda.strCountry}
              año={banda.intFormedYear}
            />
            <AddButton onClick={() => handleAgregar(banda)}>
              Agregar a mi biblioteca
            </AddButton>
            <br />
            <DetailLink as={Link} to={`/song/${banda.idArtist}`}>
              Ver detalles
            </DetailLink>
          </BandaWrapper>
        ))
      )}
    </ResultsSection>
  );
}

export default SearchResults;