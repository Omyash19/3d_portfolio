import { useState, useCallback } from "react";
import "./styles/PortfolioCarousel.css";
import "./styles/Certifications.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import WorkImage from "./WorkImage";

type SlideDirection = "next" | "prev";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    image: "/images/placeholder.webp",
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    image: "/images/placeholder.webp",
  },
  {
    title: "AWS Academy Graduate: Data Engineering",
    issuer: "AWS Academy",
    image: "/images/aws_data_engineering.webp",
  },
  {
    title: "Data Analysis Using Python",
    issuer: "IBM",
    image: "/images/ibm_data_analysis_python.webp",
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    image: "/images/anthropic_ai_fluency.webp",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    image: "/images/cisco_data_analytics.webp",
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    image: "/images/jpmorgan_quant_research.webp",
  },
  {
    title: "Markets Quantitative Analysis (MQA) Job Simulation",
    issuer: "Citi",
    image: "/images/citi_mqa.webp",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    image: "/images/deloitte_data_analytics.webp",
  },
  {
    title: "Data Labeling Job Simulation",
    issuer: "Forage",
    image: "/images/forage_data_labeling.webp",
  },
];

const Certifications = () => {
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
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
    goToSlide(newIndex, "prev");
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex, "next");
  }, [currentIndex, goToSlide]);

  const certification = certifications[currentIndex];

  return (
    <section className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>
          Certifications <span>&</span> Training
        </h2>

        <div className="portfolio-book-carousel portfolio-carousel">
          <div className="portfolio-carousel-stage cert-stage">
            <div
              key={`${certification.title}-${currentIndex}`}
              className={`portfolio-carousel-card portfolio-flip-${direction}`}
            >
              <article className="portfolio-project-card cert-card">
                <div className="portfolio-project-media">
                  <div className="portfolio-project-badges">
                    <span className="portfolio-project-badge">
                      {certification.issuer}
                    </span>
                    <span className="portfolio-project-count">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(
                        certifications.length
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <WorkImage
                    image={certification.image}
                    alt={certification.title}
                  />
                </div>

                <div className="portfolio-project-strip portfolio-project-strip-title">
                  <span className="portfolio-project-label">Title</span>
                  <h4>{certification.title}</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="portfolio-nav-row">
            <div className="portfolio-arrow-group">
              <button
                className="carousel-arrow"
                onClick={goToPrev}
                aria-label="Previous certification"
                data-cursor="disable"
                disabled={isAnimating}
              >
                <MdArrowBack />
              </button>
              <button
                className="carousel-arrow"
                onClick={goToNext}
                aria-label="Next certification"
                data-cursor="disable"
                disabled={isAnimating}
              >
                <MdArrowForward />
              </button>
            </div>

            <div className="portfolio-carousel-status" aria-live="polite">
              <span>Flip through certificates</span>
              <span className="portfolio-carousel-divider" />
              <span>{certification.issuer}</span>
            </div>

            <div className="carousel-dots">
              {certifications.map((item, index) => (
                <button
                  key={item.title}
                  className={`carousel-dot ${
                    index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                  onClick={() =>
                    goToSlide(index, index > currentIndex ? "next" : "prev")
                  }
                  aria-label={`Go to certification ${index + 1}`}
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

export default Certifications;
