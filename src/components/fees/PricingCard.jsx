const PricingCard = ({ title, data }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>

      <table>
        <thead>
          <tr>
            <th>Session</th>
            <th>Time</th>
            <th>Weekly</th>
            <th>Term</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingCard;
