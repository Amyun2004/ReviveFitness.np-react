import instagramIcon from '../../assets/logo/icons8-instagram.svg';
import facebookIcon from '../../assets/logo/icons8-facebook.svg';
import righthandlogo from  '../../assets/logo/RandHand.png';
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={righthandlogo} alt="ReviveFitness Logo" />
          <p>Your Journey, Our Passion</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="programs.html">Programs</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: revivefitness.np@gmail.com</p>
          <p>Phone: +977-9876543210</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.instagram.com/revivefitness.np?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61566153055972" target="_blank">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ReviveFitness.np. All rights reserved.</p>
        <a href="privacy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a>
      </div>
    </footer>
  );
}
