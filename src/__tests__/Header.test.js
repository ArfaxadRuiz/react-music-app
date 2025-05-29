import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

describe('Header', () => {
  // Utilidad para renderizar con el ThemeProvider
  const renderWithTheme = (component) =>
    render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

  test('muestra el título de la aplicación correctamente', () => {
    renderWithTheme(<Header />);
    expect(screen.getByText('Mi Biblioteca de Canciones')).toBeInTheDocument();
  });

  test('no contiene contenido adicional', () => {
    renderWithTheme(<Header />);
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent('Mi Biblioteca de Canciones');
  });
});
