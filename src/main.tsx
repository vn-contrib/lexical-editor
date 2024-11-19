import './style.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>  
)
