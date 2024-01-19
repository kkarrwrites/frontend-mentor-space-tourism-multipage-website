import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App.jsx';
// CSS
import './assets/css/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/frontend-mentor-space-website/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
