import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.scss";

const QuickLinksPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add a flag to distinguish internal route vs static file links
  const links = [
    {
      path: "/policies-and-procedures",
      label: "Policies and Procedures",
      internal: true,
    },
    {
      path: "/Childcare_Terms_and_Conditions_April_2018.doc",
      label: "Terms and Conditions",
      internal: false,
    },
    {
      path: "/Application_to_join.doc",
      label: "Application to Join",
      internal: false,
    },
    { path: "/contact-us", label: "Contact Us", internal: true },
  ];

  return (
    <div className="quick-links-tab">
      <div className="quick-links-wrapper">
        <div className="toggle-tab" onClick={() => setIsOpen(!isOpen)}>
          <span>Quick Links</span>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="quick-links-content"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="quick-links-content"
            >
              {links.map(({ path, label, internal }) =>
                internal ? (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text">{label}</div>
                  </NavLink>
                ) : (
                  <a
                    key={path}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    download
                  >
                    <div className="text">{label}</div>
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuickLinksPanel;

