import React from 'react';
import Header from "./components/Header";
import Songs from './components/Song';
import './App.css';

function App() {
  return (

    <div className="App">
      <Header />
      <Songs titulo="Bohemian Rhapsody" artista="Queen" duracion="5:55" />
      <Songs titulo="Imagine" artista="John Lennon" duracion="3:12" />
      <Songs titulo="Six" artista="All That Remains" duracion="3:06" />
    </div>

  );
}

export default App;
