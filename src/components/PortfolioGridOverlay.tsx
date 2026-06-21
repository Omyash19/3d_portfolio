import { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import "./styles/PortfolioGridOverlay.css";

interface GridItem {
  title: string;
  subtitle: string;
  image: string;
}

interface Props {
  items: GridItem[];
  isOpen: boolean;
  activeIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
  heading: string;
}

const PortfolioGridOverlay = ({
  items,
  isOpen,
  activeIndex,
  onClose,
  onSelect,
  heading,
}: Props) => {
  const activeCardRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const scrollTimer = window.setTimeout(() => {
      activeCardRef.current?.scrollIntoView({
        block: "center",
        behavior: "auto",
      });
    }, 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(scrollTimer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="grid-overlay" role="dialog" aria-modal="true">
      <div className="grid-overlay-backdrop" onClick={onClose} />
      <div className="grid-overlay-panel">
        <div className="grid-overlay-header">
          <h3>{heading}</h3>
          <button
            className="grid-overlay-close"
            onClick={onClose}
            aria-label="Close overview"
            data-cursor="disable"
          >
            <MdClose />
          </button>
        </div>
        <div className="grid-overlay-scroll">
          <div className="grid-overlay-grid">
            {items.map((item, index) => (
              <button
                key={item.title}
                ref={index === activeIndex ? activeCardRef : null}
                className={`grid-overlay-card ${
                  index === activeIndex ? "grid-overlay-card-active" : ""
                }`}
                onClick={() => onSelect(index)}
                data-cursor="disable"
              >
                <span className="grid-overlay-card-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="grid-overlay-card-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="grid-overlay-card-body">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGridOverlay;
