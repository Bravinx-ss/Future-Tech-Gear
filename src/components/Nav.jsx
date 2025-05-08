import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaShoppingCart,
  FaHeadset,
  FaHeart,
  FaStar
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = () => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // If user exists in localStorage, set true
  };

  useEffect(() => {
    checkAuth();

    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container text-light">
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              <FaInfoCircle className="nav-icon" /> About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              <FaShoppingCart className="nav-icon" /> Cart
            </Link>
          </li>
          <li>
            <Link to="/help" className="nav-link">
              <FaHeadset className="nav-icon" /> Support
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="nav-link">
              <FaHeart className="nav-icon" /> Wish List
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="nav-link">
              <FaStar className="nav-icon" /> Reviews
            </Link>
          </li>
        </ul>

        <div className="navbar-auth">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="auth-link">
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/signin" className="auth-link">
                Sign In
              </Link>
              <Link to="/signup" className="auth-link">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
