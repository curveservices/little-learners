import Button from "../button";
import "./index.scss";


const TextAndImage = ({
  subtitle,
  title,
  p1,
  p2,
  p3,
  text,
  link,
  img,
  reverse = false,
}) => {
  return (
    <div className={`text-image-wrapper ${reverse ? "reverse" : ""}`}>
      <div className="text-box">
        <div className="subtitle">
          <div className="indent"></div>
          <div>{subtitle}</div>
        </div>
        <h2 className="title">{title}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <div className="btn-container">
          <Button text={text} link={link} />
        </div>
      </div>
      <img
        src={img}
        alt="Little Learners Pre-School in Blackheath, London"
        className="blur-img"
      />
    </div>
  );
};

export default TextAndImage;
