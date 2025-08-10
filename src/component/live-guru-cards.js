'use client';

import Image from 'next/image';
import { FaStar, FaVideo, FaClock, FaUser, FaCircle } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';
import styles from './LiveGuruCards.module.css';

const LiveGuruCards = () => {
  const liveGurus = [
    {
      id: 1,
      name: "Pandit Raj Kumar",
      specialty: "Vedic Astrology",
      experience: "15+ Years",
      rating: 4.9,
      reviews: 2340,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      price: "₹50/min",
      languages: ["Hindi", "English"],
      isOnline: true,
      nextAvailable: "15 mins"
    },
    {
      id: 2,
      name: "Acharya Priya Sharma",
      specialty: "Numerology Expert",
      experience: "12+ Years",
      rating: 4.8,
      reviews: 1890,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      price: "₹45/min",
      languages: ["Hindi", "English", "Bengali"],
      isOnline: true,
      nextAvailable: "10 mins"
    },
    {
      id: 3,
      name: "Guru Vikash Pandit",
      specialty: "Palm Reading",
      experience: "20+ Years",
      rating: 4.9,
      reviews: 3120,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      price: "₹60/min",
      languages: ["Hindi", "English", "Marathi"],
      isOnline: true,
      nextAvailable: "25 mins"
    },
    {
      id: 4,
      name: "Pandit Anand Joshi",
      specialty: "Tarot Reading",
      experience: "8+ Years",
      rating: 4.7,
      reviews: 1560,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      price: "₹40/min",
      languages: ["Hindi", "English"],
      isOnline: true,
      nextAvailable: "5 mins"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={`${styles.starIcon} ${i < Math.floor(rating) ? styles.starFilled : styles.starEmpty}`} 
      />
    ));
  };

  return (
    <section className={styles.liveGuruSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <GiCrystalBall className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Live Gurus Available Now</h2>
          <p className={styles.sectionSubtitle}>
            Connect with spiritual guides who are currently online and ready to help
          </p>
        </div>

        <div className={styles.guruGrid}>
          {liveGurus.map((guru) => (
            <div className={styles.guruCard} key={guru.id}>
              <div className={styles.cardHeader}>
                <div className={styles.onlineIndicator}>
                  <FaCircle className={styles.onlineDot} />
                  <span className={styles.onlineText}>LIVE NOW</span>
                </div>
                <div className={styles.priceTag}>
                  {guru.price}
                </div>
              </div>

              <div className={styles.guruInfo}>
                <div className={styles.guruImage}>
                  <Image 
                    src={guru.image} 
                    alt={guru.name}
                    width={80}
                    height={80}
                    className={styles.profileImage}
                  />
                  <div className={styles.experienceBadge}>
                    {guru.experience}
                  </div>
                </div>
                
                <div className={styles.guruDetails}>
                  <h3 className={styles.guruName}>{guru.name}</h3>
                  <p className={styles.guruSpecialty}>{guru.specialty}</p>
                  
                  <div className={styles.ratingContainer}>
                    <div className={styles.stars}>
                      {renderStars(guru.rating)}
                    </div>
                    <span className={styles.ratingText}>{guru.rating}</span>
                    <span className={styles.reviewsText}>({guru.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.availability}>
                  <FaClock className={styles.clockIcon} />
                  <span>Next: {guru.nextAvailable}</span>
                </div>
                
                <div className={styles.languages}>
                  {guru.languages.slice(0, 2).map((lang, index) => (
                    <span key={index} className={styles.languageTag}>
                      {lang}
                    </span>
                  ))}
                  {guru.languages.length > 2 && (
                    <span className={styles.languageTag}>
                      +{guru.languages.length - 2}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button className={styles.bookButton}>
                  <FaUser className={styles.buttonIcon} />
                  Book Session
                </button>
                <button className={styles.chatButton}>
                  <FaVideo className={styles.buttonIcon} />
                  Quick Chat
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sectionFooter}>
          <button className={styles.viewAllButton}>
            View All Available Gurus
          </button>
          <p className={styles.footerText}>
            More than 50+ gurus available throughout the day
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveGuruCards;