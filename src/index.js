import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';

import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
