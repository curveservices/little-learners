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
import Helmet from "../../components/helmet";

const About = () => {
  const FadeInSection = ({ children }) => {
    useScrollStates();

    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <>
      <Helmet
        title="About Us | Little Learners Preschool in Blackheath, London"
        description="Meet Sylwia and the team at Little Learners Preschool. Learn more about our ethos, leadership, and what makes our nurturing environment so special for children aged 2–4."
        keywords="About Little Learners, preschool staff, Blackheath nursery, early years education, meet the team"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Preschool",
          name: "Little Learners Preschool",
          description:
            "A nurturing and safe preschool in Blackheath, London, led by qualified educators offering high-quality early years education for 2-4 year olds.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "25-33 Brandram Road",
            addressLocality: "London",
            postalCode: "SE13 5RT",
            addressCountry: "UK",
          },
        }}
      />
      <div className="about-page">
        <section className="hero">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              About Little Learners
            </div>
            <h1 className="main-title">Sylwia and the Team</h1>
            <p>
              Little Learners is a preschool in Blackheath/Lee, welcoming
              children aged 2 to 4. We provide a smooth, nurturing start to
              early education.
            </p>
            <div className="btn-container">
              <Button text="Contact us" link="/contact-us" />
            </div>
          </div>
          <img
            src={hero}
            alt="Little Learners preschool, nursey in Blackheath, London"
            className="about-image"
            loading="lazy"
          />
        </section>
        <FadeInSection>
          <section className="second-section">
            <img
              src={aboutBody}
              alt="background image"
              className="about-body"
            />
            <AboutCards />
          </section>
        </FadeInSection>

        <section className="third-section">
          <FadeInSection>
            <TextAndImage
              subtitle="Meet the Founder"
              title="Sylwia Ferreday"
              p1="Sylwia Ferreday is the heart behind Little Learners Preschool. A qualified primary and secondary school teacher with over 10 years of experience, Sylwia founded Little Learners to offer children aged 2–4 a safe, joyful, and enriching start to their learning journey."
              p2="A firm believer in play-based learning rooted in the Early Years Foundation Stage (EYFS), Sylwia brings together professional expertise and genuine warmth. As a mum to a teenager, she understands the trust families place in early years educators—and she builds that trust every day through close parent partnerships, calm leadership, and personalised care."
              p3="Outside the preschool, Sylwia is a woman of many passions. She’s a 1st Dan black belt in Kyokushinkai Karate, an avid reader, a regular runner, and a devoted dog lover. These interests reflect her calm focus, sense of discipline, and joy in movement and discovery—qualities she also nurtures in the children she teaches."
              p4="At Little Learners, Sylwia creates more than just a setting. She creates a community—one where curiosity is celebrated, friendships blossom, and children grow with confidence."
              text="Apply to Join"
              link="/Application_to_Join_April_2018.doc"
              isInternal={false}
              download={true}
              img={about1}
              reverse
            />
          </FadeInSection>
          <FadeInSection>
            <TextAndImage
              subtitle="little learners"
              title="Building Bright Futures"
              p1=" Our exciting programme follows the Early Years Foundation Stage, balancing structured play and small group activities to build confidence and prepare children for school. Each child has a personalised online Learning Journey from day one."
              p2="Led by a qualified primary school teacher and dedicated staff, every session combines child-led and teacher-guided learning to help each child reach their full potential."
              text="Learning & Playing"
              link="/learning-and-playing"
              img={about2}
            />
          </FadeInSection>
        </section>
        <FadeInSection>
          <section className="policy-section">
            <CallToAction
              title="Our Policies and Procedures"
              p1="Download and view our documents here"
              text1="Policies & Procedures"
              link1="/policies-and-procedures"
            />
          </section>
        </FadeInSection>
        <section className="fourth-section">
          <FadeInSection>
            <TextAndImage
              subtitle="Teaching & learning"
              title="Our Ethos"
              p1="At Little Learners, we believe every child is unique and full of potential. We support their growth by recognising and celebrating their individuality."
              p2="We know children thrive when they’re free to learn at their own pace, in a space where they feel happy, safe, and understood."
              text="Learning & Playing"
              link="/learning-and-playing"
              img={about3}
              reverse
            />
          </FadeInSection>
          <FadeInSection>
            <TextAndImage
              subtitle="building relationships"
              title="Parent Partnerships"
              p1="At Little Learners, we know that parents know their children best. That’s why we value strong partnerships built on trust, open communication, and shared understanding to support each child’s learning journey."
              p2="Each child is assigned a dedicated key teacher from their first day. This special bond helps us understand how your child learns, grows, and explores their interests—creating a more personalised experience."
              p3="We encourage two-way communication through regular chats at drop-off, pick-up, or by phone when needed. We always welcome feedback and respect each family’s values, culture, and individual needs."
              text="apply to join"
              link="/Application_to_Join_April_2018.doc"
              isInternal={false}
              download={true}
              img={about4}
            />
          </FadeInSection>
        </section>
        <FadeInSection>
          <section className="fith-section">
            <CallToAction
              title="Progress Updates"
              p1="We provide written progress checks for two-year-olds, highlighting development in key learning areas like communication, creativity, and overall growth."
             
              text1="contact us"
              link1="/contact-us"
              display="none"
            />
          </section>
        </FadeInSection>
      </div>
    </>
  );
};

export default About;
