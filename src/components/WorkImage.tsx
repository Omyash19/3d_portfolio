import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, video, link }: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleMouseEnter = async () => {
    if (video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideoUrl(blobUrl);
    }
  };

  const media = (
    <>
      {link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      <img src={image} alt={alt} />
      {isVideo && <video src={videoUrl} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      {link ? (
        <a
          className="work-image-in"
          href={link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          {media}
        </a>
      ) : (
        <div className="work-image-static">{media}</div>
      )}
    </div>
  );
};

export default WorkImage;
