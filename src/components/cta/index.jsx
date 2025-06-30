import Button from '../button';
import './index.scss';

const CallToAction = ({title, p1, text1, link1, text2, link2}) => {
  return (
    <div className="cta">
      <div className="cta-container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-p">{p1}</p>
      </div>
      <div className="btn-container">
        <Button
          text={text1}
          link={link1}
          target="_blank"
          background="var(--secondary)"
          color='#fff'
        />
        <Button
          text={text2}
          link={link2}
        />
      </div>
    </div>
  );
}

export default CallToAction
