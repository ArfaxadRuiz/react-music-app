import React from 'react';
import Header from "./components/Header";
import Songs from './components/Song';

function App() {
  return (

    <div className="App">
      <Header />
      <Songs titulo="Bohemian Rhapsody" artista="Queen" duracion="5:55" />
      <Songs titulo="Imagine" artista="John Lennon" duracion="3:12" />
    </div>

  );
}

export default App;
