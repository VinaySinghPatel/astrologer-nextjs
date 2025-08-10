import Navbar from '../component/Navbar';
import Mainimage from '../component/mainimage';
import Secondpart from '../component/second-part';
import FeaturedGuruCards from '../component/featured-guru-cards';
import HowItWork from '../component/how-it-work';
import Testimonials from '../component/testimonials';
import OurBlogs from '../component/our-blogs';
import Footer from '../component/footer';
import ClearDoubt from '../component/clearDoubt';
import LiveGuruCards from '../component/live-guru-cards';
import WhyChooseJyotishGuru from '../component/WhyChooseJyotishGuru';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Secondpart />
      <Mainimage />
      <ClearDoubt/>
      <LiveGuruCards/>
      <FeaturedGuruCards />
      <HowItWork />
      <Testimonials />
      <OurBlogs />
      <WhyChooseJyotishGuru />
      <Footer />
    </div>
  );
}
