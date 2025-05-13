import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from './components/Library';
import SongDetail from "./components/SongDetail";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';

function App() {

  useEffect(() => {
    console.log('La aplicación se ha cargado correctamente.');
  }, []);

  const { data, cargando, error } = useFetch("https://www.theaudiodb.com/api/v1/json/2/album.php?i=112674");

  const resultadosBusqueda = data?.album || [];

  /*const [resultadosBusqueda, setResultadosBusqueda] = useState([
    { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen", duracion: "5:55" },
    { id: 2, titulo: "Imagine", artista: "John Lennon", duracion: "3:12" },
    { id: 3, titulo: "Six", artista: "All That Remains", duracion: "3:06" }
  ]);*/

  //Constructor de la biblioteca
  const [biblioteca, setBiblioteca] = useState([]);

  // Se ejecuta cada vez que se actualiza la biblioteca
  useEffect(() => {
    console.log('La biblioteca ha sido actualizada:', biblioteca);
  }, [biblioteca]);

  //Agregar cancion a biblioteca, pero primero verificamos si ya existe
  const agregarAColeccion = (cancion) => {
    const yaExiste = biblioteca.some(
      (cancionGuardada) =>
        cancionGuardada.idAlbum === cancion.idAlbum
    );
    if (!yaExiste) {
      setBiblioteca([...biblioteca, cancion]);
    }
  };

  // Mostrar mensaje mientras se carga o si hay error
  if (cargando) return <p>Cargando álbumes...</p>;
  if (error) return <p>Error al cargar datos: {error}</p>;

  return (
    <div className="App">

      <Header />
      <Routes>

        <Route path='/' element ={
            <div className="contenido-principal">
            <div className="main-content">
              <SearchResults canciones={resultadosBusqueda} onAgregar={agregarAColeccion} />
            </div>
            <div className="library">
              <h2>Mi Biblioteca</h2>
              <Library canciones={biblioteca} />
            </div>
          </div>
        }
      />

      <Route path="/song/:id" element={<SongDetail canciones={resultadosBusqueda} />} />

      </Routes>
      
      
      
    </div>
  );
}

export default App;
