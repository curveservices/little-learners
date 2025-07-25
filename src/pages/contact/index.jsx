import React, { Suspense } from "react";
import LeafletMap from "../../components/leafletMap";
import Socials from "../../components/socials";
import LoadingSpinner from "../../components/loadingSpinner";
import "./index.scss";
import Helmet from "../../components/helmet";

const Contact = () => {
  return (
    <>
      <Helmet
        title="Contact Us | Little Learners Preschool Blackheath"
        description="Get in touch with Little Learners Preschool in Blackheath. Find our address, phone number, and email, or visit us to learn more about our setting."
        keywords="contact preschool Blackheath, nursery phone number, how to apply to preschool, Little Learners contact info"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Preschool",
          "name": "Little Learners Preschool",
          "telephone": "07595 120744",
          "email": "info@littlelearnersplaygroup.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "25-33 Brandram Road",
            "addressLocality": "London",
            "postalCode": "SE13 5RT",
            "addressCountry": "UK",
          },
          "url": "https://www.littlelearnersplaygroup.com/contact-us",
        }}
      />
      <div className="contact-page">
        <section className="text-box">
          <div className="subtitle">
            <div className="indent"></div>
            get in touch
          </div>
          <h1 className="main-title">Contact Us</h1>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name" id="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" id="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your-email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" id="subject">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="btn-container">
                <input className="submit-button" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </section>
        <div className="info-map">
          <div className="subtitle">Little Learners</div>
          <br />
          Brandram Road Community Centre
          <br />
          25-33 Brandram Road
          <br />
          London, SE13 5RT
          <br />
          <Socials />
          <span>
            <a href="mailto:info@littlelearnersplaygroup.com">
              info@littlelearnersplaygroup.com
            </a>
            <a href="tel:07595120744">07595 120744</a>
          </span>
        </div>
        <div className="map-wrap">
          <Suspense fallback={<LoadingSpinner />}>
            <LeafletMap />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Contact;
