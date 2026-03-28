import React from "react";
import Button from "../button";

const TermCards = () => {
  const terms = [
    {
      year: "2025–2026",
      data: [
        {
          term: "Autumn ",
          weeks: "14 weeks",
          dates1: "1st September to  24th October",
          dates2: "Half Term 27th - 31st October",
          dates3: "3rd November to 19th December",
        },
        {
          term: "Spring ",
          weeks: "11 weeks",
          dates1: "5th January to 13th February",
          dates2: "Half Term 16th - 20th February",
          dates3: "23rd February to 27th March",
        },
        {
          term: "Summer ",
          weeks: "13 weeks",
          dates1: "13th April to 22nd May",
          dates2: "Half Term 25th - 29th May",
          dates3: "1st June to 20th July",
        },
      ],
    },
    {
      year: "2026–2027",
      data: [
        {
          term: "Autumn ",
          weeks: "14 weeks",
          dates1: "2nd September to 23rd October",
          dates2: "Half Term 26th - 30th October",
          dates3: "2nd November to 18th December",
        },
        {
          term: "Spring ",
          weeks: "12 weeks",
          dates1: "4th January to 12th February",
          dates2: "Half Term 15th - 19th February",
          dates3: "22nd February to 25th March",
        },
        {
          term: "Summer ",
          weeks: "12 weeks",
          dates1: "12th April to 28th May",
          dates2: "Half Term 31st - 4th June",
          dates3: "7th June to 22nd July",
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
                  <li  className="tdates"> {t.dates1}</li>
                  <li className="tdates">{t.dates2}</li>
                  <li className="tdates">{t.dates3}</li>
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
