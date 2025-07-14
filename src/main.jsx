import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/about.css';
import './CSS/programs.css';
import './CSS/contact.css';
import './CSS/Style.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
