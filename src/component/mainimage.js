import Image from 'next/image';
import { FaStar, FaPlay } from 'react-icons/fa';
import { GiCrystalBall, GiSpellBook, GiMoon } from 'react-icons/gi';

const Mainimage = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <Image 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="Jyotish Background"
          fill
          className="hero-bg-image"
          priority
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container-custom">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-icons">
              <GiCrystalBall className="floating-icon icon-1" />
              <GiSpellBook className="floating-icon icon-2" />
              <GiMoon className="floating-icon icon-3" />
            </div>
            
            <h1 className="hero-title">
              Discover Your Life's Path Through 
              <span className="accent-text"> Ancient Wisdom</span>
            </h1>
            
            <p className="hero-description">
              Experience the profound insights of Vedic astrology with our expert Jyotish gurus. 
              Get personalized readings, predictions, and guidance for your life's most important decisions.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Gurus</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Available</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary-custom hero-btn">
                Get Free Reading
              </button>
              <button className="btn-outline-custom hero-btn">
                <FaPlay className="play-icon" />
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-card">
              <div className="card-header">
                <h3>Today's Prediction</h3>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
              
              <div className="prediction-content">
                <p>"A favorable day for new beginnings. Jupiter's alignment brings opportunities in career and relationships."</p>
                
                <div className="guru-info">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                    alt="Guru"
                    width={50}
                    height={50}
                    className="guru-avatar"
                  />
                  <div>
                    <h5>Pandit Raj Kumar</h5>
                    <span>Expert Astrologer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainimage; 