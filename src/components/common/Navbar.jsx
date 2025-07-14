import { useState } from 'react';
import logo from '../../assets/logo/RandHand.png';
import menuIcon from '../../assets/button_imgs/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import closeIcon from '../../assets/button_imgs/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
          <Link to="">Join Us</Link>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <ul className="sidebar active">
            <li>
              <Link to="/" className="logo">
                <img src={logo} alt="ReviveFitness.np" />
              </Link>
            </li>
            <hr />
            <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
            <hr />
            <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link></li>
            <hr />
            <li><Link to="/programs" onClick={() => setSidebarOpen(false)}>Programs</Link></li>
            <hr />
            <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
            <hr />
            <li><a href="#Products" onClick={() => setSidebarOpen(false)}>Membership</a></li>
            <hr />
            <li>
              <div className="nav-btn">
                <Link to="">Join Us</Link>

              </div>
            </li>
            <li className="hidebutton">
              <a className="menu-icon" href="#" onClick={e => {
                e.preventDefault();
                setSidebarOpen(false);
              }}>
                <img src={closeIcon} alt="close" />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}