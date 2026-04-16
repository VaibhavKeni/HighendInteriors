'use client'

import { useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Blog.css'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  author: string
  image: string
  readTime: number
}

// Simple Markdown parser
function parseMarkdown(text: string) {
  let html = text
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic text
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Line breaks
    .split('\n\n')
    .map(para => para.trim() ? `<p>${para}</p>` : '')
    .join('')
  
  return html
}

export default function BlogPage() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Interior Design Trends for 2024',
      excerpt: 'Discover the latest interior design trends that are transforming homes and offices in Mumbai.',
      content: `Interior design is constantly evolving, and 2024 brings exciting new trends that blend sustainability with style.

**1. Sustainable Materials**
Eco-friendly materials like reclaimed wood, bamboo, and recycled metals are becoming mainstream. These materials not only look beautiful but also reduce environmental impact.

**2. Bold Colors**
Gone are the days of neutral everything. Deep jewel tones, warm terracottas, and rich emerald greens are making a comeback in accent walls and furniture.

**3. Functional Minimalism**
Clean lines and clutter-free spaces remain popular, but with a focus on functionality. Every piece serves a purpose while maintaining aesthetic appeal.

**4. Biophilic Design**
Bringing nature indoors through plants, natural light, and organic shapes creates spaces that promote wellness and reduce stress.

**5. Vintage & Retro**
Mid-century modern and vintage pieces are being mixed with contemporary designs for a unique, personalized look.

**6. Maximalist Patterns**
Bold geometric patterns, florals, and mixed prints are being used confidently in textiles and wallpapers.

**7. Smart Home Integration**
Technology seamlessly integrated into design with smart lighting, temperature control, and entertainment systems.

**8. Curved Furniture**
Soft, rounded edges on furniture and architectural elements create a more inviting and comfortable atmosphere.

**9. Warm Metallics**
Gold, brass, and copper accents are replacing cold silvers for a warmer, more luxurious feel.

**10. Personalized Spaces**
Custom-designed elements that reflect individual personality and lifestyle are becoming essential.

At HIGH END Interiors, we incorporate these trends thoughtfully into our designs, ensuring your space is both contemporary and timeless.`,
      category: 'Design Trends',
      date: '2024-01-15',
      author: 'Gautam Vernekar',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      readTime: 8
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette for Your Home',
      excerpt: 'A comprehensive guide to selecting colors that complement your space and reflect your personality.',
      content: `Choosing the right color palette is one of the most important decisions in interior design. It sets the mood, influences perception of space, and reflects your personal style.

**Understanding Color Psychology**
Colors have psychological effects on our mood and perception:
- Blues and greens create calm and relaxation
- Warm tones like oranges and reds energize and stimulate
- Neutrals provide balance and sophistication
- Purples evoke creativity and luxury

**Step-by-Step Guide to Choosing Your Palette**

**1. Assess Your Space** Consider the room's natural light, size, and purpose. North-facing rooms benefit from warm colors, while south-facing rooms can handle cooler tones.

**2. Start with a Base Color** Choose a neutral base (white, beige, gray) that will cover 60% of your space.

**3. Add Secondary Colors** Select 2-3 colors that complement your base. These should cover about 30% of the space.

**4. Include Accent Colors** Use bold colors sparingly (10%) for visual interest through accessories, artwork, or accent walls.

**5. Test Before Committing** Always get paint samples and test them in your space at different times of day.

**6. Consider Lighting** Artificial and natural lighting dramatically affects how colors appear. Test your palette under both conditions.

**Popular Color Combinations for 2024**
- Warm White + Sage Green + Terracotta<br>
- Soft Gray + Navy Blue + Gold Accents<br>
- Cream + Emerald Green + Brass<br>
- Warm Beige + Burnt Orange + Chocolate Brown

**Pro Tips**
- Use the 60-30-10 rule for balanced color distribution<br>
- Create mood boards with fabric, paint, and material samples<br>
- Don't be afraid to use bold colors in small doses<br>
- Consider the colors of your existing furniture and artwork

Our design team at HIGH END Interiors specializes in creating harmonious color palettes that transform your space into a reflection of your personality.`,
      category: 'Color Guide',
      date: '2024-01-10',
      author: 'Gautam Vernekar',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      readTime: 7
    },
    {
      id: 3,
      title: 'Maximizing Small Spaces: Smart Interior Solutions',
      excerpt: 'Learn practical tips and tricks to make the most of your small apartment or room.',
      content: `Living in a small space doesn't mean compromising on style or comfort. With smart design choices and creative solutions, you can maximize every square inch.

**Multi-Functional Furniture**
Invest in pieces that serve multiple purposes:<br>
- Ottomans with hidden storage<br>
- Sofa beds for guest rooms<br>
- Wall-mounted desks that fold away<br>
- Nesting tables that expand when needed<br>
- Bed frames with built-in drawers<br>

**Vertical Space Utilization**
When floor space is limited, go vertical:<br>
- Install floor-to-ceiling shelving<br>
- Use wall-mounted storage units<br>
- Hang artwork and mirrors at varying heights<br>
- Install floating shelves for books and decor<br>
- Use tall, narrow furniture pieces

**Lighting Strategies**
Proper lighting makes spaces feel larger:<br>
- Use multiple light sources instead of one overhead light<br>
- Install recessed lighting to save space<br>
- Use mirrors to reflect light and create illusion of space<br>
- Choose light-colored lampshades<br>
- Maximize natural light with sheer curtains

**Color and Pattern Tips**
- Use light colors on walls to create openness<br>
- Limit patterns to one accent wall or small areas<br>
- Use monochromatic color schemes for continuity<br>
- Avoid dark colors that make spaces feel smaller

**Smart Storage Solutions**
- Under-bed storage containers<br>
- Over-door organizers<br>
- Corner shelving units<br>
- Wall-mounted cabinets<br>
- Decorative baskets for hidden storage

**Decluttering Essentials**
- Keep only items you truly use and love<br>
- Use storage solutions to hide clutter<br>
- Adopt a minimalist approach<br>
- Regularly purge unnecessary items

**Layout Optimization**
- Arrange furniture to create flow<br>
- Avoid blocking windows and doors<br>
- Use area rugs to define spaces<br>
- Keep pathways clear<br>
- Position furniture away from walls for coziness

At HIGH END Interiors, we specialize in transforming small spaces into functional, beautiful homes that feel spacious and welcoming.`,
      category: 'Space Planning',
      date: '2024-01-05',
      author: 'Gautam Vernekar',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      readTime: 9
    },
    {
      id: 4,
      title: 'Luxury Interior Design on a Budget',
      excerpt: 'Achieve a high-end look without breaking the bank with these affordable design strategies.',
      content: `Creating a luxurious interior doesn't require a luxury budget. With strategic choices and smart shopping, you can achieve an upscale aesthetic affordably.

**Smart Shopping Strategies**

• Mix High and Low - Invest in quality statement pieces and balance with affordable items. Splurge on sofas, bed frames, and dining tables, but save on accessories, throw pillows, and wall decor.

• Shop Sales and Discounts - Wait for seasonal sales, use coupon codes and loyalty programs, check outlet stores, and browse online marketplaces for deals.

• DIY and Upcycling - Paint old furniture for a fresh look, reupholster chairs with new fabric, create custom artwork, and refinish wooden pieces.

**Budget-Friendly Luxury Elements**

• Lighting - Quality lighting instantly elevates a space. Invest in statement light fixtures, use layered lighting for ambiance, and add dimmer switches for mood control.

• Mirrors - Create illusion of space and light with large statement mirrors, mirrored furniture pieces, and decorative mirror arrangements.

• Textiles - High-quality fabrics make a difference. Invest in good quality curtains, add plush throw pillows, and use area rugs to define spaces.

• Artwork - Print affordable art from online platforms, frame personal photographs, create gallery walls, and use removable wallpaper for accent walls.

• Plants - Bring life to your space with large statement plants, hanging planters, and shelf plants for greenery.

• Hardware and Fixtures - Small details matter. Upgrade cabinet handles, replace light switch covers, add decorative hooks, and install new faucets.

**Budget Allocation Guide**

• 40% on furniture

• 30% on flooring and wall treatments

• 20% on lighting and fixtures

• 10% on accessories and decor

**Where to Shop**

• IKEA for affordable, stylish basics

• Wayfair for variety and deals

• Amazon for accessories

• Local thrift stores for unique finds

• Online marketplaces for secondhand furniture

**Pro Tips**

• Plan your design before shopping

• Create a mood board

• Stick to a color palette

• Invest in timeless pieces

• Avoid trendy items that date quickly

HIGH END Interiors can help you create a luxury look within your budget through smart design choices and strategic planning.`,
      category: 'Budget Tips',
      date: '2024-01-01',
      author: 'Gautam Vernekar',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      readTime: 10
    }
  ]

  return (
    <div className="blog-page">
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      <div className="blog-header">
        <div className="header-content">
          <h1>Interior Design Blog</h1>
          <p>Tips, trends, and inspiration for your next project</p>
        </div>
      </div>

      <section className="blog-section">
        <div className="container">
          {selectedPost ? (
            <div className="blog-post-detail">
              <button 
                className="btn btn-outline-primary mb-4"
                onClick={() => setSelectedPost(null)}
              >
                <i className="fas fa-arrow-left me-2"></i>Back to Blog
              </button>
              
              <article className="post-detail">
                <img src={selectedPost.image} alt={selectedPost.title} className="post-image mb-4" />
                
                <div className="post-meta mb-3">
                  <span className="badge bg-primary me-2">{selectedPost.category}</span>
                  <span className="text-muted me-3">
                    <i className="fas fa-calendar me-1"></i>
                    {new Date(selectedPost.date).toLocaleDateString()}
                  </span>
                  <span className="text-muted me-3">
                    <i className="fas fa-user me-1"></i>
                    {selectedPost.author}
                  </span>
                  <span className="text-muted">
                    <i className="fas fa-clock me-1"></i>
                    {selectedPost.readTime} min read
                  </span>
                </div>

                <h1 className="post-title mb-4">{selectedPost.title}</h1>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: parseMarkdown(selectedPost.content) }} />
                <div className="post-footer">
                  <p>For more information about our interior design services, please visit our <a href="/services">services page</a> or <a href="/contact">contact us</a> today.</p>
                </div>

                <div className="post-cta mt-5 p-4 bg-light rounded">
                  <h4>Ready to Transform Your Space?</h4>
                  <p>Let HIGH END Interiors bring your design vision to life.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowQuoteModal(true)}
                  >
                    Get a Free Consultation
                  </button>
                </div>
              </article>
            </div>
          ) : (
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <span className="category-badge">{post.category}</span>
                  </div>
                  
                  <div className="blog-content">
                    <div className="post-meta-small mb-2">
                      <span className="text-muted small">
                        <i className="fas fa-calendar me-1"></i>
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="text-muted small ms-3">
                        <i className="fas fa-clock me-1"></i>
                        {post.readTime} min
                      </span>
                    </div>
                    
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read More <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
