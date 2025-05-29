import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchResults from '../components/SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Mock de useDispatch y useSelector
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('SearchResults', () => {
  const mockDispatch = jest.fn();

  const resultadosSimulados = [
    {
      idArtist: '1',
      strArtist: 'Banda 1',
      strGenre: 'Rock',
      strCountry: 'USA',
      intFormedYear: '1990',
    }
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation(callback => callback({
      search: { results: resultadosSimulados }
    }));
    mockDispatch.mockClear();
  });

  test('renderiza correctamente la lista de resultados', () => {
    render(
      <BrowserRouter>
        <SearchResults />
      </BrowserRouter>
    );

    expect(screen.getByText('Resultados de búsqueda')).toBeInTheDocument();

    resultadosSimulados.forEach(banda => {
      expect(screen.getByText(banda.strArtist)).toBeInTheDocument();
    });

    const botonesAgregar = screen.getAllByText('Agregar a mi biblioteca');
    expect(botonesAgregar).toHaveLength(resultadosSimulados.length);
  });

  test('el botón "Agregar a mi biblioteca" ejecuta dispatch con la canción correcta', () => {
    render(
      <BrowserRouter>
        <SearchResults />
      </BrowserRouter>
    );

    // Tomamos el primer botón
    const primerBoton = screen.getAllByText('Agregar a mi biblioteca')[0];

    // Simulamos click
    fireEvent.click(primerBoton);

    // Verificamos que dispatch se llamó con addSong y la canción correcta
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'library/addSong',
      payload: resultadosSimulados[0],
    });
  });
});