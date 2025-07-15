import { Link } from "react-router-dom";
import logo from "../../assets/images/LL-favicon.svg";
import "./index.scss";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFooter(true);
    }, 500); 

    return () => clearTimeout(timeout);
  }, []);
  
  const year = new Date().getFullYear();
  return (
    <footer className={showFooter ? "visible" : "hidden"}>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-title">OPENING HOURS</div>
          <div>Monday to Friday: 9:30am - 2:30pm</div>
          <div>During term time</div>
          <div className="footer-title">PRESCHOOL LOCATION</div>
          <div>Brandram Road Community Centre, </div>
          <div>25-33 Brandram Road,</div>
          <div>London,</div>
          <div>SE13 5RT</div>
        </div>
        <div className="footer-centre">
          <img
            src={logo}
            alt="Little Learners Preschool in Blackheath, London"
            className="logo"
          />
          <div className="footer-title">LITTLE LEARNERS PRESCHOOL</div>
          <div className="links-container">
            <Link to="/policies-and-procedures" className="link">
              Policies and Procedures
            </Link>
            <a href="/Application_to_Join_April_2018.doc" className="link" download>
              Aplication to Join
            </a>
            <a
              href="/Childcare_Terms_and_Conditions_April_2018.doc"
              download
              className="link"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-title">Contact us</div>
          <div>07595 120744</div>
          <div>info@littlelearnersplaygroup.com</div>
          <div className="footer-title">Navigation</div>
          <div className="links-container">
            <Link to="/" className="link">
              HOME
            </Link>
            <Link to="/about-us" className="link">
              ABOUT US
            </Link>
            <Link to="learning-and-playing" className="link">
              LEARNING AND PLAYING
            </Link>
            <Link to="/gallery" className="link">
              GALLERY
            </Link>
          </div>
        </div>
      </div>
      <p className="copy">
        &copy; {year} Designed and developed by{" "}
        <a
          href="https://www.immutable-studio.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Immutable Studio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
