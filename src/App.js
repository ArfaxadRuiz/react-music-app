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
  const { data, loading, error } = useFetch(url);

  const [biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
    console.log('Datos de la API:', data);
  }, [data]);

  useEffect(() => {
    console.log('La URL de búsqueda ha cambiado:', url);
  }, [url]);

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

  if (loading) return <p>Cargando artistas...</p>;
  if (error) return <p>Error al cargar datos: {error}</p>;

  return (
    <div className="App">
      <Header />
      <SearchBar onBuscar={handleBuscar} />

      <Routes>
        <Route path="/" element={
          <div className="contenido-principal">
            <div className="main-content">
              {loading && <p>Cargando...</p>}
              {error && <p>Error al cargar los artistas</p>}
              {!loading && data && data.artists && (
                <SearchResults canciones={data.artists} onAgregar={agregarAColeccion} />
              )}
            </div>
            <div className="library">
              <h2>Mi Biblioteca</h2>
              <Library canciones={biblioteca} />
            </div>
          </div>
        } />

        <Route path="/song/:id" element={<SongDetail canciones={data?.artists || []} />} />
      </Routes>
    </div>
  );
}

export default App;
