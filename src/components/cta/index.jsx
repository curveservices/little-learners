import Button from "../button";
import "./index.scss";

const CallToAction = ({
  title,
  p1,
  p2,
  text1,
  link1,
  text2,
  link2,
  display,
}) => {
  return (
    <div className="cta block">
      <div className="cta-container">
        <h3 className="cta-title">{title}</h3>
        <p className="cta-p">{p1}</p>
        <p className="cta-p">{p2}</p>
      </div>
      <div className="btn-container">
        <Button
          text={text1}
          link={link1}
          background="var(--secondary)"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default CallToAction;
