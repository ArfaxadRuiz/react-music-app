import React, { useEffect } from 'react';
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import './App.css';

function App() {

  useEffect(() => {
    console.log('La aplicación se ha cargado correctamente.');
  }, []);

  const canciones = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: "5:55" },
    { titulo: "Imagine", artista: "John Lennon", duracion: "3:12" },
    { titulo: "Six", artista: "All That Remains", duracion: "3:06" }
  ];

  return (
    <div className="App">
      <Header />
      <SearchResults canciones={canciones} />
    </div>
  );
}

export default App;
