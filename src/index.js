import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
