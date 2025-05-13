import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from './components/Library';
import SongDetail from "./components/SongDetail";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [url, setUrl] = useState("");
  const { data, cargando, error } = useFetch(url);
  const [biblioteca, setBiblioteca] = useState([]);

  const handleBuscar = (termino) => {
    setTerminoBusqueda(termino);
    setUrl(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(termino)}`);
  };

  const agregarAColeccion = (artista) => {
    const yaExiste = biblioteca.some(
      (itemGuardado) => itemGuardado.idArtist === artista.idArtist
    );
    if (!yaExiste) {
      setBiblioteca([...biblioteca, artista]);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onBuscar={handleBuscar} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="contenido-principal">
              <div className="main-content">
                {cargando && <p>Cargando artistas...</p>}
                {error && <p>Error al cargar los artistas: {error}</p>}
                {!cargando && !error && data && data.artists === null && (
                  <p>No se encontraron resultados para "{terminoBusqueda}".</p>
                )}
                {!cargando && !error && data && data.artists && (
                  <SearchResults canciones={data.artists} onAgregar={agregarAColeccion} />
                )}
              </div>
              <div className="library">
                <h2>Mi Biblioteca</h2>
                <Library canciones={biblioteca} />
              </div>
            </div>
          }
        />

        <Route
          path="/song/:id"
          element={<SongDetail canciones={data?.artists || []} />}
        />
      </Routes>
    </div>
  );
}

export default App;
