import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentication from './pages/Authentication'
import Database from './pages/Database'
import Hosting from './pages/Hosting'
import Storage from './pages/Storage'
import Machine from './pages/Machine'
import Functions from './pages/Functions'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="storage" element={<Storage />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="functions" element={<Functions />} />
        <Route path="machine-learning" element={<Machine />} />
      </Route>
      
    </Routes>
  </BrowserRouter>,
)
