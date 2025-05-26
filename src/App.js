import React from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from './components/Library';
import SongDetail from "./components/SongDetail";
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  AppContainer,
  ContenidoPrincipal,
  MainContent,
  BibliotecaContainer
} from './stylesComponents/App.styles';

function App() {
  // Acceder al estado desde Redux
  const { results: artistas, loading, error } = useSelector((state) => state.search);
  const biblioteca = useSelector((state) => state.library);

  return (
    <AppContainer>
      <Header />
      <SearchBar />

      <Routes>
        <Route
          path="/"
          element={
            <ContenidoPrincipal>
              <MainContent>
                {loading && <p>Cargando artistas...</p>}
                {error && <p>Error al cargar los artistas: {error}</p>}
                {!loading && !error && artistas.length === 0 && (
                  <p>No se encontraron resultados.</p>
                )}
                {!loading && !error && artistas.length > 0 && (
                  <SearchResults canciones={artistas} />
                )}
              </MainContent>

              <BibliotecaContainer>
                <h2>Mi Biblioteca</h2>
                <Library canciones={biblioteca} />
              </BibliotecaContainer>
            </ContenidoPrincipal>
          }
        />

        <Route
          path="/song/:id"
          element={<SongDetail />}
        />
      </Routes>
    </AppContainer>
  );
}

export default App;