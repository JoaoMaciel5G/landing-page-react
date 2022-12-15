import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import SignUp from './components/SignUp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
