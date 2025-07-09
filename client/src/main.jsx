import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import { setupAxios } from './utils/Setup';
import './style.css';
import App from './App.jsx';

setupAxios(axios);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
