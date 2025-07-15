import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/auth.css';
import logo from '../../assets/logo/RandHand.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };
  let location = useLocation();

  let backgroundPath = location.state?.backgroundPath;

  return (
    <div className="modal-overlay" onClick={()=>navigate(backgroundPath)}>
      <div
        className="modal-content auth-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Close Button */}
        <button
          className="modal-close"
          onClick={()=>navigate(backgroundPath)}
        >
          ✖
        </button>
    

        <form className="log-in" onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>

          <Link to="/signup" className="other-page-link" state={{ backgroundPath}}>Don't have an account?</Link>
          <Link to="/admin" className="other-page-link" state={{ backgroundPath}}>Login as Admin</Link>
        </form>
      </div>
    </div>
  );
}
