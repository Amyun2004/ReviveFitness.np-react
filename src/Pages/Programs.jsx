
import ProgramGallery from '../components/ProgramPage/ProgramsGallery.jsx';
import ProgramBox from '../components/ProgramPage/ProgramBox.jsx';
import '../CSS/programs.css'
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import EmptySpace from '../components/common/EmptySpace.jsx';
import ProgramFirst from '../components/ProgramPage/Program-first.jsx';
import ProgramSecond from '../components/ProgramPage/Program-second.jsx';

export default function Programs() {
  return (
    
    <div>
      <EmptySpace/>
      <Navbar/>
      <ProgramFirst/>
      <ProgramSecond/>
      <Footer/>
    </div>
  );
}
