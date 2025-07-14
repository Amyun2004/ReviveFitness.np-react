import '../CSS/about.css'; 
import EmptySpace from '../components/common/EmptySpace';
import Navbar from '../components/common/Navbar';
import AboutSection from '../components/AboutPage/AboutSection';
import TrainerSection from '../components/AboutPage/TrainerSection';
import LocationSection from '../components/AboutPage/LocationSection';
import Footer from '../components/common/Footer';

export default function AboutPage() {
  return (
    <>
      <EmptySpace />
      <Navbar />
      <AboutSection />
      <TrainerSection />
      <LocationSection />
      <Footer />
    </>
  );
}
