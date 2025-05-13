import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setCargando(true);
    setError(null);

    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const resultadoTexto = await respuesta.text();

        if (!resultadoTexto) {
          throw new Error('Respuesta vacía del servidor');
        }

        const resultado = JSON.parse(resultadoTexto);
        setData(resultado);
      } catch (error) {
        setError(error.message || 'Ocurrió un error');
        setData(null);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [url]);

  return { data, cargando, error };
}

export default useFetch;