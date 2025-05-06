import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { titulo, artista, duracion } = this.props;

    return (
      <section>
        <h2>{titulo}</h2>
        <h3>{artista}</h3>
        <h4>{duracion}</h4>
      </section>
    );
  }
}

export default Song;