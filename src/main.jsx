const style = document.createElement('style');
style.innerHTML = 'body { background-color: #000; margin: 0; }';
document.head.appendChild(style);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
