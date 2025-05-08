import React from "react";
import Song from "./Song";

function Library({ canciones }) {
    return (
      <section>
        <h2>Biblioteca de Canciones</h2>
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
  
export default Library