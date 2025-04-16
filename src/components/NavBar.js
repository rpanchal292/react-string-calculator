import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navBar">
            <h2 className="logo">🔢 String Calculator</h2>
            <ul> 
        {isAuthenticated ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;