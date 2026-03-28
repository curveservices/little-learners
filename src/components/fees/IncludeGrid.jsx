import "./included-grid.scss";

const IncludedGrid = ({ items }) => {
  return (
    <section className="included">
      <div className="">
        <div className="text-box">
          <div className="subtitle">
            <div className="indent"></div>
            consumables & provisions
          </div>
          <h2 >What’s Included</h2>
        </div>

        <div className="included__grid">
          {items.map((item, index) => (
            <div
              className={`included__card included__card--${index + 1}`}
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="included__overlay" />

              <div className="included__content">
                <h4>{item.title}</h4>
                <p className="included__short">{item.short}</p>
                <p className="included__detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedGrid;
