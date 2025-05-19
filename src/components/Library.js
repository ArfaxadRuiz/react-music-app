import React from "react";
import Song from "./Song";
import { LibraryContainer } from '../stylesComponents/Library.styles';

function Library({ canciones }) {
  return (
    <LibraryContainer>
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
    </LibraryContainer>
    
  );
}

export default Library;