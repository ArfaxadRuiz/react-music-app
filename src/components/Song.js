import React, { useEffect } from 'react';

function Song({ titulo, artista, duracion }) {

  useEffect(() => {
    console.log(`Canción cargada: ${titulo} - ${artista}`);
  }, [titulo, artista]);

  return (
    <section className="song">
      <h2>{titulo}</h2>
      <p><strong>Artista:</strong> {artista}</p>
      <p><strong>Duración:</strong> {duracion}</p>
    </section>
  );
}

export default Song;