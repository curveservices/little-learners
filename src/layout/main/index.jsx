import { useEffect, useState } from "react";
import Navbar from "../nav";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer";
import "./index.scss";
import QuickLinksPanel from "../../components/quickLinks";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setShowButton(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

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
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
