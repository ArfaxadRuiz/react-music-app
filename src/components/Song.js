import React, { useEffect } from 'react';

function Song({ titulo, artista, duracion }) {
  // Este efecto se ejecuta una vez cuando se monta el componente
  useEffect(() => {
    console.log(`Canción cargada: ${titulo} - ${artista}`);
  }, []);

  return (
    <section className="song">
      <h2>{titulo}</h2>
      <p><strong>Artista:</strong> {artista}</p>
      <p><strong>Duración:</strong> {duracion}</p>
    </section>
  );
}

export default Song;