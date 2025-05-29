import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import thunk from 'redux-thunk';

// Mock store
const mockStore = configureStore([thunk]);

// Utilidad para renderizar con store y theme
const renderWithProviders = (ui, { initialState = {} } = {}) => {
  const store = mockStore(initialState);
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      </Provider>
    ),
    store
  };
};

describe('SearchBar', () => {
  test('renderiza el input de búsqueda correctamente', () => {
    renderWithProviders(<SearchBar />, {
      initialState: { search: { loading: false } }
    });

    const input = screen.getByPlaceholderText('Buscar banda ...');
    expect(input).toBeInTheDocument();
  });

  test('permite al usuario escribir en el input', () => {
    renderWithProviders(<SearchBar />, {
      initialState: { search: { loading: false } }
    });

    const input = screen.getByPlaceholderText('Buscar banda ...');
    fireEvent.change(input, { target: { value: 'coldplay' } });
    expect(input.value).toBe('coldplay');
  });

  test('despacha la acción al enviar el formulario', () => {
    const { store } = renderWithProviders(<SearchBar />, {
      initialState: { search: { loading: false } }
    });

    const input = screen.getByPlaceholderText('Buscar banda ...');
    const button = screen.getByRole('button', { name: /buscar/i });

    fireEvent.change(input, { target: { value: 'coldplay' } });
    fireEvent.click(button);

    const actions = store.getActions();
    expect(actions[0].type).toBe('search/fetchSongs/pending');
    expect(actions[0].meta.arg).toBe('coldplay');
  });
});
