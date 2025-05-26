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

        const resultado = await respuesta.json();

        if (!resultado || Object.keys(resultado).length === 0) {
          setData(null);
          setError("No se encontró información.");
        } else {
          setData(resultado);
          console.log("Datos recibidos de la API:", resultado);
        }
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