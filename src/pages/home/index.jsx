import Button from '../../components/button';
import home from '../../assets/images/home-hero.webp';
import Cards from '../../components/cards';
import body from '../../assets/images/hero-body.webp';
import TextAndImage from "../../components/blurImage";
import home1 from '../../assets/images/home1.webp';
import home2 from '../../assets/images/home2.webp';
import CallToAction from '../../components/cta';
import Testimonials from '../../components/testimonials';
import useScrollStates from '../../components/scrollState';
import "./index.scss";

const Home = () => {
  const {second, third, fourth, fith} = useScrollStates()
  return (
    <div className="home-page">
      <section className="hero">
        <div className="text-box">
          <div className="subtitle">
            <div className="indent"></div>
            <div>Your Local Pre-School</div>
          </div>
          <h1 className="main-title">Little Learners</h1>
          <p>
            We are an early years setting located in Blackheath, London.
            Designed for children aged 2 to 4 years old, created by a passionate
            early years teacher, a mum of a very creative child and an owner of
            a golden Labrador.
          </p>
          <div className="btn-container">
            <Button text="Apply to Join" />
          </div>
        </div>
        <img
          src={home}
          alt="Little Learners Pre-School, Blackheath, Greenwich, London"
          className="hero-image"
          loading="lazy"
          style={{ paddingTop: "1rem" }}
        />
      </section>
      <section className="second-section">
        <div className="body-img-overlay">
          <img
            src={body}
            alt="Little Learners Pre-school, Blackheath, London"
            className="body-img"
          />
        </div>
        <div className={`${second ? "anim" : "none"}`}>
          <Cards />
        </div>
      </section>
      <section className={`third-section ${third ? "anim" : "none"}`}>
        <TextAndImage
          subtitle="Teaching & Learning"
          title="Our Sessions"
          p1=" Our exciting, well-rounded programme builds a strong foundation for
            learning, helping children transition into pre-prep or primary
            school feeling confident, well-prepared, and ready to embrace new
            challenges."
          p2="Our play-based sessions follow the Early Years Foundation Stage
            Curriculum, encouraging children to explore, make independent
            choices, and build meaningful relationships as they grow in
            confidence and curiosity."
          p3="The Early Years Foundation Stage offers engaging learning through
            play and group activities. Each child is supported by a Key Worker
            and a personalised Learning Journey from their first day at Little
            Learners."
          text="Find out about us"
          link="/about-us"
          img={home1}
        />
        <TextAndImage
          subtitle="Careful Planning"
          title="Our Stucture"
          p1="Every session is thoughtfully planned Sylwia, a qualified primary teacher, and our team to ensure children benefit from a balance of child-led play and meaningful teacher-guided learning experiences."
          p2="Little Learners is filled with bright displays of children’s artwork, celebrating their creativity. We welcome parents with an open-door policy, offering open mornings, show-arounds, and free trial sessions to experience our setting firsthand."
          p3="We are open during term time only and break up for school holidays and half term."
          text="Playing & Learning"
          link="/playing-and-learning"
          img={home2}
          reverse
        />
      </section>
      <CallToAction
        title="Open Times"
        p1="Monday to Friday 9.30am - 2.30pm during term time"
        text1="Term Times"
        link1="https://lewisham.gov.uk/myservices/education/schools/term-dates/term-dates-25-26"
        text2="Apply to Join"
        link2="/"
      />
      <section className="fith-section">
        <div className="body-img-overlay">
          <img
            src={body}
            alt="Little Learners Pre-school, Blackheath, London"
            className="body-img"
          />
        </div>
        <Testimonials />
      </section>
    </div>
  );
}

export default Home
