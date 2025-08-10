import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import styles from './OurBlogs.module.css';

const OurBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Vedic Astrology: A Beginner's Guide",
      excerpt: "Learn the fundamentals of Vedic astrology, including the 12 zodiac signs, planetary influences, and how they shape your daily life and destiny. Perfect for newcomers to this ancient wisdom.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      author: "Dr. Rajesh Sharma",
      date: "March 15, 2024",
      category: "Vedic Astrology"
    },
    {
      id: 2,
      title: "The Power of Planetary Transits in 2024",
      excerpt: "Discover how major planetary movements in 2024 will impact different zodiac signs and learn practical strategies to prepare for these cosmic changes and maximize opportunities.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      author: "Acharya Priya Patel",
      date: "March 12, 2024",
      category: "Planetary Influences"
    },
    {
      id: 3,
      title: "Numerology: Unlocking Your Life Path Number",
      excerpt: "Explore the fascinating world of numerology and learn how to calculate and interpret your life path number for better self-understanding and life direction.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      author: "Shrimati Meera Devi",
      date: "March 10, 2024",
      category: "Numerology"
    },
    {
      id: 4,
      title: "Remedial Solutions for Planetary Doshas",
      excerpt: "Learn about common planetary doshas and effective remedial solutions including gemstones, mantras, lifestyle changes, and spiritual practices for balance.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      author: "Pandit Arun Deshpande",
      date: "March 8, 2024",
      category: "Remedies"
    }
  ];

  return (
    <section className={styles.blogsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Insights & Articles</h2>
          <p className={styles.sectionSubtitle}>Stay updated with the latest knowledge from our expert gurus</p>
        </div>
        
        <div className={styles.blogsGrid}>
          {blogs.map((blog) => (
            <article className={styles.blogCard} key={blog.id}>
              <div className={styles.blogImage}>
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  width={400}
                  height={250}
                />
                <div className={styles.blogCategory}>{blog.category}</div>
              </div>
              
              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                
                <div className={styles.blogMeta}>
                  <div className={styles.metaItem}>
                    <FaUser className={styles.metaIcon} />
                    <span>{blog.author}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FaCalendarAlt className={styles.metaIcon} />
                    <span>{blog.date}</span>
                  </div>
                </div>
                
                <button className={styles.readMoreBtn}>
                  Read More <FaArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className={styles.blogsCta}>
          <button className={styles.ctaButton}>View All Articles</button>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs; 