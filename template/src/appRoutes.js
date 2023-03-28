import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import { initHistory } from './utilities/historyHandler'

const AppRoutes = () => {
  const history = useNavigate()
  initHistory(history)
  return (
    <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default AppRoutes