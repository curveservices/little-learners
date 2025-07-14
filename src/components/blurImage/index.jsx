import Button from "../button";
import "./index.scss";

const TextAndImage = ({
  subtitle,
  title,
  p1,
  p2,
  p3,
  p4,
  text,
  link,
  img,
  display = true,
  reverse = false,
  flip = false,
  isInternal = true,
  download = false, 
}) => {
  return (
    <div
      className={`text-image-wrapper ${flip ? "flip" : ""} ${reverse ? "reverse" : ""}`}
    >
      <div className="text-box block">
        <div className="subtitle">
          <div className="indent"></div>
          <div>{subtitle}</div>
        </div>
        <h2 className="title">{title}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        {display && (
          <div className="btn-container">
            <Button
              text={text}
              link={link}
              isInternal={isInternal}
              download={download}
            />
          </div>
        )}
      </div>
      <img
        src={img}
        alt="Little Learners Pre-School in Blackheath, London"
        className="blur-img block"
        loading="lazy"
      />
    </div>
  );
};

export default TextAndImage;
