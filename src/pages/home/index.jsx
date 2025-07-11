import Button from "../../components/button";
import home from "../../assets/images/home-hero.webp";
import Cards from "../../components/cards/homeCards";
import body from "../../assets/images/hero-body.webp";
import TextAndImage from "../../components/blurImage";
import home1 from "../../assets/images/home1.webp";
import home2 from "../../assets/images/home2.webp";
import messy from "../../assets/images/messy.webp";
import funded from "../../assets/images/funded.webp";
import CallToAction from "../../components/cta";
import Testimonials from "../../components/testimonials";
import useScrollStates from "../../components/scrollState";
import "./index.scss";
import Helmet from "../../components/helmet";

const Home = () => {
  const { second, third, fourth, fith } = useScrollStates();
  return (
    <>
      <Helmet
        title="Little Learners Preschool | Nurturing Young Minds in Blackheath & Lee"
        description="Little Learners is a warm and welcoming preschool in Blackheath & Lee, offering early years education for children aged 2–4 through creative, play-based learning and a safe environment."
        keywords="preschool Blackheath, nursery Lee London, early years education, 2-4 year olds, child care Blackheath, Little Learners Playgroup"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Preschool",
          name: "Little Learners Preschool",
          url: "https://www.littlelearnersplaygroup.com",
          image:
            "https://www.littlelearnersplaygroup.com/assets/images/home-hero.webp",
          description:
            "A nurturing preschool in Blackheath and Lee, London, offering play-based early years education for children aged 2–4.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "25-33 Brandram Road",
            addressLocality: "London",
            postalCode: "SE13 5RT",
            addressCountry: "GB",
          },
          telephone: "07595 120744",
          email: "info@littlelearnersplaygroup.com",
          openingHours: "Mo-Fr 08:30-16:00",
        }}
      />
      <div className="home-page">
        <section className="hero">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              <div>Your Local Preschool</div>
            </div>
            <h1 className="main-title">Little Learners</h1>
            <p>
              We are an early years setting located in Blackheath, London.
              Designed for children aged 2 to 4 years old, created by a
              passionate early years teacher, a mum of a very creative child and
              an owner of a golden Labrador.
            </p>
            <div className="btn-container">
              <Button
                isInternal={false}
                download={true}
                link="/Application_to_Join_April_2018.doc"
                text="Apply to Join"
              />
            </div>
          </div>
          <img
            src={home}
            alt="Little Learners Preschool, Blackheath, Greenwich, London"
            className="hero-image"
            loading="lazy"
            style={{ paddingTop: "1rem" }}
          />
        </section>
        <section className="second-section">
          <div className="body-img-overlay">
            <img
              src={body}
              alt="Little Learners Preschool, Blackheath, London"
              className="body-img"
            />
          </div>
          <div className={`${second ? "anim" : "none"}`}>
            <Cards />
          </div>
        </section>
        <section className={`third-section ${third ? "anim" : "none"}`}>
          <TextAndImage
            subtitle="a taster to little learners"
            title="Messy & Sensory Play"
            p1="Get ready to squish, splash, and sparkle! Join us every Friday (term time) from 9:30 to 10:30 AM for Messy Play and Sensory Fun"
            p2="Specially designed for curious little ones aged 12 months to 5 years. It’s the perfect hour of giggles, goo, and hands-on discovery for everyone especially for children that are too young to join our preschool."
            p3="Contact us to find out more about our messy and sensory play sessions."
            img={messy}
            text="Contact us"
            link="/contact-us"
            reverse
          />
          <div className="banner">
            <div className="text">
              <h3 className="title">Free Funded Hours</h3>
              <p>
                Little Learners Preschool offers government-funded 15 and
                30-hour early education places for eligible children aged 2 to 4
                years.
              </p>
              <p>
                Funded sessions support children aged 2–3 and 3-4 year olds
                (subject to eligibility criteria). Please contact us to find out
                more and check your eligibility.
              </p>
              <Button text="contact us" link="contact-us"/>
            </div>
            <img
              src={funded}
              alt="Little Learners preschool in Blackheath Lee, London"
              className="banner-img"
            />
          </div>
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
            reverse
          />
          <TextAndImage
            subtitle="Careful Planning"
            title="Our Stucture"
            p1="Every session is thoughtfully planned Sylwia, a qualified primary teacher, and our team to ensure children benefit from a balance of child-led play and meaningful teacher-guided learning experiences."
            p2="Little Learners is filled with bright displays of children’s artwork, celebrating their creativity. We welcome parents with an open-door policy, offering open mornings, show-arounds, and free trial sessions to experience our setting firsthand."
            p3="We are open during term time only and break up for school holidays and half term."
            text="Learning & Playing"
            link="/learning-and-playing"
            img={home2}
          />
        </section>
        <CallToAction
          title="Open Times"
          p1="Monday to Friday 9.30am - 2.30pm during term time"
          text1="Term Times"
          link1="https://lewisham.gov.uk/myservices/education/schools/term-dates/term-dates-25-26"
          text2="Apply to Join"
        />
        <section className="fith-section">
          <div className="body-img-overlay">
            <img
              src={body}
              alt="Little Learners Preschool, Blackheath, London"
              className="body-img"
            />
          </div>
          <Testimonials />
        </section>
      </div>
    </>
  );
};

export default Home;
