import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LL-favicon.svg";
import {
  faEnvelope,
  faEnvelopeOpen,
  faHouse,
  faImage,
  faPhone,
  faPlay,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuToggle from "../../components/menuToggle";
import Socials from "../../components/socials";
import "./index.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${scrolled ? "navbar-scroll navbar-hidden" : ""} ${showNav ? "menu-open" : ""}`}
      >
        <NavLink to="/" aria-label="home page">
          <div className="title-container">
            <img
              src={logo}
              alt="Little Learners Preschool in Blackheath, London"
              className="mobile-logo"
            />
          </div>
          <img
            src={logo}
            alt="Little Learners Preschool in Blackheath, London"
            className="logo"
          />
        </NavLink>
        <nav className={`navbar ${showNav ? "mobile-show" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
              <div className="text">Home</div>
            </div>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faUsers} className="mobile-icon" />
              <div className="text">About Us</div>
            </div>
          </NavLink>
          <NavLink
            to="learning-and-playing"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faPlay} className="mobile-icon" />
              <div className="text">Learning and Playing</div>
            </div>
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faImage} className="mobile-icon" />
              <div className="text">Gallery</div>
            </div>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faEnvelope} className="mobile-icon" />
              <div className="text">Contact Us</div>
            </div>
          </NavLink>
          <div className="contact-container">
            <div className="text mobile-icon">
              <b>Get In Touch</b>
            </div>
            <div className="mobile-icon text small menu-container">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              info@littlelearnersplaygroup.com
            </div>
            <div className="mobile-icon text small menu-container">
              <FontAwesomeIcon icon={faPhone} /> 07595 120744
            </div>
          </div>
        </nav>
        <Socials />
        <MenuToggle showNav={showNav} setShowNav={setShowNav} />
      </header>
    </>
  );
};

export default Navbar;
