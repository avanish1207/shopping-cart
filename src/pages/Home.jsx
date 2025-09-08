import './Home.css'
import { useNavigate } from 'react-router'

function Home() {
    const navigate=useNavigate();
    const returnHome=()=>{
        navigate('/');
    };
    const browseProducts=()=>{
        navigate('/shop');
    };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="brand">ShopEasy</span></h1>
          <p className="hero-subtitle">
            Your one-stop destination for amazing products at unbeatable prices
          </p>
          <button className="cta-button" onClick={browseProducts}>Start Shopping</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Our Shopping Cart?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3>Easy Cart Management</h3>
            <p>Add, remove, and modify items with simple click controls. Your cart updates in real-time as you shop.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Checkout</h3>
            <p>Safe and secure payment processing with multiple payment options for your convenience.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Shop seamlessly on any device. Our responsive design works perfectly on phones, tablets, and desktops.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Built with modern React technology for instant page loads and smooth user experience.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Save for Later</h3>
            <p>Not ready to buy? Save items to your cart and come back anytime to complete your purchase.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Smart Recommendations</h3>
            <p>Discover new products based on your shopping preferences and browsing history.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Browse Products</h3>
            <p>Explore our curated collection of high-quality products from trusted brands.</p>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>Add to Cart</h3>
            <p>Select quantities and add your favorite items to your shopping cart with one click.</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Review & Checkout</h3>
            <p>Review your selections, update quantities if needed, and proceed to secure checkout.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat">
            <h3>10k+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Products Available</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat">
            <h3>99.9%</h3>
            <p>Uptime Guarantee</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="final-cta">
        <h2>Ready to Start Shopping?</h2>
        <p>Join thousands of satisfied customers and experience the future of online shopping.</p>
        <div className="cta-buttons">
          <button className="cta-button primary" onClick={browseProducts}>Browse Products</button>
          <button className="cta-button secondary" onClick={returnHome}>Learn More</button>
        </div>
      </section>
    </div>
  )
}

export default Home