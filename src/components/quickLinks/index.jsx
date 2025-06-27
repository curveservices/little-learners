import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.scss";

const QuickLinksPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/policies-and-procedures", label: "Policies and Procedures" },
    { path: "/terms-and-conditions", label: "Terms and Conditions" },
    { path: "/aplication-form", label: "Application to Join" },
    { path: "/contact-us", label: "Contact Us" },
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
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text">{link.label}</div>
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuickLinksPanel;
