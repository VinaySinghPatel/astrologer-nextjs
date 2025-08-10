import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar, FaGem, FaCheckCircle, FaClock } from 'react-icons/fa';
import styles from './FeaturedGuruCards.module.css';

const FeaturedGuruCards = () => {
  // Simulate data from API
  const gurus = [
    {
      id: 1,
      name: "Pandit Rajesh Sharma",
      title: "Vedic Astrology Master",
      expertise: ["Career Guidance", "Marriage Compatibility", "Muhurta"],
      rating: 5,
      experience: "25+ Years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      isOnline: true,
      consultationFee: "₹1500",
      responseTime: "2-4 hours",
      verified: true
    },
    {
      id: 2,
      name: "Acharya Priya Patel",
      title: "Nadi Jyotish Specialist",
      expertise: ["Life Predictions", "Remedial Solutions", "Health Astrology"],
      rating: 4.5,
      experience: "18+ Years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      isOnline: true,
      consultationFee: "₹1200",
      responseTime: "1-3 hours",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Vikram Joshi",
      title: "Jyotish PhD & Researcher",
      expertise: ["Horoscope Analysis", "Vastu Consultation", "Planetary Remedies"],
      rating: 5,
      experience: "30+ Years",
      image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      isOnline: false,
      consultationFee: "₹2000",
      responseTime: "4-6 hours",
      verified: true
    },
    {
      id: 4,
      name: "Shrimati Meera Devi",
      title: "Palmistry & Numerology Expert",
      expertise: ["Numerology", "Palm Reading", "Relationship Guidance"],
      rating: 5,
      experience: "22+ Years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      isOnline: true,
      consultationFee: "₹1000",
      responseTime: "1-2 hours",
      verified: true
    },
    {
      id: 5,
      name: "Pandit Arun Deshpande",
      title: "Kundli & Dasha Specialist",
      expertise: ["Birth Chart Analysis", "Dasha Predictions", "Financial Astrology"],
      rating: 4.5,
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      isOnline: true,
      consultationFee: "₹1300",
      responseTime: "2-3 hours",
      verified: true
    }
  ];

  // Create duplicate cards for seamless infinite scrolling
  const guruCards = [...gurus, ...gurus];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className={`${styles.starIcon} ${styles.full}`} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className={`${styles.starIcon} ${styles.half}`} />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className={`${styles.starIcon} ${styles.empty}`} />);
    }
    
    return stars;
  };

  return (
    <div className={styles.guideContainer}>
      <div className={`${styles.vedicSymbol} ${styles.symbol1}`}>☥</div>
      <div className={`${styles.vedicSymbol} ${styles.symbol2}`}>ॐ</div>
      
      <div className={styles.carouselContainer}>
        <h2 className={styles.carouselTitle}>Our Most Celebrated Gurus</h2>
        <div className={styles.carousel}>
          {guruCards.map((guru, index) => (
            <div className={styles.guruCard} key={`${guru.id}-${index}`}>
              {/* Professional Badge */}
              {guru.verified && (
                <div className={styles.professionalBadge}>
                  <FaCheckCircle style={{ marginRight: '6px' }} />
                  Verified
                </div>
              )}
              
              {/* Status Indicator */}
              <div className={`${styles.statusIndicator} ${guru.isOnline ? styles.online : styles.offline}`}></div>
              
              <div className={styles.guruImage}>
                <Image 
                  src={guru.image} 
                  alt={guru.name}
                  width={200}
                  height={200}
                />
              </div>
              
              <h3 className={styles.guruName}>{guru.name}</h3>
              <p className={styles.guruTitle}>{guru.title}</p>
              
              <div className={styles.expertiseContainer}>
                {guru.expertise.map((skill, idx) => (
                  <span className={styles.expertiseTag} key={idx}>{skill}</span>
                ))}
              </div>
              
              <div className={styles.guruRating}>
                {renderStars(guru.rating)}
              </div>
              
              <div className={styles.guruExperience}>
                <FaGem className={styles.experienceIcon} /> {guru.experience} of Experience
              </div>
              
              {/* Professional Info */}
              <div className={styles.professionalInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Consultation Fee:</span>
                  <span className={styles.infoValue}>{guru.consultationFee}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Response Time:</span>
                  <span className={styles.infoValue}>
                    <FaClock style={{ marginRight: '4px' }} />
                    {guru.responseTime}
                  </span>
                </div>
              </div>
              
              <button className={styles.consultBtn}>
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGuruCards; 