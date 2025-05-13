import React, { useEffect } from 'react';

function Song({ titulo, artista, año }) {

  useEffect(() => {
    console.log(`Canción cargada: ${titulo} - ${artista}`);
  }, [titulo, artista]);

  return (
    <section className="song">
      <h2>{titulo}</h2>
      <p><strong>Artista:</strong> {artista}</p>
      <p><strong>Año de lanzamiento:</strong> {año}</p>
    </section>
  );
}

export default Song;