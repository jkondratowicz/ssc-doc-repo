import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './utils/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: `${import.meta.env.VITE_BASE_URL}/api/graphql`,
  exchanges: [cacheExchange, fetchExchange],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
