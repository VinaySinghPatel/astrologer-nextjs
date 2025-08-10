import { FaStar, FaUsers, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import styles from './ProfessionalServiceCards.module.css';

const ProfessionalServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Vedic Astrology Consultation",
      description: "Comprehensive birth chart analysis with personalized predictions and remedies for life's challenges.",
      features: [
        "Detailed Horoscope Analysis",
        "Career & Financial Guidance",
        "Relationship Compatibility",
        "Remedial Solutions"
      ],
      rating: 4.9,
      clients: "2,500+",
      duration: "60-90 min",
      price: "₹2,500",
      popular: true,
      icon: "🔮"
    },
    {
      id: 2,
      title: "Numerology & Name Analysis",
      description: "Discover the hidden meanings behind numbers and names to unlock your true potential.",
      features: [
        "Name Numerology Analysis",
        "Lucky Numbers & Dates",
        "Business Name Selection",
        "Personal Year Forecast"
      ],
      rating: 4.8,
      clients: "1,800+",
      duration: "45-60 min",
      price: "₹1,800",
      popular: false,
      icon: "🔢"
    },
    {
      id: 3,
      title: "Palmistry & Life Reading",
      description: "Read the lines of your palm to understand your past, present, and future path.",
      features: [
        "Life Line Analysis",
        "Career & Success Lines",
        "Relationship Patterns",
        "Health Indicators"
      ],
      rating: 4.7,
      clients: "1,200+",
      duration: "40-50 min",
      price: "₹1,500",
      popular: false,
      icon: "✋"
    },
    {
      id: 4,
      title: "Vastu Shastra Consultation",
      description: "Optimize your living and working spaces for harmony, prosperity, and positive energy flow.",
      features: [
        "Home & Office Analysis",
        "Energy Flow Optimization",
        "Remedial Measures",
        "Feng Shui Integration"
      ],
      rating: 4.9,
      clients: "900+",
      duration: "90-120 min",
      price: "₹3,500",
      popular: true,
      icon: "🏠"
    },
    {
      id: 5,
      title: "Marriage Compatibility",
      description: "In-depth analysis of compatibility between partners for a harmonious and lasting relationship.",
      features: [
        "Kundli Matching",
        "Planetary Compatibility",
        "Mangal Dosha Analysis",
        "Marriage Timing"
      ],
      rating: 4.8,
      clients: "1,600+",
      duration: "75-90 min",
      price: "₹2,200",
      popular: false,
      icon: "💕"
    },
    {
      id: 6,
      title: "Business & Career Guidance",
      description: "Strategic insights for business success and career advancement based on astrological wisdom.",
      features: [
        "Career Path Analysis",
        "Business Timing",
        "Investment Guidance",
        "Success Strategies"
      ],
      rating: 4.9,
      clients: "1,300+",
      duration: "60-75 min",
      price: "₹2,800",
      popular: true,
      icon: "💼"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className={styles.starIcon} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className={styles.starIcon} />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className={styles.starIconEmpty} />);
    }
    
    return stars;
  };

  return (
    <div className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Professional Services</h2>
          <p className={styles.sectionSubtitle}>
            Discover our comprehensive range of spiritual and astrological services
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              {service.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              
              <div className={styles.cardHeader}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.serviceMeta}>
                  <div className={styles.rating}>
                    {renderStars(service.rating)}
                    <span className={styles.ratingText}>{service.rating}</span>
                  </div>
                  <div className={styles.clients}>
                    <FaUsers className={styles.metaIcon} />
                    {service.clients}
                  </div>
                </div>
              </div>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.serviceFeatures}>
                {service.features.map((feature, index) => (
                  <div className={styles.featureItem} key={index}>
                    <FaCheckCircle className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.serviceDetails}>
                <div className={styles.detailItem}>
                  <FaClock className={styles.detailIcon} />
                  <span>{service.duration}</span>
                </div>
                <div className={styles.priceTag}>
                  <span className={styles.priceLabel}>Starting from</span>
                  <span className={styles.priceValue}>{service.price}</span>
                </div>
              </div>
              
              <button className={styles.bookButton}>
                Book Now
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServiceCards; 