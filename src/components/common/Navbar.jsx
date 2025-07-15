import { useState } from 'react';
import { useLocation,Link } from 'react-router-dom';
import logo from '../../assets/logo/RandHand.png';
import menuIcon from '../../assets/button_imgs/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import closeIcon from '../../assets/button_imgs/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import Signup from '../LoginPage/SignupReviveFitness';
import'../../CSS/Style.css';


export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  let location = useLocation();
  const [modalBackgroundPath, setModalBackgroundPath]  = useState(null);

  const openSignupModal = () => {
    setModalBackgroundPath(location.pathname
    );
    setShowSignup(true);
  };
  return (
    <>
      <header>
        <nav id="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="ReviveFitness.np" />
          </Link>
          <ul className="navbar">
            <li><Link to="/" className='hideOnMobile'>Home</Link></li>
            <li><Link to="/about" className='hideOnMobile'>About</Link></li>
            <li><Link to="/programs" className='hideOnMobile'>Programs</Link></li>
            <li><Link to="/contact" className='hideOnMobile'>Contact</Link></li>
            <li><a href="#Products" className='hideOnMobile'>Membership</a></li>
          </ul>

          <div className="menubutton">
            <a href="#" onClick={e => {
              e.preventDefault();
              setSidebarOpen(true);
            }}>
              <img src={menuIcon} alt="sidebar" />
            </a>
          </div>

          <div className="nav-btn HIDEONMOBILE">
            <a onClick={() => {
              setModalBackgroundPath(location.pathname);
              setShowSignup(true);
            }}>Join Us</a>
          </div>

          {sidebarOpen && (
            <>
            
            <ul className="sidebar active">
              <Link to="/" className="logo">
              <img src={logo} alt="ReviveFitness.np" />
              </Link >
              <li>
              </li>
              <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link></li>
              <li><Link to="/programs" onClick={() => setSidebarOpen(false)}>Programs</Link></li>
              <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
              <li><a href="#Products" onClick={() => setSidebarOpen(false)}>Membership</a></li>
              <li>
                <div className="nav-btn">
                  <a onClick={() => {setSidebarOpen(false); openSignupModal();}}>Join Us</a>
                </div>
              </li>
              <li>
                <a className="menu-icon" href="#" onClick={e => {
                  e.preventDefault();
                  setSidebarOpen(false);
                }}>
                  <div className='hidebutton'>
                    <img src={closeIcon} alt="close" />
                  </div>
                </a>
              </li>
            </ul>
          </>
          )}
        </nav>
      </header>

      {/* Modal Overlay */}
      {showSignup && (
        <div className="modal-overlay" onClick={() => setShowSignup(false)}>
          <div className="modal-content auth-container" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSignup(false)}>✖</button>
            <Signup onClose={() => setShowSignup(false)}
    onClosePath={modalBackgroundPath}/>
          </div>
        </div>
      )}

    </>
  );
}
