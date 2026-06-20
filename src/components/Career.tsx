import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Cosmos Sports · Thane</h5>
              </div>
              <h3>Feb–May 2026</h3>
            </div>
            <p>
              Designed and deployed interactive player profile dashboards
              using Power BI, Tableau, and Excel, centralizing performance
              and demographic data for 50+ players. Conducted financial
              analysis on enrollment data to optimize fee structures for
              youth players and coaching staff, improving pricing
              transparency and resource allocation for academy stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
