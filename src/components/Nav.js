import { useState, useEffect } from 'react';
import netLogo from '../assets/netLogo.png';
import './Nav.css';
const Nav = () => {
  const [show, handleShow] = useState(false);
  const transformNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transformNavbar);
    return () => {
      window.removeEventListener('scroll', transformNavbar);
    };
  }, []);

  return (
    <div className={`nav-bar ${show && 'nav-black'}`}>
      <div className="nav-contents">
        <img className="nav-logo" src={netLogo} alt="nav-logo" />

        <img
          className="nav-avator"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avator"
        />
      </div>
    </div>
  );
};

export default Nav;
