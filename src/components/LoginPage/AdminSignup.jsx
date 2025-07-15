import { useState } from "react";
import { Link } from "react-router-dom";
import '../../CSS/auth.css';

// This one is not done yet  
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    alert(`Signed up as: ${email}`);
    // Replace with your API call
  };

  return (
    <div className="auth-container">
      <form className="sign-in" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
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
        <p>Confirm Password</p>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <Link to="/login" className="other-page-link">Already a member?</Link><br />
        <Link to="/admin-login" className="other-page-link">Login for Admin?</Link>
      </form>
    </div>
  );
}
