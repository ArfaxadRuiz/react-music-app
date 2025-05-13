import React from "react";
import Song from "./Song";
import { Link } from "react-router-dom";

function SearchResults({ canciones, onAgregar }) {
    return (
      <section>
        <h2>Resultados de búsqueda</h2>
        {canciones.map((cancion) => (
        <div key={cancion.idAlbum}>
          <Song
            titulo={cancion.strAlbum}
            artista={cancion.strArtist}
            año={cancion.intYearReleased}
          />
          <button onClick={() => onAgregar(cancion)}>Agregar a mi biblioteca</button>
          <br />
          <Link to={`/song/${cancion.idAlbum}`}>Ver detalles</Link>
        </div>
      ))}
      </section>
    );
  }
    
export default SearchResults;