import { useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const navigate = useNavigate()

  const handleNavClick = (path: string) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="footer bg-dark text-white py-4 py-md-5">
      <div className="container">
        <div className="row g-3 g-md-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">HIGH END Interiors</h5>
            <p className="mb-0">Creating beautiful spaces that inspire and delight.</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a 
                  href="/" 
                  className="text-white-50"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('/')
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-white-50"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('/about')
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="text-white-50"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('/services')
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/gallery" 
                  className="text-white-50"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('/gallery')
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="/reviews" 
                  className="text-white-50"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('/reviews')
                  }}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  className="text-white-50"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('/faq')
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-white-50"
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
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">Services</h5>
            <ul className="list-unstyled">
              <li className="text-white-50">Residential Interior</li>
              <li className="text-white-50">Commercial Interior</li>
              <li className="text-white-50">Modular Kitchen</li>
              <li className="text-white-50">Consultation</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">Follow Us</h5>
            <div className="d-flex gap-2">
              <a 
                href="https://www.instagram.com/highend_interiors9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-light btn-sm"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063596333131" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3 my-md-4" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 HIGH END Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
