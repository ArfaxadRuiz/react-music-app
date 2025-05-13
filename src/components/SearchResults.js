import React from "react";
import Song from "./Song";
import { Link } from "react-router-dom";

function SearchResults({ canciones, onAgregar }) {
  return (
    <section>
      <h2>Resultados de búsqueda</h2>
      {canciones.map((banda) => (
        <div key={banda.idArtist}>
          <Song
            nombre={banda.strArtist}
            genero={banda.strGenre}
            pais={banda.strCountry}
            año={banda.intFormedYear}
          />
          <button onClick={() => onAgregar(banda)}>Agregar a mi biblioteca</button>
          <br />
          <Link to={`/song/${banda.idArtist}`}>Ver detalles</Link>
        </div>
      ))}
    </section>
  );
}

export default SearchResults;