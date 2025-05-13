import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from './components/Library';
//import SongDetail from "./components/SongDetail";
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  useEffect(() => {
    console.log('La aplicación se ha cargado correctamente.');
  }, []);

  const [resultadosBusqueda, setResultadosBusqueda] = useState([
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: "5:55" },
    { titulo: "Imagine", artista: "John Lennon", duracion: "3:12" },
    { titulo: "Six", artista: "All That Remains", duracion: "3:06" }
  ]);

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
        cancionGuardada.titulo === cancion.titulo &&
        cancionGuardada.artista === cancion.artista
    );
    if (!yaExiste) {
      setBiblioteca([...biblioteca, cancion]);
    }
  };

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

      </Routes>
      
      
      
    </div>
  );
}

export default App;
