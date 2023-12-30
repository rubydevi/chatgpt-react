import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigation } from './NavigationContext';
import logo from '../assets/app-logo.jpg';
import NavFooter from './NavFooter';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

const Navigation = () => {
  const { setAuth } = useAuth();
  const { isOpen } = useNavigation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { authToken } = JSON.parse(localStorage.getItem('Token')) || {};

  const handleLogout = () => {
    setAuth({});
    localStorage.removeItem('Token');
    const url = '/logout';
    if (authToken) {
      try {
        axios.delete(url, {
          headers: {
            Authorization: authToken,
            'Content-Type': 'application/json',
          },
        });
        // toast.success('Logout Successfully');
      } catch (err) {
        // toast.error('Opps😥 failed To logout');
        throw Error(err);
      }
    }
    navigate('/login');
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <>
      {/* <div className="d-block d-md-none">
        <NavBarMobile />
      </div> */}

      <div className="d-none d-md-block" style={{ width: '13%' }}>
        <div
          className={`position-fixed top-0 start-0 vh-100 border-end d-flex flex-column ${
            isOpen && isMobile ? 'w-50' : 'w-0'
          }`}
          id="sidebar-wrapper"
          style={{ width: '13%', backgroundColor: '#000' }}
        >
          <div className="sidebar-heading ps-4">
            <Link to="/" className="sidebar-button">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt="Logo"
                  src={logo}
                  className="img-fluid"
                  style={{ width: '15%', borderRadius: '50%' }}
                />
                <span style={{ marginLeft: '10px' }}>New chat</span>
                <FontAwesomeIcon icon={faEdit} style={{ marginLeft: '5px' }} />
              </div>
            </Link>
          </div>
          {authToken ? (
            <div className="list-group list-group-flush flex-grow-1">
              <button
                disabled={!authToken}
                onClick={handleLogout}
                type="button"
                className="list-group-item list-group-item-action"
              >
                <FaSignOutAlt className="ms-2" />
                Log Out
              </button>
              <NavFooter />
            </div>
          ) : (
            <>
              <NavFooter />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
