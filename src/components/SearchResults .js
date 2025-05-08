import React from "react";
import Song from "./Song";


function SearchResults({ canciones }) {
    return (
      <section>
        <h2>Resultados de búsqueda</h2>
        {canciones.map((cancion, index) => (
          <Song
            key={index}
            titulo={cancion.titulo}
            artista={cancion.artista}
            duracion={cancion.duracion}
          />
        ))}
      </section>
    );
  }
  
  export default SearchResults;