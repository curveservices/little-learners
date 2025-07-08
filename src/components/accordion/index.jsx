import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="accordion">
      <button
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
              <span className="icon">
                  <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} /></span>
      </button>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default Accordion;
