import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Resume from './components/Resume'
import NotFound from './components/NotFound'
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
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>

      </div>
      <Footer />
    </div>
  )
}

export default App
