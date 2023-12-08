import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/car-for-rent">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
