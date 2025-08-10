import { FaQuestionCircle, FaArrowRight, FaStar } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';

const ClearDoubt = () => {
  const commonQuestions = [
    "How accurate are the astrological predictions?",
    "What information do I need to provide for a consultation?",
    "How long does a typical session last?",
    "Can I get remedies for my problems?",
    "Is online consultation as effective as in-person?",
    "How do I choose the right guru for my needs?"
  ];

  const benefits = [
    {
      icon: <FaStar className="benefit-icon" />,
      title: "Expert Guidance",
      description: "Get advice from verified and experienced spiritual guides"
    },
    {
      icon: <GiCrystalBall className="benefit-icon" />,
      title: "Personalized Solutions",
      description: "Receive customized remedies and solutions for your specific situation"
    },
    {
      icon: <FaQuestionCircle className="benefit-icon" />,
      title: "Clear Answers",
      description: "Find clarity on your life's most important questions"
    }
  ];

  return (
    <section className="clear-doubt-section">
      <div className="container-custom">
        <div className="section-header">
          <h2>Still Have Doubts?</h2>
          <p>Get all your questions answered and find the clarity you seek</p>
        </div>

        <div className="doubt-content">
          <div className="doubt-left">
            <h3>Common Questions</h3>
            <div className="questions-list">
              {commonQuestions.map((question, index) => (
                <div className="question-item" key={index}>
                  <FaQuestionCircle className="question-icon" />
                  <span>{question}</span>
                  <FaArrowRight className="arrow-icon" />
                </div>
              ))}
            </div>
            
            <div className="doubt-cta">
              <button className="btn-primary-custom">Ask Your Question</button>
              <p className="cta-text">Our experts are here to help you 24/7</p>
            </div>
          </div>

          <div className="doubt-right">
            <h3>Why Choose JyotishGuru?</h3>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <div className="benefit-icon-container">
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-number">10,000+</span>
                <span className="trust-label">Happy Users</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">4.9/5</span>
                <span className="trust-label">User Rating</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">500+</span>
                <span className="trust-label">Expert Gurus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="final-cta">
          <h3>Ready to Find Your Answers?</h3>
          <p>Join thousands of users who have found clarity and guidance through JyotishGuru</p>
          <div className="cta-buttons">
            <button className="btn-primary-custom">Start Consultation</button>
            <button className="btn-secondary-custom">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearDoubt; 