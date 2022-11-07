import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import File from './pages/File'
import Files from './pages/Files'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="files" element={<Files />} />
      <Route path="files/:id" element={<File />} />
    </Routes>
  </BrowserRouter>
)
