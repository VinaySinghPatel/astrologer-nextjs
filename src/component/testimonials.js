import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "JyotishGuru completely transformed my perspective on career decisions. The guru's insights about my professional path were incredibly accurate. I've since made strategic moves that have accelerated my growth significantly."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I was facing major business challenges and felt stuck. The consultation revealed timing issues I hadn't considered. Following the guru's advice, I restructured my approach and saw immediate improvements in my business performance."
    },
    {
      id: 3,
      name: "Meera Patel",
      role: "Marketing Consultant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The relationship guidance I received was life-changing. The guru helped me understand compatibility patterns I never noticed before. Now I have a much clearer understanding of what I need in a partner."
    },
    
  ];

  const stats = [
    { number: "50,000+", label: "Happy Users" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "200+", label: "Expert Gurus" },
    { number: "24/7", label: "Support Available" }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <FaStar key={i} className={styles.starIcon} />
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Users Say</h2>
          <p className={styles.sectionSubtitle}>Real experiences from people who found clarity through JyotishGuru</p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div className={styles.testimonialCard} key={testimonial.id}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialRating}>
                  {renderStars(testimonial.rating)}
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.testimonialsStats}>
          {stats.map((stat, index) => (
            <div className={styles.statItem} key={index}>
              <span className={styles.statNumber}>{stat.number}</span>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.testimonialsCta}>
          <button className={styles.ctaButton}>Read More Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 