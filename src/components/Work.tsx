import { useState, useCallback } from "react";
import "./styles/PortfolioCarousel.css";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type SlideDirection = "next" | "prev";

const projects = [
  {
    title: "MEET.AI",
    category: "Intelligent Video Communication Platform",
    tools: "Python, ML, NLP, Real-Time Processing",
    image: "/images/meetai.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "European Football Club Analytics",
    category: "BI Dashboard for Transfer Market Valuation",
    tools: "Python, PostgreSQL (Neon.tech), Power BI",
    image: "/images/football_bi.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "MarketSense",
    category: "Global Tech Job Intelligence Terminal",
    tools: "Python, Streamlit, NLP, ETL",
    image: "/images/marketsense.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Hybrid Music Recommender",
    category: "High-Fidelity Recommendation Engine",
    tools: "PySpark, FastAPI, Spotify API, Million Song Dataset",
    image: "/images/music_recommender.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Job Market Intelligence Pipeline",
    category: "Cloud-Native ETL Automation",
    tools: "Apache Airflow, AWS (S3, RDS), Streamlit",
    image: "/images/job_market_pipeline.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Data Quality & Anomaly Monitor",
    category: "Automated Pipeline Validation",
    tools: "Great Expectations, Snowflake, Slack Webhooks, Airflow",
    image: "/images/data_quality_monitor.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Supply Chain Disruption Predictor",
    category: "Maritime Delay Forecasting",
    tools: "Python, XGBoost, GCP BigQuery, Tableau",
    image: "/images/supply_chain_predictor.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Customer Churn & LTV Engine",
    category: "Retention Analytics Pipeline",
    tools: "Python (Lifetimes, RFM), Airflow, Power BI",
    image: "/images/churn_ltv_engine.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Smart Grid Demand Forecaster",
    category: "48-Hour Energy Load Forecasting",
    tools: "Prophet/ARIMA, AWS Lambda, Streamlit",
    image: "/images/smart_grid_forecaster.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Marketing Mix Modeling Optimizer",
    category: "Incremental ROAS Attribution",
    tools: "Robyn/LightweightMMM, dbt Core, Looker Studio",
    image: "/images/mmm_optimizer.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Algorithmic Pricing Engine",
    category: "Dynamic Listing Price Monitor",
    tools: "BeautifulSoup, MongoDB Atlas, Plotly Dash",
    image: "/images/pricing_engine.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Employee Attrition Analyzer",
    category: "HR Flight-Risk Prediction",
    tools: "Random Forest, SHAP, Tableau Public",
    image: "/images/attrition_analyzer.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "A/B Testing Evaluation Engine",
    category: "Self-Serve Statistical Significance Tool",
    tools: "SciPy, Statsmodels, Streamlit, PostgreSQL",
    image: "/images/ab_testing_engine.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Crop Yield Forecaster",
    category: "Precision Agriculture Spatial Analytics",
    tools: "GeoPandas, TensorFlow, PostGIS, Kepler.gl",
    image: "/images/crop_yield_forecaster.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "India Post Pincode Verification",
    category: "Fuzzy-Matching Mail Sorting System",
    tools: "Python, Machine Learning, NLP, Fuzzy Matching",
    image: "/images/pincode_verification.webp",
    link: "https://github.com/Omyash19",
  },
  {
    title: "Hospital Readmission Risk Modeler",
    category: "Clinical ML Classification System",
    tools: "Scikit-learn, SHAP, FastAPI, MIMIC-III Dataset",
    image: "/images/hospital_readmission.webp",
    link: "https://github.com/Omyash19",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number, nextDirection: SlideDirection) => {
      if (isAnimating || index === currentIndex) return;
      setDirection(nextDirection);
      setIsAnimating(true);
      setCurrentIndex(index);
      window.setTimeout(() => setIsAnimating(false), 720);
    },
    [currentIndex, isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex, "prev");
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex, "next");
  }, [currentIndex, goToSlide]);

  const project = projects[currentIndex];

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="portfolio-book-carousel portfolio-carousel">
          <div className="portfolio-carousel-stage">
            <div
              key={`${project.title}-${currentIndex}`}
              className={`portfolio-carousel-card portfolio-flip-${direction}`}
            >
              <article className="portfolio-project-card work-card">
                <div className="portfolio-project-media">
                  <div className="portfolio-project-badges">
                    <span className="portfolio-project-badge">
                      {project.category}
                    </span>
                    <span className="portfolio-project-count">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(
                        projects.length
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <WorkImage
                    image={project.image}
                    alt={project.title}
                    link={project.link}
                  />
                </div>

                <div className="portfolio-project-strip portfolio-project-strip-title">
                  <span className="portfolio-project-label">Title</span>
                  <h4>{project.title}</h4>
                </div>

                <div className="portfolio-project-strip portfolio-project-strip-stack">
                  <span className="portfolio-project-label">Tech Stack</span>
                  <p>{project.tools}</p>
                </div>
              </article>
            </div>
          </div>

          <div className="portfolio-nav-row">
            <div className="portfolio-arrow-group">
              <button
                className="carousel-arrow"
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
                disabled={isAnimating}
              >
                <MdArrowBack />
              </button>
              <button
                className="carousel-arrow"
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
                disabled={isAnimating}
              >
                <MdArrowForward />
              </button>
            </div>

            <div className="portfolio-carousel-status" aria-live="polite">
              <span>Flip through projects</span>
              <span className="portfolio-carousel-divider" />
              <span>{project.title}</span>
            </div>

            <div className="carousel-dots">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  className={`carousel-dot ${
                    index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                  onClick={() =>
                    goToSlide(index, index > currentIndex ? "next" : "prev")
                  }
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
