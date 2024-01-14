import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/reset.css'
import './index.css'
import './assets/color.css'
import {BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'portfolio/'}>
    {/* <BrowserRouter > */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
