import { useState, useEffect } from 'react';
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
        <img
          className="nav-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="nav-logo"
        />

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
