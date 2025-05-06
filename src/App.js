import React, { Component } from 'react';
import Header from "./components/Header";
import Song from './components/Song';
import './App.css';



class App extends Component{
  componentDidMount() {
    console.log('La aplicación se ha cargado correctamente.');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Song titulo="Bohemian Rhapsody" artista="Queen" duracion="5:55" />
        <Song titulo="Imagine" artista="John Lennon" duracion="3:12" />
        <Song titulo="Six" artista="All That Remains" duracion="3:06" />
      </div>
    );
  }

}

export default App;
