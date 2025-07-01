import { Link } from "react-router-dom";
import logo from "../../assets/images/LL-favicon.svg";
import "./index.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-title">OPENING HOURS</div>
          <div>Monday to Friday: 9:30am - 2:30pm</div>
          <div>During term time</div>
          <div className="footer-title">PRE-SCHOOL LOCATION</div>
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
          <div className="footer-title">LITTLE LEARNERS PRE-SCHOOL</div>
          <div className="links-container">
            <Link to="/" className="link">
              Policies and Procedures
            </Link>
            <Link to="/" className="link">
              Aplication to Join
            </Link>
            <Link to="/" className="link">
              Terms and Conditions
            </Link>
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
