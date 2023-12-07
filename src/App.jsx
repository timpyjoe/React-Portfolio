import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import { Link, Outlet } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header />
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>

      </div>
      <Footer />
    </div>
  )
}

export default App
