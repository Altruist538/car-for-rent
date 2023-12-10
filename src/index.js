import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/car-for-rent">
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </BrowserRouter>
);
