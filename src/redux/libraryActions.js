// Acción para agregar una canción
export const addSong = (song) => {
  return {
    type: 'ADD_SONG',
    payload: song
  };
};

// Acción para eliminar una canción por ID
export const removeSong = (idArtist) => {
  return {
    type: 'REMOVE_SONG',
    payload: idArtist
  };
};