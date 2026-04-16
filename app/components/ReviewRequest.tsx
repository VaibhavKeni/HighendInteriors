'use client'

export default function ReviewRequest() {
  return (
    <section className="review-request-section py-4 py-md-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6" data-animation="animate__fadeInLeft">
            <div className="review-content">
              <h2 className="section-title mb-3">Share Your Experience</h2>
              <p className="section-text mb-3">
                Your feedback helps us improve and assists other clients in making informed decisions. We'd love to hear about your experience with HIGH END Interiors!
              </p>
              <ul className="review-benefits list-unstyled mb-4">
                <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Help others discover quality interior design</li>
                <li className="mb-2"><i className="fas fa-check-circle text-primary me-2\"></i>  Share your project transformation</li>
                <li className="mb-2"><i className="fas fa-check-circle text-primary me-2\"></i>  Support local business growth</li>
              </ul>
              <a 
                href="https://maps.app.goo.gl/YraiHXFWgaJHuPpS6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg"
              >
                <i className="fas fa-star me-2"></i>Write a Review on Google
              </a>
            </div>
          </div>
          <div className="col-lg-6" data-animation="animate__fadeInRight">
            <div className="review-stats">
              <div className="stat-box text-center mb-4">
                <div className="stat-number text-primary mb-2">5.0</div>
                <div className="stat-label">Average Rating</div>
                <div className="stars mb-2">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
              </div>
              <div className="stat-box text-center">
                <div className="stat-number text-primary mb-2">20+</div>
                <div className="stat-label">Happy Clients</div>
                <p className="text-muted small mt-2">Join our satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
