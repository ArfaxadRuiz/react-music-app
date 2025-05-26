import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk asíncrono para buscar canciones/artistas
export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (terminoBusqueda, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(terminoBusqueda)}`
      );
      return response.data.artists || []; // Si no hay resultados, retorna array vacío
    } catch (error) {
      return thunkAPI.rejectWithValue('Error al buscar canciones');
    }
  }
);

// Estado inicial
const initialState = {
  results: [],
  loading: false,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;