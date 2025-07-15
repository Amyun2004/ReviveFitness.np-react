
import ProgramGallery from '../components/ProgramPage/ProgramsProvided.jsx';
import '../CSS/programs.css'
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import EmptySpace from '../components/common/EmptySpace.jsx';
import ProgramPricingSection from '../components/ProgramPage/PricingSection.jsx';

export default function Programs() {
  return (
    
    <div>
      <EmptySpace/>
      <Navbar/>
      <ProgramGallery/>
      <ProgramPricingSection/>
      <Footer/>
    </div>
  );
}
