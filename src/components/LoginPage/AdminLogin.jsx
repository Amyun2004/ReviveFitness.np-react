import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/auth.css';

export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleAdminLogin = (e) => {
    e.preventDefault();
    alert(`Admin logged in as: ${adminId}`);
  };
  let location = useLocation();

  let backgroundPath = location.state?.backgroundPath || '/';

  

  return (
     <div classNaame="modal-overlay" onClick={()=>navigate(backgroundPath)}>
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
            <form className="log-in-admin" onSubmit={handleAdminLogin}>
                <h2>Admin Login</h2>
                <p>Admin ID</p>
                <input
                type="text"
                placeholder="Enter your Admin ID"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
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

                <Link to="/login" className="other-page-link" state={{ backgroundPath}}>Login as User</Link>
                <Link to="/signup" className="other-page-link" state={{ backgroundPath}}>Don't have an account?</Link>
            </form>
        </div>
    </div>
  );
}
