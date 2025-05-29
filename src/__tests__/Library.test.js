import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Library from '../components/Library';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Mock Redux
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const theme = {
  colors: {
    secondary: '#f0f0f0',
  },
  borderRadius: '8px',
};

describe('Library Component', () => {
  const mockDispatch = jest.fn();

  const cancionesSimuladas = [
    {
      idArtist: '1',
      strArtist: 'Artista 1',
      strGenre: 'Pop',
      strCountry: 'USA',
      intFormedYear: '2000',
    },
    {
      idArtist: '2',
      strArtist: 'Artista 2',
      strGenre: 'Rock',
      strCountry: 'UK',
      intFormedYear: '1995',
    }
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    mockDispatch.mockClear();
  });

  test('muestra mensaje cuando la biblioteca está vacía', () => {
    useSelector.mockImplementation(() => []);
    
    render(
      <ThemeProvider theme={theme}>
        <Library />
      </ThemeProvider>
    );

    expect(screen.getByText('No hay canciones en tu biblioteca.')).toBeInTheDocument();
  });

  test('renderiza correctamente la lista de canciones', () => {
    useSelector.mockImplementation(() => cancionesSimuladas);
    
    render(
      <ThemeProvider theme={theme}>
        <Library />
      </ThemeProvider>
    );

    cancionesSimuladas.forEach(cancion => {
      expect(screen.getByText(cancion.strArtist)).toBeInTheDocument();
    });

    const botonesEliminar = screen.getAllByText('Eliminar');
    expect(botonesEliminar).toHaveLength(cancionesSimuladas.length);
  });

  test('el botón "Eliminar" despacha removeSong correctamente', () => {
    useSelector.mockImplementation(() => cancionesSimuladas);
    
    render(
      <ThemeProvider theme={theme}>
        <Library />
      </ThemeProvider>
    );

    const botonesEliminar = screen.getAllByText('Eliminar');
    fireEvent.click(botonesEliminar[0]);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'library/removeSong',
      payload: cancionesSimuladas[0].idArtist,
    });
  });
});