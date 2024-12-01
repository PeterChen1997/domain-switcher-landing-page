import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Check for saved theme preference or default to light
const theme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.add(theme);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);