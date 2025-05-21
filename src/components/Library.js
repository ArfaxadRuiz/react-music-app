import React from "react";
import Song from "./Song";
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../redux/libraryActions";
import { LibraryContainer, RemoveButton } from '../stylesComponents/Library.styles';

function Library() {
  const biblioteca = useSelector(state => state); // Accede al estado global
  const dispatch = useDispatch();

  const handleEliminar = (id) => {
    dispatch(removeSong(id));
  };

  return (
    <LibraryContainer>
      <section>
        <h2>Biblioteca de Canciones</h2>
        {biblioteca.length === 0 ? (
          <p>No hay canciones en tu biblioteca.</p>
        ) : (
          biblioteca.map((cancion) => (
            <div key={cancion.idArtist}>
              <Song
                nombre={cancion.strArtist}
                genero={cancion.strGenre}
                pais={cancion.strCountry}
                año={cancion.intFormedYear}
              />
              <RemoveButton onClick={() => handleEliminar(cancion.idArtist)}>
                Eliminar
              </RemoveButton>
              <hr />
            </div>
          ))
        )}
      </section>
    </LibraryContainer>
  );
}

export default Library;