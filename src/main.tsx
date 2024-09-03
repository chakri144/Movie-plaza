import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import "./css/movienavbar.css"
import "./css/login.css"
import"./css/contact.css"
import"./css/about.css"
import "./css/cards.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
