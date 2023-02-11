import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import "./styles.scss";
import logo from '../../images/logo.jpeg'
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <nav className="Navbar">
        <div className="Navbar__container">
          <div className="Navbar__container__logo">
            <a href="/">
             <img src={logo} className="img-fluid logo" alt="Logo"/>
            </a>
          </div>
          <ul
            className={
              click
                ? "Navbar__container__menu active"
                : "Navbar__container__menu"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="Navbar__container__menu__item">
                <Link
                  to={item.to}
                  className="Navbar__container__menu__item__links"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="Nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
