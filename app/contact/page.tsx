'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [statusModal, setStatusModal] = useState({ show: false, type: '', message: '' })

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, subject, message } = formData
    if (!name || !email || !phone || !subject || !message) {
      setStatusModal({ show: true, type: 'error', message: 'Please fill all fields' })
      return
    }
    fetch('/api/send-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, subject, message })
    })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      return res.json()
    })
    .then(data => {
      if (data.success) {
        setStatusModal({ show: true, type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => {
          setStatusModal({ show: false, type: '', message: '' })
        }, 2000)
      } else {
        setStatusModal({ show: true, type: 'error', message: data.message || 'Failed to send message' })
      }
    })
    .catch(err => {
      console.error('Error:', err)
      setStatusModal({ show: true, type: 'error', message: `Error: ${err.message}` })
    })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: '2nd floor, Gulshan apartment, 5, Dixit Rd, near Sathaye College, Satsang CHSL, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+91 83558 88976'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'highendinteriors9@gmail.com'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: 'Mon - Sat: 09:00 AM - 06:00 PM'
    }
  ]

  const services = [
    'Residential Interior Design',
    'Commercial Interior Design',
    'Modular Kitchen Design',
    'Bedroom Design',
    'Living Room Design',
    'Bathroom Design',
    '3D Visualization',
    'Consultation Services'
  ]

  return (
    <div className="contact-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      <div className="contact-header">
        <div className="header-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Let's create something beautiful together.</p>
        </div>
      </div>

      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={5}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </button>

                {statusModal.show && (
                  <div className="modal-backdrop show" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1060,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div className="modal show" style={{
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1070,
                      width: '90%',
                      maxWidth: '380px',
                      background: 'white',
                      borderRadius: '20px',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}>
                      <div style={{
                        padding: '2rem',
                        textAlign: 'center'
                      }}>
                        <div style={{ marginBottom: '1rem' }}>
                          {statusModal.type === 'success' ? (
                            <i className="fas fa-check-circle" style={{fontSize: '3rem', color: '#28a745'}}></i>
                          ) : (
                            <i className="fas fa-exclamation-circle" style={{fontSize: '3rem', color: '#dc3545'}}></i>
                          )}
                        </div>
                        <p style={{fontSize: '1.15rem', color: '#333', marginBottom: '1.5rem'}}>{statusModal.message}</p>
                        <button type="button" className="btn btn-primary" onClick={() => setStatusModal({ show: false, type: '', message: '' })} style={{
                          padding: '0.85rem 2.5rem',
                          background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}>Close</button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="contact-side">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7167.3060072772205!2d72.8479356!3d19.0989097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97fc8df9833%3A0x979626c8639a7eb6!2sHIGHEND%20INTERIORS!5e1!3m2!1sen!2sin!4v1773171439368!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="services-box">
                <h3>Our Services</h3>
                <ul className="services-list">
                  {services.map((service, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="container">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest projects and design inspiration</p>
          <div className="social-links">
            <a href="https://www.instagram.com/highend_interiors9" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100063596333131" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://wa.me/919867818123" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="tel:+919867818123" className="social-btn phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
