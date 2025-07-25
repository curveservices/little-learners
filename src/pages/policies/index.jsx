import React from 'react'
import Button from '../../components/button';
import hero from "../../assets/images/documents.webp";
import useScrollStates from '../../components/scrollState';
import "./index.scss";
import CallToAction from '../../components/cta';

const Policies = () => {
  const FadeInSection = ({ children }) => {
    useScrollStates();

    return <div className={`fade-in-on-scroll `}>{children}</div>;
  };
  return (
    <div className="policy-page">
      <section className="hero">
        <div className="text-box">
          <div className="subtitle">
            <div className="indent"></div>
            important documents
          </div>
          <h1 className="main-title">Policies & Procedures</h1>
          <p>
            We’re committed to transparency and safety. Bellow you’ll find all
            our up-to-date policies and procedures, so you can feel informed,
            confident, and supported every step of the way.
          </p>
          <Button text="Apply to Join" />
        </div>
        <img
          src={hero}
          alt="Little Learners preschool in Blackheath, London"
          className="policy-img"
        />
      </section>
      <FadeInSection>
        <section className="second-section">
          <div className="text-box">
            <div className="subtitle">
              <div className="indent"></div>
              downloadable documents
            </div>
            <h2>All Of Our Documents</h2>
          </div>
          <div className="document-list">
            <ul>
              <li>
                <a href="" download={true}>
                  Chilrdens rights and entitlements
                </a>
              </li>
              <li>
                <a href="" download={true}>
                  Safeguarding children young people and vurnerable adults
                </a>
              </li>
              <li>
                <a href="" download={true}>Looked After Children</a>
              </li>
              <li>
                <a href="" download={true}>Uncollected Child</a>
              </li>
              <li>
                <a href="" download={true}>Missing Child</a>
              </li>
              <li>
                <a href="" download={true}>Online Safety</a>
              </li>
              <li>
                <a href="" download={true}>Employment</a>
              </li>
              <li>
                <a href="" download={true}>Student Placements</a>
              </li>
              <li>
                <a href="" download={true}>First Aid</a>
              </li>
              <li>
                <a href="" download={true}>Induction of Employees and Volunteers</a>
              </li>
              <li>
                <a href="" download={true}>The Role of the Key Person and Settling In</a>
              </li>
              <li>
                <a href="" download={true}>Staffing (group provision)</a>
              </li>
              <li>
                <a href="" download={true}>Administering Medicines</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="" download={true}>
                  Managing Children who are Sick Infectious or with Allergies
                </a>
              </li>
              <li>
                <a href="" download={true}>
                  Recording and Reporting of Accidents and Incidents
                </a>
              </li>
              <li>
                <a href="" download={true}>Nappy Changing</a>
              </li>
              <li>
                <a href="" download={true}>Food and Drink</a>
              </li>
              <li>
                <a href="" download={true}>Individule Health Plan</a>
              </li>
              <li>
                <a href="" download={true}>Promoting Positive Behaviour</a>
              </li>
              <li>
                <a href="" download={true}>Health and Safety General Standards</a>
              </li>
              <li>
                <a href="" download={true}>
                  Maintaining Childrens Safety and Security on Premises
                </a>
              </li>
              <li>
                <a href="" download={true}>Risk Assessment</a>
              </li>
              <li>
                <a href="" download={true}>Fire Safety and Emergency Evacuation</a>
              </li>
              <li>
                <a href="" download={true}>No Smoking</a>
              </li>
              <li>
                <a href="" download={true}>Staff Safety including Home Visits</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="" download={true}>Supporting Children with SEN</a>
              </li>
              <li>
                <a href="" download={true}>
                  Valuing Diversity and Promoting Inclusion and Equality
                </a>
              </li>
              <li>
                <a href="" download={true}>British Values</a>
              </li>
              <li>
                <a href="" download={true}>Early Years Prospectus</a>
              </li>
              <li>
                <a href="" download={true}>Sample Privacy Notice</a>
              </li>
              <li>
                <a href="" download={true}>Admissions October</a>
              </li>
              <li>
                <a href="" download={true}>Parental Involvement</a>
              </li>
              <li>
                <a href="" download={true}>Childrens Records April</a>
              </li>
              <li>
                <a href="" download={true}>Provider Records April</a>
              </li>
              <li>
                <a href="" download={true}>Transfer of Records to School</a>
              </li>
              <li>
                <a href="" download={true}>Information Sharing</a>
              </li>
              <li>
                <a href="" download={true}>Working in Partnership with Other Agencies</a>
              </li>
              <li>
                <a href="" download={true}>Making a Complaint</a>
              </li>
              <li>
                <a href="" download={true}>Childcare Terms and Conditions</a>
              </li>
              <li>
                <a href="" download={true}>Notification of Leaving Form</a>
              </li>
            </ul>
          </div>
        </section>
      </FadeInSection>
        <CallToAction
          title="Open Times"
          p1="Monday to Friday 8.30am - 4.00pm during term time"
          text1="Term Times"
          link1="https://lewisham.gov.uk/myservices/education/schools/term-dates/term-dates-25-26"
          text2="Apply to Join"
        />
    </div>
  );
}

export default Policies;
