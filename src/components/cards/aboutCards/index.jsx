import house from "../../../assets/images/house.webp";
import flower from "../../../assets/images/flower.webp";
import cocoon from "../../../assets/images/silk-cocoon.webp";
import world from "../../../assets/images/world.webp";
import magic from "../../../assets/images/magic.webp";
import "./index.scss";

const AboutCards = ({ items }) => {
  const defaultItems = [
    {
      icon: house,
      title: "A Safe and Happy Place",
      description:
        "Where children will feel valued, supported and listened to.",
      color: "var(--primary)",
    },
    {
      icon: flower,
      title: "Somewhere to Flourish",
      description:
        "Children will gain confidence and begin a lifelong passion for learning.",
      color: "var(--secondary)",
    },
    {
      icon: cocoon,
      title: "A Cocoon",
      description:
        "Curiosity is stimulated & children are encouraged to develop at their own pace.",
      color: "#57C0B3",
    },
    {
      icon: world,
      title: "A World",
      description:
        "Toys, structured activities & outside space – learning & fun go hand in hand.",
      color: "#0AB7D5",
    },
    {
      icon: magic,
      title: "A Friendly, Magical Place",
      description:
        "For little friends to meet and enjoy discovering new things together.",
      color: "var(--primary)",
    },
  ];

  const data = items || defaultItems;

  return (
    <div className="about-card-container">
      {data.map((card, i) => (
        <div
          className="card"
          key={i}
          style={{ border: `3px solid ${card.color}`}}
        >
          {card.icon && (<img
            src={card.icon}
            alt={card.title}
            className="card-icon"
            style={{ background: card.color }}
          />)}

          <h3 className="title">{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
