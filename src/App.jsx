import AboutPage from "./Pages/AboutPage.jsx";
import Contact from './Pages/Contact.jsx';
import Programs from "./Pages/Programs.jsx";
import Home from './Pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;