import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap the React app using React 18's createRoot API.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
