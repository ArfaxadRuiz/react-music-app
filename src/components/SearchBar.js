import React, { useState } from "react";
import {
  SearchForm,
  SearchInput,
  SearchButton
} from "../stylesComponents/SearchBar.styles";

import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/slices/searchSlice";

function SearchBar() {
  const [termino, setTermino] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.search.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termino.trim() !== "") {
      dispatch(fetchSongs(termino.trim()));
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
      <SearchButton type="submit" disabled={loading}>
        {loading ? "Buscando..." : "Buscar"}
      </SearchButton>
    </SearchForm>
  );
}

export default SearchBar;