import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Mock Redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock componentes hijos para simplificar las pruebas
jest.mock('../components/Header', () => () => <div>Header</div>);
jest.mock('../components/SearchBar', () => () => <input placeholder="Buscar artista..." />);
jest.mock('../components/SearchResults', () => ({ canciones }) => (
  <div>
    {canciones.map(c => (
      <div key={c.idArtist}>
        <p>{c.strArtist}</p>
        <button>Agregar</button>
      </div>
    ))}
  </div>
));
jest.mock('../components/Library', () => ({ canciones }) => (
  <div>
    {canciones.length === 0 ? (
      <p>Biblioteca vacía</p>
    ) : (
      canciones.map(c => <p key={c.idArtist}>{c.strArtist}</p>)
    )}
  </div>
));
jest.mock('../components/SongDetail', () => () => <div>Detalle de canción</div>);

const theme = {
  colors: {
    secondary: '#f0f0f0',
  },
  borderRadius: '8px',
};

describe('App Component', () => {
  const mockDispatch = jest.fn();

  const cancionesMock = [
    {
      idArtist: '1',
      strArtist: 'Artista Test',
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    mockDispatch.mockClear();
  });

  test('renderiza los componentes principales', () => {
    useSelector.mockImplementation(selector => {
      const state = {
        search: {
          results: [],
          loading: false,
          error: null,
        },
        library: [],
      };
      return selector(state);
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar artista...')).toBeInTheDocument();
    expect(screen.getByText('Biblioteca vacía')).toBeInTheDocument();
  });

  test('muestra resultados de búsqueda', () => {
    useSelector.mockImplementation(selector => {
      const state = {
        search: {
          results: cancionesMock,
          loading: false,
          error: null,
        },
        library: [],
      };
      return selector(state);
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Artista Test')).toBeInTheDocument();
    expect(screen.getByText('Agregar')).toBeInTheDocument();
  });

  test('muestra canciones en la biblioteca', () => {
    useSelector.mockImplementation(selector => {
      const state = {
        search: {
          results: [],
          loading: false,
          error: null,
        },
        library: cancionesMock,
      };
      return selector(state);
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Artista Test')).toBeInTheDocument();
  });
});