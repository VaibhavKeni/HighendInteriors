'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Reviews.css'

interface Review {
  name: string
  avatar: string
  rating: number
  text: string
  date: string
  url: string
}

interface ReviewsData {
  rating: number
  total: number
  reviews: Review[]
  fetchedAt: string
}

export default function Reviews() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [data, setData] = useState<ReviewsData | null>(null)
  const [visibleCount, setVisibleCount] = useState(9)

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) setTimeout(() => spinner.classList.remove('show'), 1000)

    fetch('/reviews.json')
      .then(r => r.json())
      .then(setData)
      .catch(console.error)
  }, [])

  const stats = [
    { label: 'Happy Clients', value: '100+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Average Rating', value: '5/5' },
    { label: 'Years Experience', value: '10+' },
  ]

  return (
    <div className="reviews-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* <div className="reviews-header">
        <div className="header-content">
          <h1>Client Reviews & Testimonials</h1>
          <p>See what our satisfied clients have to say about us</p>
        </div>
      </div> */}

      {/* About Reviews Section */}
      {/* <section className="about-reviews-section">
        <div className="container">
          <div className="about-reviews-content">
            <h2>Why Our Clients Love Us</h2>
            <p>At HIGH END Interiors, we take pride in delivering exceptional interior design services that exceed our clients' expectations. With over 15 years of experience in the industry, we have successfully completed more than 500 projects across Mumbai, transforming ordinary spaces into extraordinary living experiences.</p>
            <p>Our commitment to quality, innovation, and customer satisfaction has earned us a stellar reputation in the interior design industry. We believe in creating spaces that not only look beautiful but also function perfectly for our clients' lifestyle and needs.</p>
            <p>Every project we undertake is a testament to our dedication to excellence. From the initial consultation to the final handover, we maintain transparent communication and ensure that our clients are involved in every decision-making process. Our team of expert designers and skilled craftsmen work collaboratively to bring your vision to life with precision and creativity.</p>
            <div className="review-highlights">
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>Premium Quality Materials & Craftsmanship</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>Personalized Design Solutions Tailored to Your Needs</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>On-Time Project Delivery with Transparent Communication</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>Comprehensive Warranty & After-Sales Support</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="reviews-header">
        <div className="header-content">
          <h1>Client Reviews & Testimonials</h1>
          <p>See what our satisfied clients have to say about us</p>
        </div>
      </div>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Rating Banner */}
      <section className="google-banner-section">
        <div className="container">
          <div className="google-banner">
            <div className="google-banner-left">
              <i className="fab fa-google google-g-icon"></i>
              <div>
                <div className="google-banner-rating">{data?.rating ?? '4.8'}</div>
                <div className="google-banner-stars">
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
                <div className="google-banner-count">{data?.total ?? '450'}+ Google Reviews</div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/YraiHXFWgaJHuPpS6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-google me-2"></i>Write a Review on Google for HIGH END Interiors
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-grid-section">
        <div className="container">
          <h2 className="section-title mb-2">What Our Clients Say</h2>
          <p className="section-subtitle">Real reviews from our happy clients on Google</p>

          {!data ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          ) : (
            <>
              <div className="reviews-grid">
                {data.reviews.slice(0, visibleCount).map((review, i) => (
                  <div key={i} className="review-card">
                    <div className="review-card-header">
                      {review.avatar
                        ? <img src={review.avatar} alt={review.name} className="reviewer-avatar-img" referrerPolicy="no-referrer" />
                        : <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                      }
                      <div>
                        <div className="reviewer-name">{review.name}</div>
                        <div className="reviewer-date">{review.date}</div>
                      </div>
                      <i className="fab fa-google ms-auto review-google-icon"></i>
                    </div>
                    <div className="review-stars">
                      {[...Array(5)].map((_, s) => (
                        <i key={s} className={`fas fa-star ${s < review.rating ? 'filled' : ''}`}></i>
                      ))}
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                ))}
              </div>

              {visibleCount < data.reviews.length && (
                <div className="text-center mt-4">
                  <button className="btn btn-outline-primary load-more-btn" onClick={() => setVisibleCount(data.reviews.length)}>
                    Load All {data.reviews.length} Reviews
                  </button>
                </div>
              )}
            </>
          )}

          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/YraiHXFWgaJHuPpS6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-google me-2"></i>View All Reviews on Google for HIGH END Interiors
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
