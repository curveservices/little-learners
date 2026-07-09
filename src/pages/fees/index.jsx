import React from "react";
import "./index.scss";

import hero from "../../assets/images/documents.webp";
import aboutBody from "../../assets/images/about-body.webp";
import useScrollStates from "../../components/scrollState";
import PricingTabs from "../../components/fees/PricingTabs";
import TermCards from "../../components/fees/TermCards";
import Helmet from "../../components/helmet";
import Button from "../../components/button";
import AboutCards from "../../components/cards/aboutCards";
import funded from "../../assets/images/funded.webp";
import clock from "../../assets/images/clock.webp";
import arrow from "../../assets/images/double-arrow.webp";
import groups from "../../assets/images/user.webp";
import learning from "../../assets/images/read.webp";
import Accordion from "../../components/accordion/fees";
import splash from "../../assets/images/abstract-background.webp";
import background from "../../assets/images/splash.webp";
import img1 from "../../assets/images/card1.webp";
import img2 from "../../assets/images/dog.webp";
import img3 from "../../assets/images/gardening.webp";
import img4 from "../../assets/images/pe.webp";
import img5 from "../../assets/images/group.webp";
import img6 from "../../assets/images/bsl.webp";
import IncludedGrid from "../../components/fees/IncludeGrid";
import CallToAction from "../../components/cta";



const valueData = [
  {
    icon: clock,
    title: "15 & 30 Hour Funding",
    description: "Government funded places available",
    color: "var(--primary)",
  },
  {
    icon: arrow,
    title: "Flexible Sessions",
    description: "Morning, afternoon & full day options",
    color: "var(--secondary)",
  },
  {
    icon: groups,
    title: "Small Groups",
    description: "Maximum of 16 children per session",
    color: "#57C0B3",
  },
  {
    icon: learning,
    title: "Enriched Learning",
    description: "Activities that support development & wellbeing",
    color: "#0AB7D5",
  },
];

const includedItems = [
  {
    title: "Messy & Sensory Play",
    short: "Crafts, messy play & exploration",
    detail:
      "Themed crafts, sensory materials and hands-on activities that spark creativity and curiosity",
    image: img1,
  },
  {
    title: "Dog Care & Interaction",
    short: "Emotional support dog",
    detail:
      "Gentle interaction with a trained support dog to build confidence and emotional wellbeing",
    image: img2,
  },
  {
    title: "Outdoor Play & Gardening",
    short: "Fresh air every day",
    detail:
      "Outdoor exploration and gardening activities that support physical development and wellbeing",
    image: img3,
  },
  {
    title: "Enrichment Activities",
    short: "Yoga, PE & special visits",
    detail:
      "Including yoga, physical education and visiting educators to support development.",
    image: img4,
  },
  {
    title: "Small Group Setting",
    short: "Max 16 children",
    detail: "A calm, nurturing environment with more attention for every child",
    image: img5,
  },
  {
    title: "British Sign Language",
    short: "Early communication skills",
    detail:
      "Introducing BSL to support communication, inclusion and confidence",
    image: img6,
  },
];



const Fees = () => {
    const FadeInSection = ({ children }) => {
    useScrollStates();

    return <div className={`fade-in-on-scroll`}>{children}</div>;
};
    return (
      <>
        <Helmet
          title="Fees & Pricing | Little Learners Preschool Pricing"
          description="Explore 
        our Early Years Foundation Stage curriculum. Discover how we support your child’s growth through structured play, creativity, and positive relationships."
          keywords="preschool blackheath, blackheath nursery, blackheath london,EYFS curriculum, learning through play, preschool education, Little Learners curriculum, early years activities"
          schemaMarkup={{
            "@context": "https://schema.org",
            "@type": "Preschool",
            name: "Little Learners Preschool",
            description:
              "Little Learners offers a balanced curriculum combining structured play and personalised learning for preschool children aged 2–4.",
            educationalLevel: "Preschool",
            url: "https://www.littlelearnerspreschool.uk/learning-and-playing",
          }}
        />
        <div className="fees-page">
          <img className="paint-splash" src={background} alt="" />
          <section className="hero">
            <div className="text-box">
              <div className="subtitle">
                <div className="indent"></div>
                <div>Fees & Pricing</div>
              </div>
              <h1 className="main-title">Flexible Fees for Your Family</h1>
              <p>
                We believe in clear, transparent pricing with flexible options
                to suit your family. Explore our sessions, funded places, and
                what’s included in your child’s experience.
              </p>
              <div className="btn-container">
                <Button
                  isInternal={false}
                  download={true}
                  link="/Application_to_join.doc"
                  text="Apply to Join"
                />
              </div>
            </div>
            <img
              src={hero}
              alt="Little Learners preschool, nursey in Blackheath, London"
              className="policy-img"
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
              <AboutCards items={valueData} />
            </section>
          </FadeInSection>

          {/* WHAT'S INCLUDED */}
          <section className="third-section">
            <FadeInSection>
              <div className="text-box">
                <div className="subtitle">
                  <div className="indent"></div>
                  <div>Times & Pricing</div>
                </div>
                <h2>Session Fees</h2>
              </div>
              <img className="splash" src={splash} alt="Splash image" />
              <PricingTabs />
            </FadeInSection>

            <div className="included-grid">
              <div className="content">
                <IncludedGrid items={includedItems} />
              </div>
            </div>
          </section>
          <FadeInSection>
            <div className="banner block">
              <div className="text">
                <h3 className="title">Free Funded Hours</h3>
                <p>
                  Little Learners Preschool offers government-funded 15 and
                  30-hour early education places for eligible children aged 2 to
                  4 years.
                </p>
                <p>
                  Funded sessions support children aged 2–3 and 3-4 year olds
                  (subject to eligibility criteria). Please contact us to find
                  out more and check your eligibility.
                </p>
                <Button text="contact us" link="contact-us" />
              </div>
              <img
                src={funded}
                alt="Little Learners preschool in Blackheath Lee, London"
                className="banner-img"
              />
            </div>
          </FadeInSection>
          {/* Term Times */}
          <FadeInSection>
            <section className="fourth-section ">
              <TermCards />
            </section>
          </FadeInSection>

          <section className="fith-section">
            <FadeInSection>
              <Accordion />
            </FadeInSection>
          </section>
          {/* CTA */}
          <CallToAction
            title="Ready to Join Little Learners?"
            p1="We’d love to welcome your child."
            text1="Apply to join."
            link="/Application_to_join.doc"
            isInternal={false}
            download={true}
          />
        </div>
      </>
    );
};

export default Fees;
