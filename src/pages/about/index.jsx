import Button from "../../components/button";
import TextAndImage from "../../components/blurImage";
import hero from "../../assets/images/about-hero.webp";
import about1 from "../../assets/images/sylwia.webp";
import about2 from "../../assets/images/about2.webp";
import about3 from "../../assets/images/about3.webp";
import about4 from "../../assets/images/about4.webp";
import aboutBody from "../../assets/images/about-body.webp";
import AboutCards from "../../components/cards/aboutCards";
import "./index.scss";
import useScrollStates from "../../components/scrollState";
import CallToAction from "../../components/cta";

const About = () => {
  const { second, third, fourth, fith } = useScrollStates();
  return (
    <div className="about-page">
      <section className="hero">
        <div className="text-box">
          <div className="subtitle">
            <div className="indent"></div>
            About Us
          </div>
          <h1 className="main-title">Sylwia and the Team</h1>
          <p>
            Little Learners is a drop-off pre-school in Blackheath/Lee,
            welcoming children aged 2 to 4. We provide a smooth, nurturing start
            to early education.
          </p>
          <div className="btn-container">
            <Button text="Contact us" link="/contact-us" />
          </div>
        </div>
        <img
          src={hero}
          alt="Little Learners preschool, nursey in Blackheath, London"
          className="about-image"
        />
      </section>
      <section className={`second-section ${second ? "anim" : "none"}`}>
        <img src={aboutBody} alt="" className="about-image" />
        <AboutCards />
      </section>
      <section className={`third-section ${third ? "anim" : "none"}`}>
        <TextAndImage
          subtitle="our story"
          title="About Sylwia"
          p1=" Lorem ipsum dolor sit amet consectetur. Aliquet amet adipiscing at dignissim quis feugiat risus venenatis orci. Adipiscing aliquet aliquet leo sagittis hendrerit ultrices."
          p2="Lorem ipsum dolor sit amet consectetur. Neque vulputate duis a est dis velit. Imperdiet eget viverra erat cursus consequat hendrerit neque pellentesque fermentum."
          p3="Lorem ipsum dolor sit amet consectetur. Neque vulputate duis a est dis velit. Imperdiet eget viverra erat cursus consequat hendrerit neque pellentesque fermentum."
          text="Apply to Join"
          link="/"
          img={about1}
          reverse
        />
        <TextAndImage
          subtitle="little learners"
          title="Building Bright Futures"
          p1=" Our exciting programme follows the Early Years Foundation Stage, balancing structured play and small group activities to build confidence and prepare children for school. Each child has a personalised online Learning Journey from day one."
          p2="Led by a qualified primary school teacher and dedicated staff, every session combines child-led and teacher-guided learning to help each child reach their full potential."
          text="Playing and Learning"
          link="/paying-and-learning"
          img={about2}
        />
        <div className="policy-section">
          <img src={aboutBody} alt="" className="about-image" />
          <CallToAction
            title="Our Policies and Procedures"
            p1="Download and view our documents here"
            text1="Policies & Procedures"
            link1="/"
            display="none"
          />
        </div>
        <TextAndImage
          subtitle="Teaching & learning"
          title="Our Ethos"
          p1="At Little Learners, we believe every child is unique and full of potential. We support their growth by recognising and celebrating their individuality."
          p2="We know children thrive when they’re free to learn at their own pace, in a space where they feel happy, safe, and understood."
          text="Playing and Learning"
          link="/paying-and-learning"
          img={about3}
          reverse
        />
        <TextAndImage
          subtitle="building relationships"
          title="Parent Partnerships"
          p1="At Little Learners, we know that parents know their children best. That’s why we value strong partnerships built on trust, open communication, and shared understanding to support each child’s learning journey."
          p2="Each child is assigned a dedicated key teacher from their first day. This special bond helps us understand how your child learns, grows, and explores their interests—creating a more personalised experience."
          p3="We encourage two-way communication through regular chats at drop-off, pick-up, or by phone when needed. We always welcome feedback and respect each family’s values, culture, and individual needs."
          text="apply to join"
          link="/"
          img={about4}
        />
      </section>
      <section className={`fith-section ${fith}`}>
        <img src={aboutBody} alt="" className="about-image" />
        <CallToAction
          title="Progress Updates"
          p1="We provide written progress checks for two-year-olds, highlighting development in key learning areas like communication, creativity, and overall growth."
          p2="Our website is regularly updated with news, curriculum info, activity tips, and children’s artwork to keep you informed and inspired at home."
          text1="contact us"
          link1="/contact-us"
          display="none"
        />
      </section>
    </div>
  );
};

export default About;
