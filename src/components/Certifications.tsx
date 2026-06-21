import { useState, useCallback } from "react";
import "./styles/PortfolioCarousel.css";
import "./styles/Certifications.css";
import { MdArrowBack, MdArrowForward, MdGridView } from "react-icons/md";
import WorkImage from "./WorkImage";
import PortfolioGridOverlay from "./PortfolioGridOverlay";

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
  const [isGridOpen, setIsGridOpen] = useState(false);

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

  const jumpToSlide = useCallback(
    (index: number) => {
      setDirection(index >= currentIndex ? "next" : "prev");
      setCurrentIndex(index);
      setIsGridOpen(false);
    },
    [currentIndex]
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
    <div
      className="certifications-section"
      id="certifications"
      style={{ paddingTop: "15vh", paddingBottom: "10vh", position: "relative", zIndex: 10 }}
    >
      <div className="certifications-container section-container">
        <h2>
          Certifications <span>&</span> Training
        </h2>

        <div className="portfolio-book-carousel portfolio-carousel">
          <div className="portfolio-carousel-stage portfolio-carousel-stage-compact cert-stage-compact">
            <div
              key={`${certification.title}-${currentIndex}`}
              className={`portfolio-carousel-card portfolio-flip-${direction}`}
            >
              <article className="portfolio-project-card-compact cert-card-compact">
                <div className="portfolio-project-media-compact">
                  <span className="portfolio-project-count">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(
                      certifications.length
                    ).padStart(2, "0")}
                  </span>
                  <WorkImage
                    image={certification.image}
                    alt={certification.title}
                  />
                </div>

                <div className="portfolio-project-info-compact">
                  <span className="portfolio-project-category-tag">
                    {certification.issuer}
                  </span>
                  <h4>{certification.title}</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="portfolio-nav-row portfolio-nav-row-compact">
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
              <button
                className="portfolio-browse-all"
                onClick={() => setIsGridOpen(true)}
                data-cursor="disable"
              >
                <MdGridView />
                <span>Browse all {certifications.length}</span>
              </button>
            </div>

            <div className="portfolio-carousel-status" aria-live="polite">
              <span>Flip through certificates</span>
              <span className="portfolio-carousel-divider" />
              <span>{certification.issuer}</span>
            </div>
          </div>
        </div>
      </div>

      <PortfolioGridOverlay
        isOpen={isGridOpen}
        activeIndex={currentIndex}
        onClose={() => setIsGridOpen(false)}
        onSelect={jumpToSlide}
        heading="All Certifications"
        items={certifications.map((c) => ({
          title: c.title,
          subtitle: c.issuer,
          image: c.image,
        }))}
      />
    </div>
  );
};

export default Certifications;