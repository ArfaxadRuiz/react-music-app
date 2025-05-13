import React from "react";
import Song from "./Song";
import { Link } from "react-router-dom";

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
          <br />
          <Link to={`/song/${cancion.id}`}>Ver detalles</Link>
        </div>
      ))}
      </section>
    );
  }
    
export default SearchResults;