import { useEffect, useState } from "react";
import Navbar from "../nav";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer";
import "./index.scss";
import QuickLinksPanel from "../../components/quickLinks";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowFooter(false);
    const timeout = setTimeout(() => {
      setShowFooter(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <main className="app">
        <Outlet />
      </main>
      {showButton && (
        <>
          <button
            className="back-to-top"
            name="back-to-top"
            aria-label="Back to top"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} />
            Back to Top
          </button>
        </>
      )};
      <QuickLinksPanel />
      <Footer isVisible={showFooter} />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
