/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className="nav-wrapper" style={greyBg}>
      <nav className="black-text grey lighten-4" style={noBoxShadow}>
            <div style={marginLeft3}>
              <a href="/" className="brand-logo black-text">
                SpaceX Launch Programs
              </a>
            </div>
      </nav>
    </div>
  );
};

const marginLeft3 = {
  "margin-left": "2%"
}
const noBoxShadow = {
  "box-shadow": "none"
}

const greyBg = {
  "background-color" : "#80808014"
}

export default Header;
