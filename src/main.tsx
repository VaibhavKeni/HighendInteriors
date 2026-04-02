import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Gallery from './pages/Gallery.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Services from './pages/Services.tsx'
import Reviews from './pages/Reviews.tsx'
import FAQ from './pages/FAQ.tsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
