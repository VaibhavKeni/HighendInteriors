'use client'

import { useState } from 'react'
import '../styles/QuoteModal.css'

interface QuoteModalProps {
  show: boolean
  onClose: () => void
}

export default function QuoteModal({ show, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [statusModal, setStatusModal] = useState({ show: false, type: '', message: '' })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, message } = formData
    if (!name || !email || !phone || !message) {
      setStatusModal({ show: true, type: 'error', message: 'Please fill all fields' })
      return
    }
    const mailtoLink = `mailto:highendinteriors9@gmail.com?subject=Quote Request from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`
    window.location.href = mailtoLink
    setStatusModal({ show: true, type: 'success', message: 'Opening email client...' })
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => {
      setStatusModal({ show: false, type: '', message: '' })
      onClose()
    }, 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, message } = formData
    if (!name || !email || !phone || !message) {
      alert('Please fill all fields')
      return
    }
    const whatsappNumber = '919867818123'
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
    onClose()
  }

  if (!show) return null

  return (
    <>
      <div className="modal-backdrop show" style={{display: 'block'}}>
        <div className="modal show" style={{display: 'block'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Get a Free Quote</h5>
                <button type="button" className="btn-close" onClick={onClose}>X</button>
              </div>
              <div className="modal-body">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleFormChange} />
                  </div>
                  <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleFormChange} />
                  </div>
                  <div className="mb-3">
                    <input type="tel" name="phone" className="form-control" placeholder="Your Phone" value={formData.phone} onChange={handleFormChange} />
                  </div>
                  <div className="mb-3">
                    <textarea name="message" className="form-control" rows={5} placeholder="Your Message" value={formData.message} onChange={handleFormChange}></textarea>
                  </div>
                  <div className="d-flex gap-2">
                    <button type="button" onClick={sendEmail} className="btn btn-primary flex-grow-1">Send via Email</button>
                    <button type="submit" className="btn btn-success flex-grow-1">Send via WhatsApp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {statusModal.show && (
        <div className="modal-backdrop show" style={{display: 'block'}}>
          <div className="modal show" style={{display: 'block'}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center py-4 py-md-5">
                  <div className="mb-3">
                    {statusModal.type === 'success' ? (
                      <i className="fas fa-check-circle text-success" style={{fontSize: '3rem'}}></i>
                    ) : (
                      <i className="fas fa-exclamation-circle text-danger" style={{fontSize: '3rem'}}></i>
                    )}
                  </div>
                  <p className="fs-5">{statusModal.message}</p>
                  <button type="button" className="btn btn-primary" onClick={() => setStatusModal({ show: false, type: '', message: '' })}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
