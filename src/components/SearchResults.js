import React from "react";
import Song from "./Song";

function SearchResults({ canciones, onAgregar }) {
    return (
      <section>
        <h2>Resultados de búsqueda</h2>
        {canciones.map((cancion, index) => (
        <div key={index}>
          <Song
            titulo={cancion.titulo}
            artista={cancion.artista}
            duracion={cancion.duracion}
          />
          <button onClick={() => onAgregar(cancion)}>Agregar a mi biblioteca</button>
        </div>
      ))}
      </section>
    );
  }
    
export default SearchResults;