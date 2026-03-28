import React, { useState } from "react";
import PricingCard from "./PricingCard";

const PricingTabs = () => {
  const [active, setActive] = useState("noFunding");

  return (
    <section className="pricing">
      <div className="tabs">
        <button className="tab" onClick={() => setActive("noFunding")}>No Funding</button>
        <button className="tab" onClick={() => setActive("15h")}>15 Hours</button>
        <button className="tab" onClick={() => setActive("30h")}>30 Hours</button>
      </div>

      <div className="tab-content">
        {active === "noFunding" && (
          <PricingCard
            title="Session Fees (No Funding)"
            data={[
              ["Morning", "8:30am–1:00pm", "£53", "£1272"],
              ["Full Day", "8:30am–4:00pm", "£82", "£1968"],
              ["Afternoon", "1:00pm–4:00pm", "£33", "£792"],
            ]}
          />
        )}

        {active === "15h" && (
          <>
            <PricingCard
              title="2–3 Years"
              data={[
                ["Morning", "8:30am–1:00pm", "£23", "£276"],
                ["Full Day", "8:30am–4:00pm", "£22", "£264"],
                ["Afternoon", "1:00pm–4:00pm", "£7", "£84"],
              ]}
            />

            <PricingCard
              title="3–4 Years"
              data={[
                ["Morning", "8:30am–1:00pm", "£55", "£660"],
                ["Full Day", "8:30am–4:00pm", "£53", "£636"],
                ["Afternoon", "1:00pm–4:00pm", "£12", "£144"],
              ]}
            />
          </>
        )}

        {active === "30h" && (
          <>
            <PricingCard
              title="2–3 Years"
              data={[["4 Days", "8:30am–4:00pm", "£33", "£396"]]}
            />

            <PricingCard
              title="3–4 Years"
              data={[["4 Days", "8:30am–4:00pm", "£77", "£924"]]}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default PricingTabs;
