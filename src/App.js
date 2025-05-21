import React, { useState } from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from './components/Library';
import SongDetail from "./components/SongDetail";
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { useSelector } from 'react-redux';

// Importa los estilos
import {
  AppContainer,
  ContenidoPrincipal,
  MainContent,
  BibliotecaContainer
} from './stylesComponents/App.styles';

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [url, setUrl] = useState("");
  const { data, cargando, error } = useFetch(url);

  const biblioteca = useSelector(state => state); // Estado de Redux

  const handleBuscar = (termino) => {
    setTerminoBusqueda(termino);
    setUrl(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(termino)}`);
  };

  return (
    <AppContainer>
      <Header />
      <SearchBar onBuscar={handleBuscar} />

      <Routes>
        <Route
          path="/"
          element={
            <ContenidoPrincipal>
              <MainContent>
                {cargando && <p>Cargando artistas...</p>}
                {error && <p>Error al cargar los artistas: {error}</p>}
                {!cargando && !error && data?.artists === null && (
                  <p>No se encontraron resultados para "{terminoBusqueda}".</p>
                )}
                {!cargando && !error && data?.artists && (
                  <SearchResults canciones={data.artists} />
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
          element={<SongDetail canciones={data?.artists || []} />}
        />
      </Routes>
    </AppContainer>
  );
}

export default App;