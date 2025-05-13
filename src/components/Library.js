import React from "react";
import Song from "./Song";

function Library({ canciones }) {
  return (
    <section>
      <h2>Biblioteca de Canciones</h2>
      {canciones.map((cancion, index) => (
        <Song
          key={index}
          nombre={cancion.strAlbum}
          genero={cancion.strGenre}
          pais={cancion.strCountry}
          año={cancion.intFormedYear}
        />
      ))}
    </section>
  );
}

export default Library;