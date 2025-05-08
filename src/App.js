import React, { useEffect } from 'react';
import Header from "./components/Header";
import Song from './components/Song';
import './App.css';



function App() {
  
  useEffect(() => {
    console.log('La aplicación se ha cargado correctamente.');
  }, []);

  return (
    <div className="App">
      <Header />
      <Song titulo="Bohemian Rhapsody" artista="Queen" duracion="5:55" />
      <Song titulo="Imagine" artista="John Lennon" duracion="3:12" />
      <Song titulo="Six" artista="All That Remains" duracion="3:06" />
    </div>
  );
}

export default App;
