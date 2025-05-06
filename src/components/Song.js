import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { titulo, artista, duracion } = this.props;

    return (
      <section className="song">
        <h2>{titulo}</h2>
        <p><strong>Artista:</strong> {artista}</p>
        <p><strong>Duración:</strong> {duracion}</p>
      </section>
    );
  }
}

export default Song;