import card1 from "../../../assets/images/card1.webp";
import card2 from "../../../assets/images/card2.webp";
import card3 from "../../../assets/images/card3.webp";
import "./index.scss";

const Cards = (props) => {
  return (
    <div className="cards-container">
      <div className="card">
        <img
          src={props.card1 || card1}
          alt="Little Learners Preschool, Blackheath, London, UK"
          className="card-image"
          loading="lazy"
        />
        <h3 className="card-title">
          {props.card1Title || "A Safe Happy Place"}
        </h3>
        <p className="card-description">
          {props.card1P ||
            "Where children will feel valued,  supported and listened to"}
        </p>
      </div>
      <div className="card second-card">
        <img
          src={props.card2 || card2}
          alt="Little Learners Preschool, Blackheath, London, UK"
          className="card-image"
          loading="lazy"
        />
        <h3 className="card-title">
          {props.card2Title || "Somewhere To Flourish"}
        </h3>
        <p className="card-description">
          Children will gain confidence and begin a lifelong  passion for
          learning
        </p>
      </div>
      <div className="card">
        <img
          src={props.card3 || card3}
          alt="Little Learners Preschool, Blackheath, London, UK"
          className="card-image"
          loading="lazy"
        />
        <h3 className="card-title">
          {props.card3Title || "A Friendly, Magical Place"}
        </h3>
        <p className="card-description">
          {props.card3P ||
            "For little friends to meet and enjoy discovering new things together"}
        </p>
      </div>
    </div>
  );
};

export default Cards;
