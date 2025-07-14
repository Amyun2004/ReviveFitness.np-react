import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Intro from './components/HomePage/intro';
import AboutSection from './components/AboutPage/AboutSection';
import TrainerSection from './components/AboutPage/TrainerSection';
import ContactForm from './components/ContactPage/ContactForm';
import LocationSection from './components/AboutPage/LocationSection';
import PricingSection from './components/ProgramPage/PricingSection';
import ProgramGallery from './components/ProgramPage/ProgramsGallery';
import EmptySpace from './components/common/EmptySpace';
import ProgramFirst from './components/ProgramPage/Program-first';
import ProgramSecond from './components/ProgramPage/Program-second';
import ContactPage from './Pages/Contact';
import ContactSecond from './components/ContactPage/Contact-second';
import Programs from './Pages/Programs';
import AboutPage from './Pages/AboutPage';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home/>
            
          </>
        } />
        <Route path="/about" element={
            <>
            <AboutPage/>
            </>}
         />
        <Route path="/programs" element={
          <>
            <Programs/>
            
          </>
        } />
        <Route path="/contact" element={
            <>
            <ContactPage/>
            </>
            } />
      </Routes>
    </Router>
  );
}

export default App;
