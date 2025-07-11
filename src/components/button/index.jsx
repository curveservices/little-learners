import { Link } from "react-router-dom";
import "./index.scss";

const Button = (props) => {
  const {
    link,
    text,
    type,
    target,
    background,
    color,
    fontSize,
    display,
    isInternal = true, 
    download = false,
  } = props;

  const buttonStyle = {
    background,
    color,
    fontSize: fontSize + "px",
    display,
  };

  const buttonElement = (
    <button style={buttonStyle} className="flat-btn" type={type}>
      {text}
    </button>
  );

  return isInternal ? (
    <Link to={link} target={target}>
      {buttonElement}
    </Link>
  ) : (
    <a
      href={link}
      target={target || "_blank"}
      rel="noopener noreferrer"
      download={download}
    >
      {buttonElement}
    </a>
  );
};

export default Button;
