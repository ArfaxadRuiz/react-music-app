import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from './components/Library';
import './App.css';

function App() {

  useEffect(() => {
    console.log('La aplicación se ha cargado correctamente.');
  }, []);

  const [resultadosBusqueda, setResultadosBusqueda] = useState([
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: "5:55" },
    { titulo: "Imagine", artista: "John Lennon", duracion: "3:12" },
    { titulo: "Six", artista: "All That Remains", duracion: "3:06" }
  ]);

  const [biblioteca, setBiblioteca] = useState([]);

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
      <SearchResults canciones={resultadosBusqueda} onAgregar={agregarAColeccion} />
      <Library canciones={biblioteca} />
    </div>
  );
}

export default App;
