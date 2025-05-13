import React, { useState } from "react";

function SearchBar({ onBuscar }) {
  const [termino, setTermino] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termino.trim() !== "") {
      onBuscar(termino.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        placeholder="Buscar banda ..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;