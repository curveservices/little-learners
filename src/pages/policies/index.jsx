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
          <Button text="Apply to Join" link="/Application_to_join.doc" />
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
                <a href="/Introduction.docx" download={true}>
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="/Policy_procedures_implementation_and_review_policy.docx"
                  download={true}
                >
                  Policy procedures implementation and review policy
                </a>
              </li>
              <li>
                <a href="/Health_and_safety_policy.docx" download={true}>
                  Health and safety policy
                </a>
              </li>
              <li>
                <a href="/Risk_assessment.docx" download={true}>
                  Risk assessment
                </a>
              </li>
              <li>
                <a href="/Staff_personal_safety.docx" download={true}>
                  Staff personal safety
                </a>
              </li>
              <li>
                <a
                  href="/Threats_and_abuse_towards_staff_and_volunteers.docx"
                  download={true}
                >
                  Threats and abuse towards staff and volunteers
                </a>
              </li>
              <li>
                <a
                  href="/Entrances_and_approach_to_the_building.docx"
                  download={true}
                >
                  Entrances and approach to the building
                </a>
              </li>
              <li>
                <a href="/Children_bathrooms.docx" download={true}>
                  Children bathrooms
                </a>
              </li>
              <li>
                <a href="/Outdoors.docx" download={true}>
                  Outdoors
                </a>
              </li>
              <li>
                <a
                  href="/Control_of_Substances_Hazardous_to_Health.docx"
                  download={true}
                >
                  Control of Substances Hazardous to Health
                </a>
              </li>
              <li>
                <a href="/Manual_handling.docx" download={true}>
                  Manual handling
                </a>
              </li>
              <li>
                <a href="/Animals_and_pets.docx" download={true}>
                  Animals and pets
                </a>
              </li>
              <li>
                <a
                  href="/Notifiable_incident_non_child_protection.docx"
                  download={true}
                >
                  Notifiable incident non child protection
                </a>
              </li>
              <li>
                <a
                  href="/Terrorist_threat_attack_and_lock_down.docx"
                  download={true}
                >
                  Terrorist threat attack and lock down
                </a>
              </li>
              <li>
                <a href="/Fire_safety_policy.docx" download={true}>
                  Fire safety policy
                </a>
              </li>
              <li>
                <a
                  href="/Food_for_play_and_cooking_activities.docx"
                  download={true}
                >
                  Food for play and cooking activities
                </a>
              </li>
              <li>
                <a href="/Health_policy.docx" download={true}>
                  Health policy
                </a>
              </li>
              <li>
                <a
                  href="/Accidents_and_emergency_treatment.docx"
                  download={true}
                >
                  Accidents and emergency treatment
                </a>
              </li>
              <li>
                <a href="/Administration_of_medicine.docx" download={true}>
                  Administration of medicine
                </a>
              </li>
              <li>
                <a href="/Health_care_plan.docx" download={true}>
                  Health care plan
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/Life_saving_medication_and_invasive_treatments.docx"
                  download={true}
                >
                  Life saving medication and invasive treatments
                </a>
              </li>
              <li>
                <a href="/Allergies_and_food_intolerance.docx" download={true}>
                  Allergies and food intolerance
                </a>
              </li>
              <li>
                <a href="/Poorly_children.docx" download={true}>
                  Poorly children
                </a>
              </li>
              <li>
                <a href="/Infection_control.docx" download={true}>
                  Infection control
                </a>
              </li>
              <li>
                <a href="/Oral_health.docx" download={true}>
                  Oral health
                </a>
              </li>
              <li>
                <a
                  href="/Promoting_inclusion_equality_and_valuing_diversity.docx"
                  download={true}
                >
                  Promoting inclusion equality and valuing diversity
                </a>
              </li>
              <li>
                <a
                  href="/Safeguarding_children_young_people_vulnerable_adults_policy.docx"
                  download={true}
                >
                  Safeguarding children young people vulnerable adults policy
                </a>
              </li>
              <li>
                <a
                  href="/Responding_to_safeguarding_or_child_protection_concerns.docx"
                  download={true}
                >
                  Responding to safeguarding or child protection concerns
                </a>
              </li>
              <li>
                <a
                  href="/Child_welfare_and_protection_summary.docx"
                  download={true}
                >
                  Child welfare and protection summary
                </a>
              </li>
              <li>
                <a
                  href="/Low_level_concerns_allegations_of_harm_or_abuse_against_staff.docx"
                  download={true}
                >
                  Low level concerns allegations of harm or abuse against staff
                </a>
              </li>
              <li>
                <a
                  href="/Visitor_or_intruder_on_the_premises.docx"
                  download={true}
                >
                  Visitor or intruder on the premises
                </a>
              </li>
              <li>
                <a href="/Uncollected_child.docx" download={true}>
                  Uncollected child
                </a>
              </li>
              <li>
                <a href="/Missing_child.docx" download={true}>
                  Missing child
                </a>
              </li>
              <li>
                <a href="/Incapacitated_parent.docx" download={true}>
                  Incapacitated parent
                </a>
              </li>
              <li>
                <a href="/Death_of_a_child_on_site.docx" download={true}>
                  Death of a child on site
                </a>
              </li>
              <li>
                <a href="/Looked_after_children.docx" download={true}>
                  Looked after children
                </a>
              </li>
              <li>
                <a href="/E_safety.docx" download={true}>
                  E safety
                </a>
              </li>
              <li>
                <a href="/Record_keeping_policy.docx" download={true}>
                  Record keeping policy
                </a>
              </li>
              <li>
                <a
                  href="/Childrens_records_and_data_protection.docx"
                  download={true}
                >
                  Childrens records and data protection
                </a>
              </li>
              <li>
                <a href="/Privacy_notice.docx" download={true}>
                  Privacy notice
                </a>
              </li>
              <li>
                <a
                  href="/Confidentiality_recording_and_sharing_information.docx"
                  download={true}
                >
                  Confidentiality recording and sharing information
                </a>
              </li>
              <li>
                <a href="/Client_access_to_records.docx" download={true}>
                  Client access to records
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/Transfer_of_records.docx" download={true}>
                  Transfer of records
                </a>
              </li>
              <li>
                <a
                  href="/Staff_volunteers_and_students_policy.docx"
                  download={true}
                >
                  Staff volunteers and students policy
                </a>
              </li>
              <li>
                <a href="/Staff_deployment.docx" download={true}>
                  Staff deployment
                </a>
              </li>
              <li>
                <a
                  href="/Deployment_of_volunteers_and_parent_helpers.docx"
                  download={true}
                >
                  Deployment of volunteers and parent helpers
                </a>
              </li>
              <li>
                <a href="/Student_placement.docx" download={true}>
                  Student placement
                </a>
              </li>
              <li>
                <a href="/Early_years_practice_policy.docx" download={true}>
                  Early years practice policy
                </a>
              </li>
              <li>
                <a href="/Waiting_list_and_admissions.docx" download={true}>
                  Waiting list and admissions
                </a>
              </li>
              <li>
                <a
                  href="/About_our_childcare_and_early_education.docx"
                  download={true}
                >
                  About our childcare and early education
                </a>
              </li>
              <li>
                <a
                  href="/Childcare_and_early_education_registration_form.docx"
                  download={true}
                >
                  Childcare and early education registration form
                </a>
              </li>
              <li>
                <a href="/Childcare_Terms_and_Conditions.docx" download={true}>
                  Childcare Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="/Childcare_and_early_education_terms_conditions.docx"
                  download={true}
                >
                  Childcare and early education terms conditions
                </a>
              </li>
              <li>
                <a href="/Absence.docx" download={true}>
                  Absence
                </a>
              </li>
              <li>
                <a
                  href="/Prime_times_the_role_of_the_key_person.docx"
                  download={true}
                >
                  Prime times the role of the key person
                </a>
              </li>
              <li>
                <a
                  href="/Prime_times_Settling_in_and_transitions.docx"
                  download={true}
                >
                  Prime times Settling in and transitions
                </a>
              </li>
              <li>
                <a
                  href="/Establishing_childrens_starting_points.docx"
                  download={true}
                >
                  Establishing childrens starting points
                </a>
              </li>
              <li>
                <a href="/Promoting_positive_behaviour.docx" download={true}>
                  Promoting positive behaviour
                </a>
              </li>
              <li>
                <a
                  href="/Identification_assessment_support_for_children_with_SEND.docx"
                  download={true}
                >
                  Identification assessment support for children with SEND
                </a>
              </li>
              <li>
                <a
                  href="/Prime_times_Transition_to_school.docx"
                  download={true}
                >
                  Prime times Transition to school
                </a>
              </li>
              <li>
                <a href="/Progress_check_at_age_two.docx" download={true}>
                  Progress check at age two
                </a>
              </li>
              <li>
                <a
                  href="/Working_in_partnership_with_parents_other_agencies.docx"
                  download={true}
                >
                  Working in partnership with parents other agencies
                </a>
              </li>
              <li>
                <a href="/Complaints_procedure_for_parents_and_service_users.docx">
                  Complaints procedure for parents and service users
                </a>
              </li>
            </ul>
          </div>
        </section>
      </FadeInSection>
      <CallToAction
        title="Open Times"
        p1="Monday to Thursday 8.30am - 4.00pm during term time"
        text1="Term Times"
        link1="https://lewisham.gov.uk/myservices/education/schools/term-dates/term-dates-25-26"
        text2="Apply to Join"
      />
    </div>
  );
}

export default Policies;
