import React from "react";
import Button from "../button";

const TermCards = () => {
  const terms = [
    {
      year: "2026–2027",
      data: [
        {
          term: "Autumn ",
          weeks: "14 weeks",
        },
        {
          term: "Spring ",
          weeks: "12 weeks",
        },
        {
          term: "Summer ",
          weeks: "12 weeks",
        },
      ],
    },
    {
      year: "2027–2028",
      data: [
        {
          term: "Autumn ",
          weeks: "14 weeks",
        },
        {
          term: "Spring ",
          weeks: "12 weeks",
        },
        {
          term: "Summer ",
          weeks: "12 weeks",
        },
      ],
    },
  ];

  return (
    <section className="term-cards">
      <div className="term-grid">
        <div className="text-box">
          <div className="subtitle">
            <div className="indent"></div>
            <div>Term dates</div>
          </div>
          <h2>Term Times for 2026 & 2027</h2>
          <p>
            Our term dates are designed to provide a consistent and enriching
            experience for your child. We follow the standard UK school
            calendar, with three terms each year: Autumn, Spring, and Summer.
          </p>
          <Button text="Lewisham term times"
            link="https://lewisham.gov.uk/myservices/education/schools/term-dates/term-dates-25-26"
            isInternal={false}
          />
            
        </div>
        {terms.map((item, i) => (
          <div className="term-card" key={i}>
            <h3>{item.year}</h3>

            <ul>
              {item.data.map((t, idx) => (
                <ul key={idx} className="term-details">
                <li >
                  <span>{t.term}</span>
                    <span>{t.weeks}</span>
                </li>
                </ul>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermCards;
