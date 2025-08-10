import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3>Stay Connected</h3>
              <p>Subscribe to our newsletter for spiritual insights, astrological updates, and exclusive offers from our verified gurus.</p>
            </div>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
              />
              <button className={styles.subscribeBtn}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            {/* Company Info */}
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>
                <GiLotus className={styles.logoIcon} />
                <span className={styles.logoText}>JyotishGuru</span>
              </div>
              <p className={styles.footerDescription}>
                Connecting seekers with authentic spiritual guidance through our platform of verified gurus and astrologers. Discover your path to enlightenment.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h4>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gurus">Our Gurus</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className={styles.footerColumn}>
              <h4>Our Services</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#vedic-astrology">Vedic Astrology</a></li>
                <li><a href="#palmistry">Palmistry</a></li>
                <li><a href="#numerology">Numerology</a></li>
                <li><a href="#vastu">Vastu Shastra</a></li>
                <li><a href="#remedies">Planetary Remedies</a></li>
                <li><a href="#compatibility">Marriage Compatibility</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <h4>Contact Us</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>info@jyotishguru.com</span>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>+91 98765 43210</span>
                </div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
              <div className={styles.contactButtons}>
                <a href="/contact" className={styles.contactBtn}>
                  Get Consultation
                </a>
                <a href="/support" className={styles.contactBtn}>
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <span>&copy; {currentYear} JyotishGuru. Made with</span>
              <FaHeart className={styles.heartIcon} />
              <span>in India. All rights reserved.</span>
            </div>
            <div className={styles.footerBottomLinks}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/refund">Refund Policy</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 