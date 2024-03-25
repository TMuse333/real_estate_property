import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import './carousel2.css'

import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFullHeight, setIsFullHeight] = useState(false);

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const toggleImageHeight = () => {
    setIsFullHeight(prevState => !prevState);
  };

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column", // Ensure elements stack vertically
          overflow: "hidden",
          position: "relative" // Required for absolute positioning of controls
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {images.map(({ url, alt }, index) => (
            <img
              key={url}
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ transform: `translateX(${-100 * imageIndex}%)`, height: isFullHeight ? "100%" : "50%" }}
            />
          ))}
        </div>
        <div
          id="after-image-slider-controls"
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: ".25rem",
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
      </div>
      <button onClick={showPrevImage} className="img-slider-btn left-btn">
        <ArrowBigLeft aria-hidden />
      </button>
      <button onClick={showNextImage} className="img-slider-btn right-btn">
        <ArrowBigRight aria-hidden />
      </button>
      <button onClick={toggleImageHeight} className="toggle-height-btn">
        {isFullHeight ? "Set Height to 75%" : "Set Height to 100%"}
      </button>
    </section>
  );
};

export default ImageSlider;
