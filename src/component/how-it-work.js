import { FaUserPlus, FaCalendarAlt, FaVideo, FaStar } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';
import styles from './HowItWork.module.css';

const HowItWork = () => {
  const steps = [
    {
      icon: <FaUserPlus className={styles.stepIcon} />,
      title: "Create Profile",
      description: "Sign up and create your personalized profile with basic details and preferences"
    },
    {
      icon: <FaCalendarAlt className={styles.stepIcon} />,
      title: "Book Session",
      description: "Choose your preferred guru and schedule a consultation time that works for you"
    },
    {
      icon: <FaVideo className={styles.stepIcon} />,
      title: "Connect Live",
      description: "Join the video call and get your questions answered directly by expert gurus"
    },
    {
      icon: <FaStar className={styles.stepIcon} />,
      title: "Rate & Review",
      description: "Share your experience and help others find the right guru for their needs"
    }
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <GiCrystalBall className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>Get started with JyotishGuru in just 4 simple steps</p>
        </div>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div className={styles.stepCard} key={index}>
             
              <div className={styles.stepIconContainer}>
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>Get Started Now</button>
          <p className={styles.ctaText}>Join thousands of users who have found clarity through our platform</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork; 