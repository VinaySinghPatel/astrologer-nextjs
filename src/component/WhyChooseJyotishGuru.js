import { FaStar, FaUsers, FaShieldAlt, FaHeadset, FaClock, FaGlobe, FaCheckCircle, FaAward, FaLock, FaVideo } from 'react-icons/fa';
import { GiCrystalBall, GiLotus } from 'react-icons/gi';
import styles from './WhyChooseJyotishGuru.module.css';

const WhyChooseJyotishGuru = () => {
  const features = [
    {
      icon: <FaUsers className={styles.featureIcon} />,
      title: "Expert Gurus",
      description: "Connect with verified and experienced spiritual guides who have dedicated their lives to Vedic wisdom and spiritual practices.",
      highlight: "500+ Certified Experts"
    },
    {
      icon: <FaShieldAlt className={styles.featureIcon} />,
      title: "Secure Platform",
      description: "Your privacy and data security is our top priority with enterprise-grade encryption and secure payment processing.",
      highlight: "100% Secure"
    },
    {
      icon: <FaHeadset className={styles.featureIcon} />,
      title: "24/7 Support",
      description: "Round the clock customer support for all your queries with dedicated spiritual guidance specialists.",
      highlight: "Always Available"
    },
    {
      icon: <FaClock className={styles.featureIcon} />,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, any time of day with our global network of spiritual advisors.",
      highlight: "Your Time, Your Way"
    },
    {
      icon: <FaGlobe className={styles.featureIcon} />,
      title: "Global Access",
      description: "Access spiritual guidance from anywhere in the world with our multilingual platform and diverse guru network.",
      highlight: "Worldwide Reach"
    },
    {
      icon: <GiCrystalBall className={styles.featureIcon} />,
      title: "Multiple Services",
      description: "Comprehensive spiritual services including Vedic astrology, palmistry, numerology, and personalized consultations.",
      highlight: "All-in-One Platform"
    },
    {
      icon: <FaCheckCircle className={styles.featureIcon} />,
      title: "Verified Results",
      description: "Track your spiritual journey with detailed reports and verified outcomes from our expert consultations.",
      highlight: "Proven Results"
    },
    {
      icon: <FaAward className={styles.featureIcon} />,
      title: "Quality Assurance",
      description: "Every guru undergoes rigorous verification and maintains high standards of spiritual guidance excellence.",
      highlight: "Premium Quality"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Users" },
    { number: "500+", label: "Expert Gurus" },
    { number: "100,000+", label: "Sessions Completed" },
    { number: "4.9", label: "User Rating" }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <GiLotus className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Why Choose JyotishGuru?</h2>
          <p className={styles.sectionSubtitle}>Discover the unique features that make us the preferred choice for spiritual guidance</p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.featureIconContainer}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <div className={styles.featureHighlight}>{feature.highlight}</div>
            </div>
          ))}
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div className={styles.statItem} key={index}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.featuresCta}>
          <button className={styles.ctaButton}>Explore All Features</button>
          <p className={styles.ctaText}>Join thousands of users who trust JyotishGuru for authentic spiritual guidance</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseJyotishGuru; 