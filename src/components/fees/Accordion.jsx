import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="header" onClick={() => setOpen(!open)}>
        <h4>{title}</h4>
        <span>{open ? "-" : "+"}</span>
      </div>

      {open && <p>{content}</p>}
    </div>
  );
};

const Accordion = () => {
  return (
    <section className="accordion container">
      <AccordionItem title="Deposits" content="£300 refundable deposit." />
      <AccordionItem
        title="Notice Period"
        content="Full term notice required."
      />
      <AccordionItem title="Absence Policy" content="No refunds for absence." />
      <AccordionItem title="Late Fees" content="£10 per day late fee." />
      <AccordionItem
        title="Payment Methods"
        content="Bank Transfer & Vouchers."
      />
    </section>
  );
};

export default Accordion;
