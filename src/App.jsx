import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './Pages/Contact';
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
