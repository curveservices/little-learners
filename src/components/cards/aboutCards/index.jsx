import house from "../../../assets/images/house.webp";
import flower from "../../../assets/images/flower.webp";
import cocoon from "../../../assets/images/silk-cocoon.webp";
import world from "../../../assets/images/world.webp";
import magic from "../../../assets/images/magic.webp";
import "./index.scss";

const AboutCards = () => {
  return (
    <div className="card-container">
      <div className="card" style={{ border: "3px solid var(--primary)" }}>
        <img
          src={house}
          alt="home"
          className="card-icon"
          style={{ background: "var(--primary)" }}
        />
        <h3 className="title">A Safe and Happy Place</h3>
        <p>Where children will feel valued, supported and listened to.</p>
      </div>
      <div className="card" style={{ border: "3px solid var(--secondary)" }}>
        <img
          src={flower}
          alt="home"
          className="card-icon"
          style={{ background: "var(--secondary)" }}
        />
        <h3 className="title">Somewhere to Flourish</h3>
        <p>
          Children will gain confidence and begin a lifelong passion for
          learning.
        </p>
      </div>
      <div className="card" style={{ border: "3px solid #57C0B3" }}>
        <img
          src={cocoon}
          alt="home"
          className="card-icon"
          style={{ background: "#57C0B3" }}
        />
        <h3 className="title">A Cocoon</h3>
        <p>
          Curiosity is stimulated & children are encouraged to develop at their
          own pace.
        </p>
      </div>
      <div className="card" style={{ border: "3px solid #0AB7D5" }}>
        <img
          src={world}
          alt="home"
          className="card-icon"
          style={{ background: "#0AB7D5" }}
        />
        <h3 className="title">A World</h3>
        <p>
          Toys, structured activities & outside space – learning & fun go hand
          in hand.
        </p>
      </div>
      <div className="card" style={{ border: "3px solid var(--primary)" }}>
        <img
          src={magic}
          alt="home"
          className="card-icon"
          style={{ background: "var(--primary)" }}
        />
        <h3 className="title">A Friendly, Magical Place</h3>
        <p>
          For little friends to meet and enjoy discovering new things together.
        </p>
      </div>
    </div>
  );
};

export default AboutCards;
