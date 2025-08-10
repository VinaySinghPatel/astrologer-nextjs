import Image from 'next/image';
import './Secondpart.css';
const Secondpart = () => {
  const gurus = [
    {
      id: 1,
      name: "Pandit Raj Kumar Shastri",
      specialty: "Vedic Astrology",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz4r1rJKwGXllk40bUecSwm73MKA2NYLg5NZkWoprTsOwgK1gHU8LCBg&s"
    },
    {
      id: 3,
      name: "Guru Vikash Pandit",
      specialty: "Palm Reading",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNMmoIdzf8Ty2h57vv32FiLcD7C4hD9qJVFBR8-HbcrHTe7zVubDaOP4&s"
    },
    {
      id: 4,
      name: "Pandit Anand Joshi",
      specialty: "Tarot Reading",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Guru Mahesh Tripathi",
      specialty: "Gemology & Vastu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="gurus-section section-padding bg-light-gray">
      <div className="container-custom">
        <div data-aos="fade-up">
          <h2 className="section-title">Our Expert Jyotish Gurus</h2>
          <p className="section-subtitle">
            Connect with experienced and certified astrologers who guide you through life's journey
          </p>
        </div>
        <div className="guru-gallery">
          {gurus.map((guru) => (
            <div className="guru-item" key={guru.id}>
              <div className="guru-photo-container">
                <Image 
                  src={guru.image} 
                  alt={guru.name} 
                  width={200}
                  height={200}
                  className="guru-photo"
                />
              </div>
              <h3 className="guru-name">{guru.name}</h3>
              <p className="guru-specialty">{guru.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secondpart; 