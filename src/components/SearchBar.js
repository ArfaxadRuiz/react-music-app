import React, { useState } from "react";
import {
  SearchForm,
  SearchInput,
  SearchButton
} from "../stylesComponents/SearchBar.styles";

function SearchBar({ onBuscar }) {
  const [termino, setTermino] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termino.trim() !== "") {
      onBuscar(termino.trim());
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        placeholder="Buscar banda ..."
      />
      <SearchButton type="submit">Buscar</SearchButton>
    </SearchForm>
  );
}

export default SearchBar;