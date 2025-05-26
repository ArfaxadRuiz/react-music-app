import { createSlice } from '@reduxjs/toolkit';

// Estado inicial: array vacío
const initialState = [];

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const nuevaCancion = action.payload;
      const yaExiste = state.some(song => song.idArtist === nuevaCancion.idArtist);
      if (!yaExiste) {
        state.push(nuevaCancion);
      }
    },
    removeSong: (state, action) => {
      const id = action.payload;
      return state.filter(song => song.idArtist !== id);
    }
  }
});

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;