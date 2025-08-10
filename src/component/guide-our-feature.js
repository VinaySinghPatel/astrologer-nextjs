import { FaStar, FaUsers, FaShieldAlt, FaHeadset, FaClock, FaGlobe } from 'react-icons/fa';
import { GiCrystalBall, GiLotus } from 'react-icons/gi';

const GuideToOurFeature = () => {
  const features = [
    {
      icon: <FaUsers className="feature-icon" />,
      title: "Expert Gurus",
      description: "Connect with verified and experienced spiritual guides"
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Secure Platform",
      description: "Your privacy and data security is our top priority"
    },
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "24/7 Support",
      description: "Round the clock customer support for all your queries"
    },
    {
      icon: <FaClock className="feature-icon" />,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, any time of day"
    },
    {
      icon: <FaGlobe className="feature-icon" />,
      title: "Global Access",
      description: "Access spiritual guidance from anywhere in the world"
    },
    {
      icon: <GiCrystalBall className="feature-icon" />,
      title: "Multiple Services",
      description: "Vedic astrology, palmistry, numerology and more"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Users" },
    { number: "500+", label: "Expert Gurus" },
    { number: "50,000+", label: "Sessions Completed" },
    { number: "4.9", label: "User Rating" }
  ];

  return (
    <section className="features-section">
      <div className="container-custom">
        <div className="section-header">
          <h2>Why Choose JyotishGuru?</h2>
          <p>Discover the unique features that make us the preferred choice for spiritual guidance</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-cta">
          <button className="btn-primary-custom">Explore All Features</button>
          <p className="cta-text">Join thousands of users who trust JyotishGuru for authentic spiritual guidance</p>
        </div>
      </div>
    </section>
  );
};

export default GuideToOurFeature; 