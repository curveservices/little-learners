import { useState } from "react";
import Accordion from "./index";

const AccordionGroup = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="accordion-container">
      <div className="accordion-left">
        <h2 className="accordion-title">Notices and Policies</h2>
        <Accordion
          title="Deposits & Jonining"
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <ul>
            <li>
              There is no joining or administration fee for children receiving
              15 hours or 30 hours of funded childcare
            </li>
            <li>
              A refundable deposit (please see notice period) of £300 is
              required{" "}
            </li>
            <li>
              Fees are to be paid by the last day of half term, a fee of £10 per
              day will be charged for late payement.
            </li>
          </ul>
        </Accordion>
        <Accordion
          title="Notice Period"
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          <ul>
            <li>
              Please note that we require full term notice if you wish to cancel
              your child’s access to the 15h and/or 30h government funded hours
            </li>
            <li>we do not split the funding between other settings.</li>
          </ul>
        </Accordion>
        <Accordion
          title="Absence Policy"
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          <ul>
            <li>There are no refunds for absence.</li>
            <li>
              No refund will be given in the event of a child’s absence due to
              illness, holiday or any other reason.
            </li>
          </ul>
        </Accordion>
        <Accordion
          title="Payment Methods"
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          <ul>
            <li>
              Invoices can be settled by Bank Transfer or Childcare Vouchers.
            </li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionGroup;
