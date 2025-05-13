import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setData(resultado);
      } catch (error) {
        setError(error.message || 'Ocurrió un error');
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [url]);

  return { data, cargando, error };
}

export default useFetch;