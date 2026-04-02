import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

interface NavbarProps {
  onQuoteClick?: () => void
}

function Navbar({ onQuoteClick }: NavbarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (path: string) => {
    navigate(path)
    // Close mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse?.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler') as HTMLButtonElement
      toggler?.click()
    }
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container-fluid px-3 px-md-4">
        <a 
          href="/" 
          className="logo-container d-flex align-items-center" 
          style={{textDecoration: 'none'}}
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          <img className="logo" src="/logo.png" alt="Logo" onError={(e) => e.currentTarget.style.display = 'none'} />
          <img className="highend" src="/high_end.png" alt="HIGH END" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span className="logo-interiors">Interiors</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/')
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                href="/about"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/about')
                }}
              >
                About us
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                href="/services"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/services')
                }}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/gallery')
                }}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isActive('/reviews') ? 'active' : ''}`}
                href="/reviews"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/reviews')
                }}
              >
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
                href="/faq"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/faq')
                }}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('/contact')
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button 
          className="btn btn-primary ms-2 ms-md-3" 
          onClick={onQuoteClick}
        >
          Get a Quote
        </button>
      </div>
    </nav>
  )
}

export default Navbar
