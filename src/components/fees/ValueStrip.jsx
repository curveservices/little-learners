import React from "react";

const ValueStrip = () => {
  const items = [
    {
      title: "15 & 30 Hour Funding",
      text: "Government funded places available",
    },
    {
      title: "Flexible Sessions",
      text: "Morning, afternoon & full day options",
    },
    {
      title: "Small Groups",
      text: "Maximum of 16 children per session",
    },
    {
      title: "Enriched Learning",
      text: "Activities that support development & wellbeing",
    },
  ];

  return (
    <section className="value-strip container">
      <div className="value-grid">
        {items.map((item, i) => (
          <div className="value-card" key={i}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueStrip;
