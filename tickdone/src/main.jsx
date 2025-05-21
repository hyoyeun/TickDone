import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'

const root = createRoot(document.getElementById('root'))
if (process.env.NODE_ENV === 'development') {
  const originalLog = console.log
  console.log = function (...args) {
    if (args[0]?.includes('Router is responding')) return
    originalLog.apply(console, args)
  }
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)