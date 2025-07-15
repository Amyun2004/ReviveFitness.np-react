import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/auth.css';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  let location = useLocation();

  let backgroundPath = location.state?.backgroundPath || '/';

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    alert(`Signed up as: ${email}`);
  };

  return (
     <div className="modal-overlay" onClick={()=>navigate(backgroundPath)}>
        <div
            className="modal-content auth-container"
            onClick={(e) => e.stopPropagation()}>
            {/* ✅ Close Button */}
            <button
            className="modal-close"
            onClick={()=>navigate(backgroundPath)}
            >
            ✖
            </button>
            <form className="sign-in" onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <p>Email</p>
                <input
                type="email"
                id="signup-email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <p>Password</p>
                <input
                type="password"
                id="signup-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <p>Confirm Password</p>
                <input
                type="password"
                id="signup-confirm"
                placeholder="Confirm your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                />
                <button type="submit">Sign Up</button>

                <Link to="/login" className="other-page-link" state={{ backgroundPath }}>Already a member?</Link>
                <Link to="/admin" className="other-page-link" state={{ backgroundPath}}>Login for Admin?</Link>

            </form>
        </div>
    </div>
  );
}
